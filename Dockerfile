# Stage 1: Build the React application
    FROM node:lts-alpine as builder

    WORKDIR /app

    # Copy package.json and package-lock.json (or yarn.lock)
    COPY package.json ./
    COPY yarn.lock ./

    # Install dependencies
    RUN yarn install --frozen-lockfile

    # Copy the rest of the application code
    COPY . .

    # Build the React app
    RUN yarn build

    # Stage 2: Serve the application with Nginx
    FROM nginx:alpine as production

    # Copy custom Nginx configuration
    COPY nginx.conf /etc/nginx/conf.d/default.conf

    # Copy the built React app from the builder stage
    COPY --from=builder /app/dist /usr/share/nginx/html

    # Expose port 80
    EXPOSE 80

    # Start Nginx
    CMD ["nginx", "-g", "daemon off;"]