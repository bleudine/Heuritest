FROM node:10 as build-stage

RUN npm i -g yarn

COPY . /app

RUN cd /app/app && yarn

WORKDIR /app/app

RUN yarn run build

FROM nginx:1.15

COPY --from=build-stage /app/app/dist /usr/share/nginx/html
