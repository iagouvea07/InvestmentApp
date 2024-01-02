#!/bin/bash

apt install mariadb-client mariadb-server nodejs npm -y

cd /opt/app

npm install

npm install -g pm2

mysql < /opt/app/schema.sql

