FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# COPY webpack.config.js ./ 
# COPY ./src ./

RUN npm config set registry https://registry.npm.taobao.org/

# RUN npm install --global http-server

RUN npm install

COPY . .

RUN npm run prestart

RUN npm run start