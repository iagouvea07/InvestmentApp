#!/bin/bash

apt install mariadb-client mariadb-server nodejs npm -y

cd /opt/app

npm install

mysql < /opt/app/schema.sql

