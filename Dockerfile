
FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

RUN npm install @prisma/client

COPY . .

RUN npx prisma generate

EXPOSE 8080


CMD [ "npm", "run", "start:prod" ]