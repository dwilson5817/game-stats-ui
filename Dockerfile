FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm install \
  && npm run ng build

FROM nginx:1.21.1-alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist/game-stats-ui .
