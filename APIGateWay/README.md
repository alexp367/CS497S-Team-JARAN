### This is the nginx API Gateway

The gateway is ran in a docker container
More description to follow

### Setup without docker compose

Install docker

### Create the network if you haven't already created one

`docker network create my_network`

### Build the docker image for dependency Microservies first before this gateway

1.) Containerize the other Microservices and connect them to the network you created

2.) Navigate to /APIGateWay/

3.) `docker build -t nginx -f ./Dockerfile .`

4.) `docker run -d -p 8080:80 --net my_network --name nginx nginx`

### Techologies

nginx

### API

Currently routes to:

"/"

"/textchat": http://textchat:5000