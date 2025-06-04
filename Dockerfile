# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev dependencies)
RUN npm install --production=false

# Copy source code
COPY . .

# Set NODE_OPTIONS for OpenSSL legacy provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production || npm install --only=production

# Copy built app from builder stage
COPY --from=builder /app/build ./build

EXPOSE 3000

# Use serve to serve static files
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]