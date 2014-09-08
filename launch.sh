#!/bin/bash

DIR=$(pwd)

docker run \
\
-p 9000:9000 \
\
-p 8080:8080 \
\
-p 8001:8001 \
\
-p 3000:3000 \
\
-p 35729:35729 \
\
-v $DIR:/home/deployer/code/ \
\
-it me_webapp
