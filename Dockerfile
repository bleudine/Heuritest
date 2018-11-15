FROM node:10 as build-stage

RUN npm i -g yarn

RUN cd /app && yarn

WORKDIR /app

RUN yarn run build

FROM nginx:1.15

COPY --from=build-stage /app/dist /usr/share/nginx/html
