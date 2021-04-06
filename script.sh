#!/bin/bash

OUTPUT=$(dig +short myip.opendns.com @resolver1.opendns.com)
sed -i "s/localhost/$OUTPUT/" frontend/src/app/csvupload/csvupload.service.ts
