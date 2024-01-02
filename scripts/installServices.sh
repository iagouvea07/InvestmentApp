#!/bin/bash

apt install mariadb-client mariadb-server nodejs npm

npm install

mysql < /opt/app/schema.sql

