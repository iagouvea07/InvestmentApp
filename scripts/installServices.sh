#!/bin/bash

apt install mariadb-client mariadb-server nodejs npm -y

npm install

mysql < /opt/app/schema.sql

