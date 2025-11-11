#!/bin/bash
cd /home/stonepark/ || exit 1

# ПРИНУДИТЕЛЬНО обновляем сертификат
docker compose run --rm --remove-orphans certbot certonly --webroot --webroot-path=/var/www/html -d palitrakamnya.ru -d www.palitrakamnya.ru --force-renewal --non-interactive

# Перезагружаем nginx
docker compose kill -s SIGHUP nginx
