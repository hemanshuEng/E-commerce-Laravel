ifeq ($(OS),Windows_NT)
	CPF := copy
	CNF := FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i
else
	CPF := cp
	CNF := docker stop $$(docker ps -q)
endif

setup:
	@echo "copying env"
	@make env
	@echo "stopping all container"
	@make stop-container
	@echo "Start docker Contaier and build"
	@docker-compose up -d --build
	@echo "installing Packages"
	@make composer-install
	@echo "installing npm package"
	@make dev
	@echo "genererate key"
	@make key-generate
	@echo "migratioin"
	@make migrate
	@echo "seeder"
	@make seeder

start:
	@docker-compose up -d

stop:
	@docker-compose stop

bash:
	@docker-compose exec php-fpm bash

watch:
	@docker-compose exec php-fpm npm run watch

dev:
	@docker-compose exec php-fpm npm run dev

prod:
	@docker-compose exec php-fpm npm run dev

composer-install:
	@docker-compose exec php-fpm composer install

env:
	$(CPF) .env.example .env

key-generate:
	@docker-compose exec php-fpm php artisan key:generate

migrate:
	@docker-compose exec php-fpm php artisan migrate

seeder:
	@docker-compose exec php-fpm php artisan seeder

database-dump:
	@docker-compose exec db mysqldump -uroot -pStrongPassword homestead > backup.sql

stop-container:
	$(CNF)

