# CoreEmployeesV2Api

All URIs are relative to *https://api.factorialhr.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2CoreEmployeesGet**](CoreEmployeesV2Api.md#v2CoreEmployeesGet) | **GET** /v2/core/employees | Get employees from a company
[**v2CoreEmployeesIdGet**](CoreEmployeesV2Api.md#v2CoreEmployeesIdGet) | **GET** /v2/core/employees/{id} | Get employee
[**v2CoreEmployeesIdPut**](CoreEmployeesV2Api.md#v2CoreEmployeesIdPut) | **PUT** /v2/core/employees/{id} | Update employee
[**v2CoreEmployeesPost**](CoreEmployeesV2Api.md#v2CoreEmployeesPost) | **POST** /v2/core/employees | Create employee

<a name="v2CoreEmployeesGet"></a>
# **v2CoreEmployeesGet**
> List&lt;Employee&gt; v2CoreEmployeesGet(fullTextName)

Get employees from a company

Only &#x60;admins&#x60; can see all the employees&#x27; information, &#x60;regular users&#x60; will get a restricted version of the payload as a response based on the permission set by the admin

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CoreEmployeesV2Api;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apikey
ApiKeyAuth apikey = (ApiKeyAuth) defaultClient.getAuthentication("apikey");
apikey.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.setApiKeyPrefix("Token");

// Configure OAuth2 access token for authorization: oauth2
OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
oauth2.setAccessToken("YOUR ACCESS TOKEN");

CoreEmployeesV2Api apiInstance = new CoreEmployeesV2Api();
String fullTextName = "fullTextName_example"; // String | Retrieves the list of employees by full names
try {
    List<Employee> result = apiInstance.v2CoreEmployeesGet(fullTextName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CoreEmployeesV2Api#v2CoreEmployeesGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullTextName** | **String**| Retrieves the list of employees by full names | [optional]

### Return type

[**List&lt;Employee&gt;**](Employee.md)

### Authorization

[apikey](../README.md#apikey)[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v2CoreEmployeesIdGet"></a>
# **v2CoreEmployeesIdGet**
> Employee v2CoreEmployeesIdGet(id)

Get employee

Only admins can see all the employees&#x27; information, regular users will get a restricted version of the payload as a response based on the permission set by the admin

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CoreEmployeesV2Api;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apikey
ApiKeyAuth apikey = (ApiKeyAuth) defaultClient.getAuthentication("apikey");
apikey.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.setApiKeyPrefix("Token");

// Configure OAuth2 access token for authorization: oauth2
OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
oauth2.setAccessToken("YOUR ACCESS TOKEN");

CoreEmployeesV2Api apiInstance = new CoreEmployeesV2Api();
String id = "id_example"; // String | (Required) 
try {
    Employee result = apiInstance.v2CoreEmployeesIdGet(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CoreEmployeesV2Api#v2CoreEmployeesIdGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| (Required)  |

### Return type

[**Employee**](Employee.md)

### Authorization

[apikey](../README.md#apikey)[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v2CoreEmployeesIdPut"></a>
# **v2CoreEmployeesIdPut**
> Employee v2CoreEmployeesIdPut(id, body)

Update employee

Update employee

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CoreEmployeesV2Api;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apikey
ApiKeyAuth apikey = (ApiKeyAuth) defaultClient.getAuthentication("apikey");
apikey.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.setApiKeyPrefix("Token");

// Configure OAuth2 access token for authorization: oauth2
OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
oauth2.setAccessToken("YOUR ACCESS TOKEN");

CoreEmployeesV2Api apiInstance = new CoreEmployeesV2Api();
String id = "id_example"; // String | (Required) 
EmployeesIdBody body = new EmployeesIdBody(); // EmployeesIdBody | 
try {
    Employee result = apiInstance.v2CoreEmployeesIdPut(id, body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CoreEmployeesV2Api#v2CoreEmployeesIdPut");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| (Required)  |
 **body** | [**EmployeesIdBody**](EmployeesIdBody.md)|  | [optional]

### Return type

[**Employee**](Employee.md)

### Authorization

[apikey](../README.md#apikey)[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2CoreEmployeesPost"></a>
# **v2CoreEmployeesPost**
> Employee v2CoreEmployeesPost(body)

Create employee

Create employee

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CoreEmployeesV2Api;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apikey
ApiKeyAuth apikey = (ApiKeyAuth) defaultClient.getAuthentication("apikey");
apikey.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.setApiKeyPrefix("Token");

// Configure OAuth2 access token for authorization: oauth2
OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
oauth2.setAccessToken("YOUR ACCESS TOKEN");

CoreEmployeesV2Api apiInstance = new CoreEmployeesV2Api();
CoreEmployeesBody body = new CoreEmployeesBody(); // CoreEmployeesBody | 
try {
    Employee result = apiInstance.v2CoreEmployeesPost(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CoreEmployeesV2Api#v2CoreEmployeesPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CoreEmployeesBody**](CoreEmployeesBody.md)|  | [optional]

### Return type

[**Employee**](Employee.md)

### Authorization

[apikey](../README.md#apikey)[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

