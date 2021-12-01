# Authentication Microservice

## Information
**Developer** - Alex Preston \
**Service Overview** - This service allows users to register an account with a username and password and then login to their account with those credentials. Users will not be able to make an account if the username is already in use. This will be important for both the security of users' accounts as well as allowing us to connect them to their profile upon logging in.

## Events
This service has events that redirect users to the proper page upon succesfully creating an account or logging in. Upon clicking the register button a register event is triggered which is in the AuthDB service. This checks to see if the desired username is available, and if it is, then it is added to the database and the returnToLogin event is triggered, redirecting the user to the homepage where they may fill in their profile. Upon clicking the login button a loginAttempt event is triggered in AuthDB. This checks to see if the user correctly entered their password, and if they did, this event then redirects the user to the profile creating page. 

## API Endpoints:
* ```/Register```: Registers a user for a new account and creates their profile.
    * Uses HTTP ```POST```, to create a new profile for the user.
    * Sends a JSON object containing all of the user's registration information to MongoDB to be stored. Leaves fields blank that users are to fill in themselves using the profile microservice, such as their age or interests.
    * HTTP Status code: 200 = account registered successfully, 400 = unable to register account (username is not available)
* ```/LoginAttempt```: Checks if users have entered their correct login information. Upon successful login, redirects users to the homepage.
    * Retrieves the profile object from the database associated with the given username to check if the user entered their password correctly.
    * Uses HTTP ```POST``` to redirect the user to the homepage.
    * HTTP Status code: 200 = login successful, 400 = login unsuccessful. Note: we do not provide more information than this to the users, such as "Password Incorrect" because this information could be used maliciously by hackers. Thus, we keep it brief, as most users will double check to make sure that they typed their login information correctly and will see where they made a mistake on their own.