FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# COPY webpack.config.js ./ 
# COPY ./src ./

RUN npm config set registry https://registry.npm.taobao.org/

RUN npm install --global serve

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

RUN npm run build

ENTRYPOINT [ "serve", "./build", "-p", "5000"]