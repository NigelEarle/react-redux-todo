FROM node:boron-alpine

MAINTAINER Nigel Earle 'nigel@earle.io'

EXPOSE 5000

ADD ./server.js /app/
ADD ./package.json /app/

RUN cd app && npm install 

WORKDIR /app

CMD ["npm", "start"]
