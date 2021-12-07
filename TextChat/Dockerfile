# pull the Node Docker image
FROM node

# Create the directory inside the container for the app
WORKDIR /usr/src/app

# Copy configuration files to the container
COPY ./package.json ./
COPY ./package-lock.json ./

# Install libraries
RUN npm install

# Copy the code into the container
COPY ./index.js ./index.js
COPY ./public ./public

# our app is running on port 3003 within the container, so need to expose it
EXPOSE 3003

# the command that starts our app
# CMD ["npm", "start"]
CMD ["npm", "run", "start_dev" ]