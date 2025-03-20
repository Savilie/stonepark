COMPOSE="/usr/local/bin/docker-compose --no-ansi"

cd /home/stonepark/
$COMPOSE run certbot renew && \
$COMPOSE kill -s SIGHUP nginx
