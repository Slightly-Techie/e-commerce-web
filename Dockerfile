
FROM node:16-alpine as build
WORKDIR /app
COPY ./package*.json .
RUN npm install
ENV NODE_ENV=production
COPY . .
RUN --mount=type=secret,id=VITE_BASE_URL \
    VITE_BASE_URL="$(cat /run/secrets/VITE_BASE_URL)" \
    npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=build /app .
RUN npm install -g serve
CMD ["serve", "-s", "-l", "8080", "dist"]
