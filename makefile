default:
	@echo "Default target disabled"
oas:
	@echo "OAS json retrieved from local repo"
php ruby java nodejs-server python typescript-axios: oas
	swagger-codegen generate --http-user-agent="factorial-sdk" -i ./openapischema.yaml -l $@ -o ./sdk-$@ --disable-examples
all: php ruby java openapi openapi-yaml nodejs-server python typescript-axios
clean:
	@rm -rf sdk-*