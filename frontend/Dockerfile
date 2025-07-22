# Base image nhẹ với Node.js
FROM node:18-alpine

# Cài vite CLI global (dùng để preview)
RUN npm install -g vite

# Tạo thư mục làm việc
WORKDIR /app

# Copy thư mục dist đã build sẵn
COPY dist ./dist

# Optional: copy package.json để version tracking
COPY package.json .

# Mở cổng mặc định của Vite preview: 4173
EXPOSE 4173

# Chạy server production từ dist
CMD ["vite", "preview", "--host"]
