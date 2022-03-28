mongo:
	docker run -p 27017:27017 \
	-d \
	--rm \
	--name mongodb \
	--network booking-net \
	-v mongo-data:/data/db \
	mongo 

backend:
	docker run -p 5000:5000 \
	-d \
	--rm \
	--name booking-backend \
	--network booking-net \
	booking-backend
	
frontend:
	docker run -p 3000:3000 \
	-d \
	--rm \
	--name booking-frontend \
	booking-frontend

