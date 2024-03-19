.PHONY: build
build:
	npm i && npm run build
start: 
	$(MAKE) build
	pm2 start --name=hx-fe-user npm -- start

restart:
	$(MAKE) build
	pm2 restart hx-fe-user --update-env