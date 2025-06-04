FROM node:18

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm install

# Set NODE_OPTIONS
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build

EXPOSE 3434

CMD ["npm", "start"]