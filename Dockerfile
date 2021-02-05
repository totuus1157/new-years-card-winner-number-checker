FROM node:14.15.4-alpine3.12

RUN apk update && apk add \
  openssh \
  git
RUN npm install --global gh-pages

RUN git config --global user.email "54227150+totuus1157@users.noreply.github.com"
RUN git config --global user.name "totuus1157"

ADD .ssh /root/.ssh
RUN chmod 600 /root/.ssh/*

WORKDIR /usr/src/app
