
# CS497S-Team-JARAN

### Our project is _Valen_, the newest and **hottest** dating app of 2021

## Run Instructions:

1. Install Docker
2. Navigate to the top level of the project
3. Build and run in a docker container:\
    `docker compose up -d`\
    Note: This will build and run all of the microservices. Directions to run each microservice individually can be found in their respective README's.
4. Bringing servcies and images down:\
    `docker compose down --rmi all`

## Microservices
* Authentication
* FrontEnd
* Swiping (User Matching)
* Text Chat
* Date Recommender
* Database (MongoDB)
* API Gateway (Nginx)
* Event Bus

### Each microservice can be found in its own respective directory. Learn more about them in their own README.

## Design Overview
![HTML](FrontEnd/public/System_Design.png)


## Software Used
* **FrontEnd** - HTML/EJS and CSS. App is rendered using ReactJS
* **BackEnd** - NodeJS
* **Routing & Events** - ExpressJS and Axios
* **Database** - MongoDB (NoSQL)
* **Containerization/Running** - Docker & Docker-Compose
* **API Gateway** - Nginx
* **Interservice Communication** - Primarily HTTP and REST, and socket.io for TextChat

## Developers
* Alex Hickey
* Alex Preston
* Jason Canterbury
* Nam Phan
* Ryan Loofbourrow
