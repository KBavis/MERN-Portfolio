# FROM node:9-slim
FROM node:12
WORKDIR /server
COPY package.json /server
RUN npm install
COPY . /server
CMD ["npm", "start"]