#https://mherman.org/blog/dockerizing-a-react-app/ 

# pull official base image
FROM node:10

# set working directory
WORKDIR /app
EXPOSE 3000
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN yarn install --silent 
RUN yarn global add react-scripts@3.4.1

# add app
COPY . ./

# start app
CMD ["yarn", "start"]