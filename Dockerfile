### STAGE 1: Build ###
FROM node:12.20-alpine3.10 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build:prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/ngx-levi9 /usr/share/nginx/html