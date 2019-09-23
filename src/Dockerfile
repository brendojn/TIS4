FROM node:alpine

RUN apk --no-cache add --virtual builds-deps build-base 

RUN npm install -g nodemon 

EXPOSE  3000

CMD ["npm", "start"]