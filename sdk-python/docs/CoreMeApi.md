# swagger_client.CoreMeApi

All URIs are relative to *https://api.factorialhr.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_me_get**](CoreMeApi.md#v1_me_get) | **GET** /v1/me | Get information about current user

# **v1_me_get**
> v1_me_get()

Get information about current user

After token grant, get information of the token holder

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
api_instance = swagger_client.CoreMeApi(swagger_client.ApiClient(configuration))

try:
    # Get information about current user
    api_instance.v1_me_get()
except ApiException as e:
    print("Exception when calling CoreMeApi->v1_me_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[apikey](../README.md#apikey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

