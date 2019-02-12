FROM node:9-alpine

WORKDIR /home/node/app

COPY ./package* ./
RUN npm install && \
  npm cache clean --force

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
