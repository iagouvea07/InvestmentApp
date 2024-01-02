#!/bin/bash

function backupAPI(){
    find /backup -type f -mtime +1 -exec rm {} \;
    tar -czvf api$(date +'%d-%m-%Y_%H-%M-%S').tar.gz /opt/app/*
}

if [ -d /backup ]; then
    backupAPI

else
    mkdir /backup
    backupAPI
fi