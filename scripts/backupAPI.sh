#!/bin/bash

function backupAPI(){
    pm2 stop /opt/app/app.js
    find /backup -type f -mtime +2 -exec rm {} \;
    tar -czvf /backup/api_$(date +'%d-%m-%Y_%H-%M-%S').tar.gz /opt/app/
}

if [ -d /backup ]; then
    backupAPI

else
    mkdir /backup
    backupAPI
fi