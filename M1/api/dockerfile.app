# Use Node.js version 17 as base image
FROM node:17
ENV NODE_ENV=production
WORKDIR /app



# Copy everything from current directory to /app in the container
COPY . .
RUN npm install --production -silent


# Change ownership of /app directory to user 'node'
RUN chown -R node /app
EXPOSE 3000


# Set user to 'node'
USER node
CMD ["npm", "start"]