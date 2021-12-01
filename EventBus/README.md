# Front End/Profile Microservice

## Information
**Service Overview** - Handles events for all microservices. Rather than a microservice communicating directly with another one, the event bus serves as a middleman in this exchange of data. Microservice 1 -> Event Bus -> Microservice 2. This allows for simple and effective communication between microservices.\
**Run Instructions** - `npm start` within the directory. Note that this microservice gets run by following the run instructions within the root directory; these instructions are for if you want to run this microservice individually.

## API Endpoints:
* ```/events```: Handles all incoming events. Each event has a type, and this type tells the event bus how to handle the event (which microservice it came from, what the event bus needs to do, where the event should get forwarded to)
    * Uses HTTP ```POST``` to forward events.
    * Possible event types: `saveProfile`, `getProfile`, `getCommonInterests`, `LoginAttempt`, `Register`, `returnToLogin`, `Login`. These event types are all explained in the README's of the respective microservices that send these evens.
    * HTTP Status codes: forwards codes that get given to the event bus, attached to each event.

## Interactions & Scalability
The Event Bus is an integral part to a scalable web system. This microservice communicates with nearly all other microservices. This allows for simple and effective communication between microservices, and is also easily upgradable in the event that more microservices are added.