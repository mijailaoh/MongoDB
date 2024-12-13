# MongoDB
The following repository is a simple way to create and manage a MongoDB database. Using Docker

## Set env
1. Please set env into db.env

## Config mongo-init.js
1. Define your user
2. Define your password
3. Define your DB Name
4. You can modify or add default collections and data

## RUN
docker-compose up -d 
docker-compose -f docker-compose-old.yml up


## STOP
docker-compose down -v

## CREATE (backup)
docker exec -i postgres_db pg_dump -U admin tmk_db > backup/restore.sql

# RESTORE (backup)
docker exec -i postgres_db psql -U admin -d tmk_db < backup/backup.sql

## CONFIG (dbeaver)
