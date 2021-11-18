# Front End/Profile Microservice

## Information
Developer: Alex Hickey setting up MongoBD/everyone connecting their Microservices to it \
Service Overview: Database for persisting data. \
Each microservice that requires persistent data makes its own connection to this microservice. That way, services can proxy the Database microservice for exactly what they need.

## Interactions & Scalability

This microservice communicates many other microservices (or perhaps, other microservices communicate with this one?) Services may send a request to the database microservice, which it in turn fulfills and provides a response, typically either success or failure. Some of the things that another microservice may ask of the database are: create a new data entry, update an existing data point, give me all data points in this collections. This is scalability because it persists a large amount of data. Additionally, it is scalable because each microservice connects to the database in their own, unique way. This way, if one database microservice goes down (for example, date recommender), the other microservices may still interact with the database as they need to.