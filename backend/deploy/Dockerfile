FROM node:12-buster-slim
WORKDIR /app
ADD ./backend/package*.json  /app/
RUN npm install 
COPY . .
EXPOSE 3333

CMD ["npm", "run", "start"]
