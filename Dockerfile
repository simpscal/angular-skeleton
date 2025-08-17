# Stage 1: Build all applications
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json* nx.json ./

# Install dependencies cleanly
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build all projects for production
RUN npx nx run-many --target=build --all --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Remove the default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy the built applications from the builder stage
COPY --from=builder /app/dist/apps /usr/share/nginx/html

# Expose ports for incoming traffic
EXPOSE 80
EXPOSE 4201
EXPOSE 4202
EXPOSE 4203

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
