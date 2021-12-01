# TextChat Microservice

## Information
**Developer** - Nam Phan\
**Service Overview** - FrontEnd and BackEnd code to allow users to chat with each other over text.\
**Run Instructions** - `npm start` within the directory. Note that this microservice gets run by following the run instructions within the root directory; these instructions are for if you want to run this microservice individually. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
**Techologies Used** - This app uses Node.js, Express, and Socket.io

## API Endpoints
Currently routes to `/` for the home of the app.\
Listens for `/submit` event and then emits the message to all connected chat clients.\
Also listens to Socket.io messages for `/chat` and rerenders the chat box upon new message.

## Interactions & Scalability
This microservice interacts with the Database, Event Bus, and API Gateway microservices.