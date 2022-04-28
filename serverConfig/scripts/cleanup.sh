#!/bin/bash

#remove everything from admin and client
rm -R -f /var/www/menumango/admin/*
rm -R -f /var/www/menumango/webapp/*
rm -R -f /var/www/menumango/api/*
rm -R -f /etc/nginx/sites-enabled/menumango.live.nginx.config
