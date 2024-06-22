# pull official base image
FROM node:18

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

RUN npm run build

RUN npm install -g serve

EXPOSE 3000
# add app
COPY . ./

# start app
CMD serve -s build