FROM node:18

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm install

# Set NODE_OPTIONS
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build
RUN npm run build 

EXPOSE 3001

CMD ["npm", "start"]