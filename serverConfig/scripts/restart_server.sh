#!/bin/bash
# restart the nginx server
sudo service restart nginx
# log the status 
# service nginx status

# updating the .env file
# cd /var/www/menuz/api
# npm install
# sudo cp ../config/.env ./constants/

# node restartsudo 
cd /var/www/menuz/api
# sudo pm2 start /var/www/menuz/api/main.js --name "menuz"
sudo pm2 restart menuz