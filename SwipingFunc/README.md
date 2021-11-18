# Swiping Functionality Microservice

## Information

This is the Swiping Service Alpha front end and beta back end code. \
Developer: Ryan Loofbourrow. \
Purpose: Allows users to 'swipe' on other users to match with them if there is a mutual interest. \
Software: This uses HTML, CSS, and Node JS

## Interactions & Scalability

This microservice communicates with both the Database microservice and the Event Bus. Currently, the pool of profiles that it shows to users exist in Firebase DB, but this will soon be migrated to MongoDB so that it looks through the same set of profiles that users can create for themselves using the frontend microservice. When users are swiping, they will see other people's profiles that are stored in the database. Additionally, the event bus communicates with this microservice when a new profile is created or when someone updates their profile to let this microservice know of the change so that it updates the profiles that it shows to users, rather than showing outdated/not showing all profiles. \
This is scalable because it searches through profiles that are persistently stored in a database. Additionally, the database can hold many more profiles than could be stored in local storage, thus allowing this application to be used by a large number of people. Finally, the microservice architechture of this entire application enables all parts to work independently, so that if there is an issue with this microservice (such as the profiles database goes down), it will not affect other microservices, communications, or databases.