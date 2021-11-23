Developer: Nam Phan
# This is the TextChat Service

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode with nodemon.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### Techologies

This app uses Node.js, Express, and Socket.io

### API

Currently routes to "/" for the home of the app

Listens for "submit" event and then emits the message to all connected chat clients.

Also listens to Socket.io messages for "chat" and rerenders the chat box.
