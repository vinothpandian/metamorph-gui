FROM node:10.13-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --production false
RUN yarn global add serve

COPY . .
RUN yarn build