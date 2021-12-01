# Database Microservice

## Information
**Developer** - Alex Hickey setting up MongoDB/everyone connecting their Microservices to it \
**Service Overview** - Database for persisting data. Each microservice that requires persistent data makes its own connection to this microservice. That way, services can proxy the Database microservice for exactly what they need.\
**Run Instructions** - `node ProfileDB/ProfileDB.js` to run the Profile Database, and `node AuthDB/AuthDB.js` to run the Authentication Database. Note that this microservice gets run by following the run instructions within the main directory; these instructions are for if you want to run this microservice individually.

## Interactions & Scalability
This microservice communicates many other microservices and, other microservices communicate with this one. Services may send a request to the database microservice, which it in turn fulfills and provides a response, typically either success or failure. Some of the things that another microservice may ask of the database are: create a new data entry, update an existing data point, or give me all data points in this collection. This is scalable because it persists a large amount of data to safely store it in the event of system failures. Additionally, it is scalable because each microservice connects to the database in their own, unique way. This way, if one database microservice goes down, the other microservices may still interact with the database as they need to.

## Examples
Profiles are stored as JSON objects in the following format:
```
user-id: String
name: String
myGender: Enum (Male, Female, Other)
preferredGender: Enum (Male, Female, Both, Other)
myAge: Integer
maxPreferredAgeGap: Integer
interests: Array
description: String
```
Example from the profile database:
```
user-id:"00000014"
name:"John Doe"
myGender:"Male"
preferredGender:"Female"
myAge:"22"
maxPeferredAgeGap:"2"
interests:
    0:"football"
    1:"movies"
    2:"biking"
    3:"video games"
description:"I like long walks on the beach and my dog, Rover."
```