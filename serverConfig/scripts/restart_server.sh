#!/bin/bash
# restart the nginx server
sudo service restart nginx
# log the status 
service nginx status

# updating the .env file
cd /var/www/menuzMini/api
npm install
# sudo cp ../config/.env ./constants/

# node restartsudo 
cd /var/www/menuzMini/api
sudo pm2 start /var/www/menuzMini/api/main.js -name "menuzMini"
sudo pm2 restart menuzMini