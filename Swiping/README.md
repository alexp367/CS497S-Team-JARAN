# Swiping Functionality Microservice

## Information
**Developer** - Ryan Loofbourrow \
**Purpose** - Allows users to 'swipe' on other users to match with them if there is a mutual interest. Swipe right to show your interest in another person, or swipe left to pass and move on to the next person. The swiping mechanic will be familiar for people who have used other dating apps before, and will be easy to learn for new dating app users, and is a fun, modern method of matching with other people.\
**Run Instructions** - `npm start` within the SwipingFunc/valen subdirectory. Note that this microservice gets run by following the run instructions within the main directory; these instructions are for if you want to run this microservice individually.

## Interactions & Scalability
This microservice communicates with the Database microservice, the API Gateway, and the Event Bus. When users are swiping, they will see other people's profiles that are stored in the profile database. Additionally, the event bus communicates with this microservice when a new profile is created or when someone updates their profile to let this microservice know of the change so that it updates the profiles that it shows to users, rather than showing outdated/not showing all profiles.

This is scalable because it searches through profiles that are persistently stored in a database. Additionally, the database can hold many more profiles than could be stored in local storage, thus allowing this application to be used by a large number of people. Finally, the microservice architechture of this entire application enables all parts to work independently, so that if there is an issue with this microservice (such as the profiles database goes down), it will not affect other microservices, communications, or databases.