# Nginx API Gateway

## Information
**Run Instructions** - The Gateway is run inside a docker container. Directions:
1. Install docker
2. Create the network if you haven't already created one: `docker network create my_network`
3. Build the docker image
    1. navigate into /APIGateWay/
    2. `docker build -t nginx -f ./Dockerfile .`
    3. `docker run -d -p 8080:80 --net my_network --name nginx nginx`

**Techologies Used** - Nginx

## API Endpoints
Currently routes to:
* `/`
* `/textchat`: http://localhost:5003



