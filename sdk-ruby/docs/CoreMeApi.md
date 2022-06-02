# SwaggerClient::CoreMeApi

All URIs are relative to *https://api.factorialhr.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_me_get**](CoreMeApi.md#v1_me_get) | **GET** /v1/me | Get information about current user

# **v1_me_get**
> v1_me_get

Get information about current user

After token grant, get information of the token holder

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: apikey
  config.api_key['x-api-key'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['x-api-key'] = 'Bearer'

  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = SwaggerClient::CoreMeApi.new

begin
  #Get information about current user
  api_instance.v1_me_get
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CoreMeApi->v1_me_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



