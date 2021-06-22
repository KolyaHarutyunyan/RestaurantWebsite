#!/bin/bash
# restart the nginx server
sudo service restart nginx
# log the status 
service nginx status

# updating the .env file
cd /var/www/menumango/api
npm install
# sudo cp ../config/.env ./constants/

# node restartsudo 
cd /var/www/menumango/api
sudo pm2 start /var/www/menumango/api/main.js --name "menumango"
sudo pm2 restart menumango