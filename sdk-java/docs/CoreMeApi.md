# CoreMeApi

All URIs are relative to *https://api.factorialhr.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1MeGet**](CoreMeApi.md#v1MeGet) | **GET** /v1/me | Get information about current user

<a name="v1MeGet"></a>
# **v1MeGet**
> v1MeGet()

Get information about current user

After token grant, get information of the token holder

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CoreMeApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apikey
ApiKeyAuth apikey = (ApiKeyAuth) defaultClient.getAuthentication("apikey");
apikey.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.setApiKeyPrefix("Token");

// Configure OAuth2 access token for authorization: oauth2
OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
oauth2.setAccessToken("YOUR ACCESS TOKEN");

CoreMeApi apiInstance = new CoreMeApi();
try {
    apiInstance.v1MeGet();
} catch (ApiException e) {
    System.err.println("Exception when calling CoreMeApi#v1MeGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

