FROM node:8

# Install dependencies
RUN npm install --global yarn create-react-app

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN yarn

CMD yarn start