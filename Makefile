migrate-latest:
	docker-compose -f docker-compose.builder.yml run --rm migrate-latest-$(env)

app-up:
	docker-compose -f docker-compose.$(env).yml up -d

app-down:
	docker-compose -f docker-compose.$(env).yml down

logs:
	docker logs -t -f $(appname)
