# 1. Use Node.js LTS version as base image
FROM node:20-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy only package.json and package-lock.json first (better caching for dependencies)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port your Express app listens on (default 3000)
EXPOSE 3000

# 7. Set environment variable for production
ENV NODE_ENV=production

# 8. Start the application
CMD ["npm", "run", "start"]

