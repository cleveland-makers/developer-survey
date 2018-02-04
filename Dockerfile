FROM node:9.4.0-alpine

RUN npm install -g yarn pm2

ENV DATABASE_IP=127.0.0.1 \
    DATABASE_NAME=cleveland_developer_survey \
    DATABASE_PASSWORD=survey \
    DATABASE_PORT=5432 \
    DATABASE_USERNAME=developer \
    GOOGLE_ANALYTICS=

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
