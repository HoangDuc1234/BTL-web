FROM node:18

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm install
RUN npm install react-scripts

# Set NODE_OPTIONS
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]