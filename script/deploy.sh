#!/bin/bash

aws s3 sync ./dist s3://nomini-web/
aws cloudfront create-invalidation --distribution-id E2QRD0X4HKYMKJ --paths /*
