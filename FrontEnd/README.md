# Front End/Profile Microservice

## Information
**Developer** - Alex Hickey \
**Service Overview** - Primary Front End work for the application. Allows users to create and update their dating profile. This includes uploading a profile picture, answering information about themselves and what they are looking for in others, and adding free-form information to their profile. \
**Purpose** - The cornerstone of any dating website - your profile! Allows users to customize the application to make it their own, and also serves as the homepage for the website after users have registered. This page is where users are sent to after they login/authenticate. \
**Future Improvements** - Allow users to upload multiple photos of themself in slideshow-format, allow users to include more information about them. More prompts for them to choose from to answer, more characteristics about them/they like in others, etc. The focus of this frontend is not to create a beautiful website, rather, the focus is on scalability.\
**Run Instructions** - `npm start` within the directory. Note that this microservice gets run by following the run instructions within the root directory; these instructions are for if you want to run this microservice individually.

## API Endpoints:
* ```/Save```: Saves the user's profile
    * Uses HTTP ```PUT``` to update their existing profile.
    * Sends a JSON object containing all of the user's profile data to a MongoDB collection to be stored.
    * HTTP Status codes: 200 = profile updated successfully, 400 = error updating profile
* ```/, /FindMatches, /ViewMatches```: Redirects user to the appropriate page.
    * Uses HTTP ```GET``` to redirect the user to the specified page. Note: endpoint ```/``` redirects to the homepage.
    * Redirects user to the HTML page they requested.
    * HTTP Status codes: 200 = redirected successfully, 400 = unable to redirect, 404 = requested page not found.

## Interactions & Scalability
This microservice communicates with the Database microservice, API Gateway, and the Event Bus. When the ```Save``` button is pressed, this lets the event bus know that an event has occurred. The event bus handles this event, which forwards the request to the database microservice, which in turn updates the user's profile in MongoDB with the information they entered. Finally, a response gets forwarded back to the profile page (the user) letting them know that their profile has or has not been saved successfully.
> Well, how is it scalable?

This is scalable because users' profiles will be stored as persistant data and will not be lost to any errors. Also, if something goes wrong with the handling of profiles in the database, this will not affect every microservice that needs to access a database. Individual microservices create their own connections and have their own interactions with the database, so if one goes down, the others will remain in tact. For example, if the profile saving microservice goes down, other microservices will still be able to undergo their own interactions with the database.