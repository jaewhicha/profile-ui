# build environment
FROM node:15.14 as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build:production

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]