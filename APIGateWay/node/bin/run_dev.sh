#! /bin/bash
docker run --rm --name my_apigateway_1_dev -v "$(pwd):/usr/src/app" -p 5000:5000 apigateway_1_dev