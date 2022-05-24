default:
	@echo "Default target disabled"
oas:
	@echo "OAS json retrieved from local repo"
php ruby java openapi openapi-yaml nodejs-server python typescript-axios: oas
	swagger-codegen generate --http-user-agent="factorial-sdk" -i ./openapischema.json -l $@ -o ./sdk-$@
all: php ruby java openapi openapi-yaml nodejs-server python typescript-axios
clean:
	@rm -rf sdk-*