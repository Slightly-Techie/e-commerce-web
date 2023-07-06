
FROM node:16-alpine as build
WORKDIR /app
COPY ./package*.json .
RUN npm install
ENV NODE_ENV=production
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=build /app .
RUN npm install -g serve
CMD ["serve", "-s", "-l", "8080", "dist"]
