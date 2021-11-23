# pull the Node Docker image
FROM node:alpine

# Create the directory inside the container for the app
WORKDIR /usr/src/app

# Copy configuration files to the container
COPY ./package.json ./
COPY ./package-lock.json ./

# Install libraries
RUN npm install
RUN npm audit fix

# Copy the code into the container
COPY ./public ./public
COPY ./src ./src

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000

# the command that starts our app
CMD ["npm", "start"]