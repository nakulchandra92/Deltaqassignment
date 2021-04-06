from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from werkzeug.datastructures import  FileStorage
from os import path
from flask_cors import  CORS, cross_origin
import json
import pandas 
import numpy as np
import sympy
import requests
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#API for uploading the file to flask backend

@app.route('/uploader', methods = ['GET', 'POST'])
def upload_files():
   print("inside upload")
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      print("files",f)
      return json.dumps("file saved successfully")

#API for analysing the data and returning linear dependant variable

@app.route("/process",methods=['GET', 'POST'])
def processfile():
    file=str(request.args['file'])
    filename=file
    if (path.exists(filename)):
        
        df=pandas.read_csv(filename)
        df = df.loc[:, ~df.columns.str.contains('^Unnamed')]
        df_cleaned=df.dropna()
        reduced_form, inds = sympy.Matrix(df_cleaned.values).rref()
        df_cleaned.drop(df_cleaned.columns[[inds]],axis=1,inplace=True)
        linear_dep_variable=[]
        if df_cleaned.empty:
            return json.dumps("All the variables in the vector are linearily independent")
        else:
            for col_name in df_cleaned.columns:
                linear_dep_variable.append(col_name)
            linear_dep_variable_string=",".join(linear_dep_variable)
            return json.dumps("Dependant variables : "+linear_dep_variable_string)
    else:   
        return json.dumps("file not available for checking")




if __name__ == '__main__':
   app.run(host='0.0.0.0', debug = True, port=5001)
