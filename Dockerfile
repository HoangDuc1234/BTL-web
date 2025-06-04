FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Set NODE_OPTIONS for OpenSSL legacy provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]