FROM node:20.9.0

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source

COPY ./dist /usr/src/app/dist

CMD [ "node",'./dist/server' ]