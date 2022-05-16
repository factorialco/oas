default:
	@echo "Default target disabled"
oas:
	@echo "OAS json retrieved from local repo"
php: oas
	swagger-codegen generate -i ./openapischema.json -l php -o ./sdk-php
ruby: oas
	swagger-codegen generate -i ./openapischema.json -l ruby -o ./sdk-ruby
all: php ruby