# We label our stage as 'builder'
FROM node:10 as builder

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i

COPY . .

## Build the app and store the artifacts in www folder
RUN npm run build_prod

FROM nginx:1.13.7-alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist and public folder to default nginx public folder
COPY --from=builder /app/www /usr/share/nginx/html

## Copy our default nginx config
COPY /nginx.conf /etc/nginx/nginx.conf

EXPOSE 9979

CMD ["nginx", "-g", "daemon off;"]
