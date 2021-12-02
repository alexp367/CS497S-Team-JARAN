# DateRecommender Microservice

## Information
**Developer** - Jason Canterbury\
**Purpose** - Highlights common interests between matched users and recommends dates and conversation topics.\
**Run Instructions** - `npm start` within the directory. Note that this microservice gets run by following the run instructions within the root directory; these instructions are for if you want to run this microservice individually.\
**Techologies Used** - This microservice uses Node.js and Express.

## API Endpoints:
* ```/getCommonInterests```: Gets the common interests between two matched users.
    * Uses HTTP ```POST``` to request each user's interests from the MongoDB profile collection.
    * Iterates through each user's list of interests, keeping track of which interests they share.
    * HTTP Status code: 200 = success, list of common interests is returned (could be empty if no common interests exist). 400 = failure.

## Interactions & Scalability
This microservice communicates with the FrontEnd/Profile microservice, TextChat microservice, Database, API Gateway, and the Event Bus. It works very closely with the profile microservice because it allows users to select interests from a list as a part of the profile page. It later queries the MongoDB collection that stores users profile to see which interests two matched users share, and it then uses this information to suggest conversation topics and dates ideas. This information is shown in the text chat between two users.