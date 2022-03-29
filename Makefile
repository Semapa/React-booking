mongo:
	docker run -p 27017:27017 \
	-d \
	--rm \
	--name mongodb \
	--network booking-net \
	--env-file ./config/development.env \
	-v mongo-data:/data/db \
	mongo 

backend:
	docker run -p 8080:8080 \
	-d \
	--rm \
	--name booking-backend \
	--network booking-net \
	-v /home/semapa/WebProject/React-booking/server:/app \
	-v /app/node_modules \
	--env-file ./config/development.env \
	booking-backend
	
frontend:
	docker run -p 3000:3000 \
	-d \
	--rm \
	--name booking-frontend \
	-v /home/semapa/WebProject/React-booking/client/src:/app/src \
	booking-frontend

start:
	make mongo backend frontend

stop:
	docker stop mongodb booking-backend booking-frontend

dev:
	docker-compose -f docker-compose.yml up -d

build:
	docker-compose -f docker-compose.production.yml up -d

down:
	docker-compose down	