FROM node:14.18.1

WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY ./public ./public
COPY ./src ./src
EXPOSE 3004
CMD ["npm", "start"]