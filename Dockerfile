# Base image
FROM node:12-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the React app's source code to the container
COPY . .

# Build the React app
RUN npm run build

# Start the React app
CMD ["npm", "start"]
