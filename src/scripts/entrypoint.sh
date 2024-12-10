#!/bin/bash

while ! npx prisma migrate dev 2>&1; do
    echo "Makemigrations"
    sleep 3
done

echo "App is running....."

npm run start-babel
sleep 3

exec "$@"