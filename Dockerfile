# Use the official Node.js 18.17.0 image as base
FROM node:alpine AS build

# Set working directory for the frontend
WORKDIR /usr/src/app/frontend

# Copy frontend package.json and package-lock.json
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY frontend .

# Build the frontend
RUN npm run build

# Set working directory for the backend
WORKDIR /usr/src/app/backend

# Copy backend package.json and package-lock.json
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend application code
COPY backend .

# Expose the port the app runs on
EXPOSE 5000

# Command to run your application
CMD ["node", "index.js"]