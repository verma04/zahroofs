FROM node:12.18.3-alpine

WORKDIR /usr/src/zahroof

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]