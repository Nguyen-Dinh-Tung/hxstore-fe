.PHONY: build
build:
	npm i && npm run build
start: 
	$(MAKE) build
    PORT=3003 pm2 start --name=hx-fe-user npm -- start -- -p 3003

restart:
	$(MAKE) build
	pm2 restart hx-fe-user --update-env