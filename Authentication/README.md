## Authentication Microservice

Developer: Alex Preston 

Overview:
This service allows users to register with a username and password and then login to their account with those credentials. Users will not be able to make an account if the username is already in use. This will be important for both the security of users accounts as well as allowing us to connect them to their profile upon logging in.

API Endpoints: 

/ 
Uses HTTP GET to redirect the user to the login page. \
Redirects the user to the login html page. \
HTTP status code 200: succesfully redirected to login page 

/login /register \
Uses HTTP GET to redirect to the correct page or POST to either log the user in or register their account \
Takes in the username and password from the request body. \
HTTP status code 200: on a succesful login or redirect 201: on the succesful creation of login credentials 401: on a failure to register credentials or a failure to login. 
