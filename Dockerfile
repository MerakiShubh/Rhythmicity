# Use Ubuntu as the base image
FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get clean

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which your Next.js application will run
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
