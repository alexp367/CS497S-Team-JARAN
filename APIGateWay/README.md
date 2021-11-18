### This is the nginx API Gateway

The gateway is ran in a docker container
More description to follow

### Setup

run these commands for now, will build a docker compose file later.

Install docker

### Create the network if you haven't already created one

`docker network create my_network`

### Build the docker image

1.) navigate into /APIGateWay/

2.) `docker build -t nginx -f ./Dockerfile .`

3.) `docker run -d -p 8080:80 --net my_network --name nginx nginx`

### Techologies

nginx

### API

Currently routes to:



