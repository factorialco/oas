# SwaggerClient::CoreEmployeesV2Api

All URIs are relative to *https://api.factorialhr.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_core_employees_get**](CoreEmployeesV2Api.md#v2_core_employees_get) | **GET** /v2/core/employees | Get employees from a company
[**v2_core_employees_id_get**](CoreEmployeesV2Api.md#v2_core_employees_id_get) | **GET** /v2/core/employees/{id} | Get employee
[**v2_core_employees_id_put**](CoreEmployeesV2Api.md#v2_core_employees_id_put) | **PUT** /v2/core/employees/{id} | Update employee
[**v2_core_employees_post**](CoreEmployeesV2Api.md#v2_core_employees_post) | **POST** /v2/core/employees | Create employee

# **v2_core_employees_get**
> Array&lt;Employee&gt; v2_core_employees_get(opts)

Get employees from a company

Only `admins` can see all the employees' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin

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

api_instance = SwaggerClient::CoreEmployeesV2Api.new
opts = { 
  full_text_name: 'full_text_name_example' # String | Retrieves the list of employees by full names
}

begin
  #Get employees from a company
  result = api_instance.v2_core_employees_get(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CoreEmployeesV2Api->v2_core_employees_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full_text_name** | **String**| Retrieves the list of employees by full names | [optional] 

### Return type

[**Array&lt;Employee&gt;**](Employee.md)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v2_core_employees_id_get**
> Employee v2_core_employees_id_get(id)

Get employee

Only admins can see all the employees' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin

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

api_instance = SwaggerClient::CoreEmployeesV2Api.new
id = 'id_example' # String | (Required) 


begin
  #Get employee
  result = api_instance.v2_core_employees_id_get(id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CoreEmployeesV2Api->v2_core_employees_id_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| (Required)  | 

### Return type

[**Employee**](Employee.md)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v2_core_employees_id_put**
> Employee v2_core_employees_id_put(id, opts)

Update employee

Update employee

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

api_instance = SwaggerClient::CoreEmployeesV2Api.new
id = 'id_example' # String | (Required) 
opts = { 
  body: SwaggerClient::EmployeesIdBody.new # EmployeesIdBody | 
}

begin
  #Update employee
  result = api_instance.v2_core_employees_id_put(id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CoreEmployeesV2Api->v2_core_employees_id_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| (Required)  | 
 **body** | [**EmployeesIdBody**](EmployeesIdBody.md)|  | [optional] 

### Return type

[**Employee**](Employee.md)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v2_core_employees_post**
> Employee v2_core_employees_post(opts)

Create employee

Create employee

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

api_instance = SwaggerClient::CoreEmployeesV2Api.new
opts = { 
  body: SwaggerClient::CoreEmployeesBody.new # CoreEmployeesBody | 
}

begin
  #Create employee
  result = api_instance.v2_core_employees_post(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CoreEmployeesV2Api->v2_core_employees_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CoreEmployeesBody**](CoreEmployeesBody.md)|  | [optional] 

### Return type

[**Employee**](Employee.md)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



