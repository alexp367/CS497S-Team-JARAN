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

2.) `docker build -t node -f ./node/Dockerfile ./node`

3.) `docker build -t nginx -f ./nginx/Dockerfile ./nginx`

4.) docker run -d -p 8080:8080 --net my_network --name nginx nginx	

### `npm start`

Runs the app in the development mode with nodemon.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### Techologies

nginx

### API

Currently routes to:



