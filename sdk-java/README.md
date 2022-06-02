# swagger-java-client

Factorial API
- API version: 1.0.0
  - Build date: 2022-05-27T17:39:37.480830+02:00[Europe/Madrid]

Open Api Specifications available at [https://github.com/factorialco/oas](https://github.com/factorialco/oasLooking)  Guides and support available at [https://help.factorialhr.com/integrations](https://help.factorialhr.com/integrations)  # Authentication  The public API provides two methods of authentication, ApiKeys and OAuth2. The following sections provide information regarding each one and their intent.  ## OAuth2  > OAuth2 is used to identify individual users, not applicatins or platforms.  OAuth2 is available for authenticating to the public API and making requests via third parties **on behalf of a user**. All actions are authored on behalf of the user that creates the token. This means the intent is to be used mainly to do submit actions the actual user is performing on an alternative interface.  To generate a token you will require opening an authorization dialog that returns a code, this code can then be exchanged for a token.  ### Configuration  In order to create an OAuth application, you must be an admin, head over to your [personal repository of OAuth applications](https://api.factorialhr.com/oauth/applications), click on `New application` and follow the creation process.  The Factorial API enforces the same permissions at the user level than the Factorial web application. This means that Factorial API users will only be able to perform the same actions they are allowed to do in the Factorial platform.  Next step will be to generate the Authorization Code you will need in order to generate an OAuth2 Token.  ### OAuth2 Code Generation  Should be generated via browser by opening the following url. The user should be already logged in to Factorial beforehand.  `https://api.factorialhr.com/oauth/authorize?client_id=&redirect_uri=&response_type=code&scope=`  YOUR_CLIENT_ID: OAuth2 Application Id REDIRECT_URI: OAuth2 Redirect URL  #### State Parameter  An optional query parameter called `state` can be added to the code generation url. Any string can be used and will be sent on the callback url.  > Authorization protocols provide a `state` parameter that allows you to restore the previous state of your application. The `state` parameter preserves some state objects set by the client in the Authorization request and makes it available to the client in the response.  ### OAuth2 Token Generation  Once you have the authorization code, you can request their access token to Factorial.  `curl -X POST 'https://api.factorialhr.com/oauth/token' -d 'client_id=&client_secret=&code=&grant_type=authorization_code&redirect_uri='`  YOUR_CLIENT_ID: OAuth2 Application Id YOUR_CLIENT_SECRET: OAuth2 Application Secret AUTHORIZATION_CODE: OAuth2 CODE REDIRECT_URI: OAuth2 Redirect URL  > You can generate only one OAuth2 token per Code, that means that if you want to generate a new token for a Code that already have one you should refresh your token.  Every time a new token is generated a refresh token is generated as well, so that you can use it on the OAuth2 Refresh Token, and an expire date is also provided.  ### OAuth2 Refresh Token  You can generate a new token under the same Code with a new expire date (you can do it as many times as you need). A refresh token is also returned here so that you can use it on the OAuth2 Refresh Token again.  `curl -X POST 'https://api.factorialhr.com/oauth/token' -d 'client_id=&client_secret=&refresh_token=&grant_type=refresh_token'`  YOUR_CLIENT_ID: OAuth2 Application Id YOUR_CLIENT_SECRET: OAuth2 Application Secret REFRESH_TOKEN: OAuth2 Refresh Token  ### OAuth2 Token Usage  The generated token is the credential for performing authenticated requests to Factorial. This token should be included in the Authorization header prefixed with the word Bearer and a separating space. As an example, if your token is `12345` then the header content should be `Bearer 12345`.  ### Maintaining a persistent connection  To maintain a persistent connection, you should not let the token expire. You can avoid this by simply refreshing your token before the expiration date. This will give you another token with a new expiration date, before that token expires you should refresh it again, and so on... If you want to do this automatically, you should provide something in your code that will help you perform the update every time the token expires. Otherwise, you would have to do the update manually and make sure you refresh your token before the expiration date to maintain the connection.  ## ApiKeys  > API keys are used to identify systems, not the individual users that access.  ApiKeys have **TOTAL ACCESS** to everything and never expire. Its the creators responsability to generate them and store them securely.  ### Generation  In the `Core>Keys` section of this documentation you can access the apis for managing this resource.  ### Usage  ApiKeys are a single string of symbols that must be added as a custom header on the request. The header name must be `x-api-key` and the key must be the value without any prefixes.  ### Disclaimer  ApiKey management require full admin permissions as the resource itself allows for full admin access to the entire platform on behalf of the company and not of a user, therefore any operations are not linked to any user in particular.  # Development  ## SDKs  Coming soon  ## Sandbox  A sandbox/demo environment is available for testing integrations via public API calls. Developers can request provisioning with full access to a demo company where to test code before actually interacting with a production environment.  Contact your account manager or account executive to request this environment and get OAuth2 credentials for generating tokens.  Note: the domain for sandbox is different than that from production. Sandbox base domain is `http://api.demo.factorialhr.com`  ## Postman  Click the \"Run in Postman\" button to open the full list of endpoints on your Postman workspace as a Postman Collection. Inside the collection lookout for the Collection's Variables, configure your variables accordingly.  ### Delegating Token Generation To Postman  Coming soon  # Changelog  Coming soon  # How to...  ## Custom Fields  Custom fields are useful when you want to add some fields that are not the default ones, to every employee of the company.  For that, you have to create via Factorial App the base custom field in order to have all the employees with it. That option is available in customization, inside the company menu  Once you have that, via API, you can [Create a value for a custom field](https://apidoc.factorialhr.com/#72f3f786-e37d-4e80-ada2-0beedd03b171) to each employee. You should know the custom field id in order to make that, you can check it by [getting a collection of custom fields](https://apidoc.factorialhr.com/#f98dae5a-a8d0-474e-a181-7e9603409b42)


*Automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen)*


## Requirements

Building the API client library requires:
1. Java 1.7+
2. Maven/Gradle

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>io.swagger</groupId>
  <artifactId>swagger-java-client</artifactId>
  <version>1.0.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-java-client:1.0.0"
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/swagger-java-client-1.0.0.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CoreEmployeesV2Api;

import java.io.File;
import java.util.*;

public class CoreEmployeesV2ApiExample {

    public static void main(String[] args) {
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
    }
}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CoreEmployeesV2Api;

import java.io.File;
import java.util.*;

public class CoreEmployeesV2ApiExample {

    public static void main(String[] args) {
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
    }
}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CoreEmployeesV2Api;

import java.io.File;
import java.util.*;

public class CoreEmployeesV2ApiExample {

    public static void main(String[] args) {
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
    }
}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CoreEmployeesV2Api;

import java.io.File;
import java.util.*;

public class CoreEmployeesV2ApiExample {

    public static void main(String[] args) {
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
    }
}
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factorialhr.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoreEmployeesV2Api* | [**v2CoreEmployeesGet**](docs/CoreEmployeesV2Api.md#v2CoreEmployeesGet) | **GET** /v2/core/employees | Get employees from a company
*CoreEmployeesV2Api* | [**v2CoreEmployeesIdGet**](docs/CoreEmployeesV2Api.md#v2CoreEmployeesIdGet) | **GET** /v2/core/employees/{id} | Get employee
*CoreEmployeesV2Api* | [**v2CoreEmployeesIdPut**](docs/CoreEmployeesV2Api.md#v2CoreEmployeesIdPut) | **PUT** /v2/core/employees/{id} | Update employee
*CoreEmployeesV2Api* | [**v2CoreEmployeesPost**](docs/CoreEmployeesV2Api.md#v2CoreEmployeesPost) | **POST** /v2/core/employees | Create employee
*CoreMeApi* | [**v1MeGet**](docs/CoreMeApi.md#v1MeGet) | **GET** /v1/me | Get information about current user

## Documentation for Models

 - [CoreEmployeesBody](docs/CoreEmployeesBody.md)
 - [Employee](docs/Employee.md)
 - [EmployeesIdBody](docs/EmployeesIdBody.md)

## Documentation for Authorization

Authentication schemes defined for the API:
### apikey

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

### oauth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: /oauth/authorize
- **Scopes**: 
  - read: Required for all operations
  - write: Required for write operations


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author


