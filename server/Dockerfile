FROM node:18

WORKDIR /app

# Fix DNS issues
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf
RUN echo "nameserver 8.8.4.4" >> /etc/resolv.conf

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code and .env
COPY . .

# Set NODE_OPTIONS
ENV NODE_OPTIONS=--openssl-legacy-provider

# Set environment variables directly (backup)
ENV DB_HOST=database-1.cxiu4cc20fb0.ap-southeast-2.rds.amazonaws.com
ENV DB_PORT=5432
ENV DB_NAME=btlwebdb
ENV DB_USER=postgres
ENV DB_SSL=true
ENV PORT=3434

EXPOSE 3434

CMD ["npm", "start"]