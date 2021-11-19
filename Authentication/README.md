## Authentication Microservice

Developer: Alex Preston 

Overview:
This service allows users to register with a username and password and then login to their account with those credentials. Users will not be able to make an account if the username is already in use. This will be important for both the security of users accounts as well as allowing us to connect them to their profile upon logging in.

Events:
This service has events that redirect to the proper page upon succesfully creating an account or logging in. Upon clicking the register button a register event is triggered which is in the AuthDB service. This attempts to get the given username from the database if unsuccesful the username is available it is added to the database and the returnToLogin event is triggered redirecting to the login page. Upon clicking the login button a loginAttempt event is triggered in AuthDB. This attempts to get the info relating to the username given from the database and if it matches up triggers the login event. This event redirects the user to the profile creating page. 
