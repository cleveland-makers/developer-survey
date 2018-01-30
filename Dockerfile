FROM node:9.4.0-alpine

RUN npm install -g yarn pm2

ADD . /root

WORKDIR /root

RUN cd /root && \
    yarn install && \
    yarn run build-node && \
    yarn run build-webpack && \
    rm -rf node_modules && \
    yarn install --production && \
    yarn cache clean

EXPOSE 8080

CMD ["yarn", "run", "docker"]
