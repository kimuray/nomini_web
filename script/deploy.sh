#!/bin/bash

aws s3 sync ./site s3://nomini-web/
aws cloudfront create-invalidation --distribution-id E2QRD0X4HKYMKJ --paths /*
