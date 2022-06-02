# swagger_client.CoreEmployeesV2Api

All URIs are relative to *https://api.factorialhr.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_core_employees_get**](CoreEmployeesV2Api.md#v2_core_employees_get) | **GET** /v2/core/employees | Get employees from a company
[**v2_core_employees_id_get**](CoreEmployeesV2Api.md#v2_core_employees_id_get) | **GET** /v2/core/employees/{id} | Get employee
[**v2_core_employees_id_put**](CoreEmployeesV2Api.md#v2_core_employees_id_put) | **PUT** /v2/core/employees/{id} | Update employee
[**v2_core_employees_post**](CoreEmployeesV2Api.md#v2_core_employees_post) | **POST** /v2/core/employees | Create employee

# **v2_core_employees_get**
> list[Employee] v2_core_employees_get(full_text_name=full_text_name)

Get employees from a company

Only `admins` can see all the employees' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apikey
configuration = swagger_client.Configuration()
configuration.api_key['x-api-key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['x-api-key'] = 'Bearer'
# Configure OAuth2 access token for authorization: oauth2
configuration = swagger_client.Configuration()
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.CoreEmployeesV2Api(swagger_client.ApiClient(configuration))
full_text_name = 'full_text_name_example' # str | Retrieves the list of employees by full names (optional)

try:
    # Get employees from a company
    api_response = api_instance.v2_core_employees_get(full_text_name=full_text_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CoreEmployeesV2Api->v2_core_employees_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full_text_name** | **str**| Retrieves the list of employees by full names | [optional] 

### Return type

[**list[Employee]**](Employee.md)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_core_employees_id_get**
> Employee v2_core_employees_id_get(id)

Get employee

Only admins can see all the employees' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apikey
configuration = swagger_client.Configuration()
configuration.api_key['x-api-key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['x-api-key'] = 'Bearer'
# Configure OAuth2 access token for authorization: oauth2
configuration = swagger_client.Configuration()
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.CoreEmployeesV2Api(swagger_client.ApiClient(configuration))
id = 'id_example' # str | (Required) 

try:
    # Get employee
    api_response = api_instance.v2_core_employees_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CoreEmployeesV2Api->v2_core_employees_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| (Required)  | 

### Return type

[**Employee**](Employee.md)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_core_employees_id_put**
> Employee v2_core_employees_id_put(id, body=body)

Update employee

Update employee

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apikey
configuration = swagger_client.Configuration()
configuration.api_key['x-api-key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['x-api-key'] = 'Bearer'
# Configure OAuth2 access token for authorization: oauth2
configuration = swagger_client.Configuration()
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.CoreEmployeesV2Api(swagger_client.ApiClient(configuration))
id = 'id_example' # str | (Required) 
body = swagger_client.EmployeesIdBody() # EmployeesIdBody |  (optional)

try:
    # Update employee
    api_response = api_instance.v2_core_employees_id_put(id, body=body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CoreEmployeesV2Api->v2_core_employees_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| (Required)  | 
 **body** | [**EmployeesIdBody**](EmployeesIdBody.md)|  | [optional] 

### Return type

[**Employee**](Employee.md)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_core_employees_post**
> Employee v2_core_employees_post(body=body)

Create employee

Create employee

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: apikey
configuration = swagger_client.Configuration()
configuration.api_key['x-api-key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['x-api-key'] = 'Bearer'
# Configure OAuth2 access token for authorization: oauth2
configuration = swagger_client.Configuration()
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.CoreEmployeesV2Api(swagger_client.ApiClient(configuration))
body = swagger_client.CoreEmployeesBody() # CoreEmployeesBody |  (optional)

try:
    # Create employee
    api_response = api_instance.v2_core_employees_post(body=body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CoreEmployeesV2Api->v2_core_employees_post: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

