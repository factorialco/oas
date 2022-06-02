# Swagger\Client\CoreEmployeesV2Api

All URIs are relative to *https://api.factorialhr.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2CoreEmployeesGet**](CoreEmployeesV2Api.md#v2coreemployeesget) | **GET** /v2/core/employees | Get employees from a company
[**v2CoreEmployeesIdGet**](CoreEmployeesV2Api.md#v2coreemployeesidget) | **GET** /v2/core/employees/{id} | Get employee
[**v2CoreEmployeesIdPut**](CoreEmployeesV2Api.md#v2coreemployeesidput) | **PUT** /v2/core/employees/{id} | Update employee
[**v2CoreEmployeesPost**](CoreEmployeesV2Api.md#v2coreemployeespost) | **POST** /v2/core/employees | Create employee

# **v2CoreEmployeesGet**
> \Swagger\Client\Model\Employee[] v2CoreEmployeesGet($full_text_name)

Get employees from a company

Only `admins` can see all the employees' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apikey
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('x-api-key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('x-api-key', 'Bearer');
// Configure OAuth2 access token for authorization: oauth2
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

$apiInstance = new Swagger\Client\Api\CoreEmployeesV2Api(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$full_text_name = "full_text_name_example"; // string | Retrieves the list of employees by full names

try {
    $result = $apiInstance->v2CoreEmployeesGet($full_text_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CoreEmployeesV2Api->v2CoreEmployeesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full_text_name** | **string**| Retrieves the list of employees by full names | [optional]

### Return type

[**\Swagger\Client\Model\Employee[]**](../Model/Employee.md)

### Authorization

[apikey](../../README.md#apikey), [oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **v2CoreEmployeesIdGet**
> \Swagger\Client\Model\Employee v2CoreEmployeesIdGet($id)

Get employee

Only admins can see all the employees' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apikey
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('x-api-key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('x-api-key', 'Bearer');
// Configure OAuth2 access token for authorization: oauth2
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

$apiInstance = new Swagger\Client\Api\CoreEmployeesV2Api(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | (Required)

try {
    $result = $apiInstance->v2CoreEmployeesIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CoreEmployeesV2Api->v2CoreEmployeesIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| (Required) |

### Return type

[**\Swagger\Client\Model\Employee**](../Model/Employee.md)

### Authorization

[apikey](../../README.md#apikey), [oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **v2CoreEmployeesIdPut**
> \Swagger\Client\Model\Employee v2CoreEmployeesIdPut($id, $body)

Update employee

Update employee

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apikey
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('x-api-key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('x-api-key', 'Bearer');
// Configure OAuth2 access token for authorization: oauth2
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

$apiInstance = new Swagger\Client\Api\CoreEmployeesV2Api(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = "id_example"; // string | (Required)
$body = new \Swagger\Client\Model\EmployeesIdBody(); // \Swagger\Client\Model\EmployeesIdBody | 

try {
    $result = $apiInstance->v2CoreEmployeesIdPut($id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CoreEmployeesV2Api->v2CoreEmployeesIdPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| (Required) |
 **body** | [**\Swagger\Client\Model\EmployeesIdBody**](../Model/EmployeesIdBody.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Employee**](../Model/Employee.md)

### Authorization

[apikey](../../README.md#apikey), [oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **v2CoreEmployeesPost**
> \Swagger\Client\Model\Employee v2CoreEmployeesPost($body)

Create employee

Create employee

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: apikey
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('x-api-key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('x-api-key', 'Bearer');
// Configure OAuth2 access token for authorization: oauth2
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

$apiInstance = new Swagger\Client\Api\CoreEmployeesV2Api(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\CoreEmployeesBody(); // \Swagger\Client\Model\CoreEmployeesBody | 

try {
    $result = $apiInstance->v2CoreEmployeesPost($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CoreEmployeesV2Api->v2CoreEmployeesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\CoreEmployeesBody**](../Model/CoreEmployeesBody.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Employee**](../Model/Employee.md)

### Authorization

[apikey](../../README.md#apikey), [oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

