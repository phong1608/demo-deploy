# 1. Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy source code and build
COPY . .
RUN npm run build

# 2. Production stage
FROM nginx:stable-alpine

# Copy built files to Nginx HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config (optional)
# Create a custom nginx.conf if you want SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
