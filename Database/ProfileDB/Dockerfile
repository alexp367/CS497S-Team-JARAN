FROM node:current-alpine3.12

WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8001
CMD ["npm", "start"]