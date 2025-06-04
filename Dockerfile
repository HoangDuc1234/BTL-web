FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force
RUN npm ci --verbose

# Verify react-scripts installation
RUN npm list react-scripts
RUN which react-scripts || echo "react-scripts not in PATH"
RUN ls -la node_modules/.bin/react-scripts || echo "react-scripts binary not found"

# Copy source code
COPY . .

# Set NODE_OPTIONS for OpenSSL legacy provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]