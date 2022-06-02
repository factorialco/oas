/* tslint:disable */
/* eslint-disable */
/**
 * Factorial API
 * Open Api Specifications available at [https://github.com/factorialco/oas](https://github.com/factorialco/oasLooking)  Guides and support available at [https://help.factorialhr.com/integrations](https://help.factorialhr.com/integrations)  # Authentication  The public API provides two methods of authentication, ApiKeys and OAuth2. The following sections provide information regarding each one and their intent.  ## OAuth2  > OAuth2 is used to identify individual users, not applicatins or platforms.  OAuth2 is available for authenticating to the public API and making requests via third parties **on behalf of a user**. All actions are authored on behalf of the user that creates the token. This means the intent is to be used mainly to do submit actions the actual user is performing on an alternative interface.  To generate a token you will require opening an authorization dialog that returns a code, this code can then be exchanged for a token.  ### Configuration  In order to create an OAuth application, you must be an admin, head over to your [personal repository of OAuth applications](https://api.factorialhr.com/oauth/applications), click on `New application` and follow the creation process.  The Factorial API enforces the same permissions at the user level than the Factorial web application. This means that Factorial API users will only be able to perform the same actions they are allowed to do in the Factorial platform.  Next step will be to generate the Authorization Code you will need in order to generate an OAuth2 Token.  ### OAuth2 Code Generation  Should be generated via browser by opening the following url. The user should be already logged in to Factorial beforehand.  `https://api.factorialhr.com/oauth/authorize?client_id=&redirect_uri=&response_type=code&scope=`  YOUR_CLIENT_ID: OAuth2 Application Id REDIRECT_URI: OAuth2 Redirect URL  #### State Parameter  An optional query parameter called `state` can be added to the code generation url. Any string can be used and will be sent on the callback url.  > Authorization protocols provide a `state` parameter that allows you to restore the previous state of your application. The `state` parameter preserves some state objects set by the client in the Authorization request and makes it available to the client in the response.  ### OAuth2 Token Generation  Once you have the authorization code, you can request their access token to Factorial.  `curl -X POST 'https://api.factorialhr.com/oauth/token' -d 'client_id=&client_secret=&code=&grant_type=authorization_code&redirect_uri='`  YOUR_CLIENT_ID: OAuth2 Application Id YOUR_CLIENT_SECRET: OAuth2 Application Secret AUTHORIZATION_CODE: OAuth2 CODE REDIRECT_URI: OAuth2 Redirect URL  > You can generate only one OAuth2 token per Code, that means that if you want to generate a new token for a Code that already have one you should refresh your token.  Every time a new token is generated a refresh token is generated as well, so that you can use it on the OAuth2 Refresh Token, and an expire date is also provided.  ### OAuth2 Refresh Token  You can generate a new token under the same Code with a new expire date (you can do it as many times as you need). A refresh token is also returned here so that you can use it on the OAuth2 Refresh Token again.  `curl -X POST 'https://api.factorialhr.com/oauth/token' -d 'client_id=&client_secret=&refresh_token=&grant_type=refresh_token'`  YOUR_CLIENT_ID: OAuth2 Application Id YOUR_CLIENT_SECRET: OAuth2 Application Secret REFRESH_TOKEN: OAuth2 Refresh Token  ### OAuth2 Token Usage  The generated token is the credential for performing authenticated requests to Factorial. This token should be included in the Authorization header prefixed with the word Bearer and a separating space. As an example, if your token is `12345` then the header content should be `Bearer 12345`.  ### Maintaining a persistent connection  To maintain a persistent connection, you should not let the token expire. You can avoid this by simply refreshing your token before the expiration date. This will give you another token with a new expiration date, before that token expires you should refresh it again, and so on... If you want to do this automatically, you should provide something in your code that will help you perform the update every time the token expires. Otherwise, you would have to do the update manually and make sure you refresh your token before the expiration date to maintain the connection.  ## ApiKeys  > API keys are used to identify systems, not the individual users that access.  ApiKeys have **TOTAL ACCESS** to everything and never expire. Its the creators responsability to generate them and store them securely.  ### Generation  In the `Core>Keys` section of this documentation you can access the apis for managing this resource.  ### Usage  ApiKeys are a single string of symbols that must be added as a custom header on the request. The header name must be `x-api-key` and the key must be the value without any prefixes.  ### Disclaimer  ApiKey management require full admin permissions as the resource itself allows for full admin access to the entire platform on behalf of the company and not of a user, therefore any operations are not linked to any user in particular.  # Development  ## SDKs  Coming soon  ## Sandbox  A sandbox/demo environment is available for testing integrations via public API calls. Developers can request provisioning with full access to a demo company where to test code before actually interacting with a production environment.  Contact your account manager or account executive to request this environment and get OAuth2 credentials for generating tokens.  Note: the domain for sandbox is different than that from production. Sandbox base domain is `http://api.demo.factorialhr.com`  ## Postman  Click the \"Run in Postman\" button to open the full list of endpoints on your Postman workspace as a Postman Collection. Inside the collection lookout for the Collection's Variables, configure your variables accordingly.  ### Delegating Token Generation To Postman  Coming soon  # Changelog  Coming soon  # How to...  ## Custom Fields  Custom fields are useful when you want to add some fields that are not the default ones, to every employee of the company.  For that, you have to create via Factorial App the base custom field in order to have all the employees with it. That option is available in customization, inside the company menu  Once you have that, via API, you can [Create a value for a custom field](https://apidoc.factorialhr.com/#72f3f786-e37d-4e80-ada2-0beedd03b171) to each employee. You should know the custom field id in order to make that, you can check it by [getting a collection of custom fields](https://apidoc.factorialhr.com/#f98dae5a-a8d0-474e-a181-7e9603409b42)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CoreEmployeesBody } from '../models';
import { Employee } from '../models';
import { EmployeesIdBody } from '../models';
/**
 * CoreEmployeesV2Api - axios parameter creator
 * @export
 */
export const CoreEmployeesV2ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Only `admins` can see all the employees' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {string} [fullTextName] Retrieves the list of employees by full names
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2CoreEmployeesGet: async (fullTextName?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/core/employees`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read", "write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (fullTextName !== undefined) {
                localVarQueryParameter['full_text_name'] = fullTextName;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Only admins can see all the employees' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {string} id (Required) 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2CoreEmployeesIdGet: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling v2CoreEmployeesIdGet.');
            }
            const localVarPath = `/v2/core/employees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read", "write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {string} id (Required) 
         * @param {EmployeesIdBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2CoreEmployeesIdPut: async (id: string, body?: EmployeesIdBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling v2CoreEmployeesIdPut.');
            }
            const localVarPath = `/v2/core/employees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read", "write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {CoreEmployeesBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2CoreEmployeesPost: async (body?: CoreEmployeesBody, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/core/employees`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read", "write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CoreEmployeesV2Api - functional programming interface
 * @export
 */
export const CoreEmployeesV2ApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Only `admins` can see all the employees' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {string} [fullTextName] Retrieves the list of employees by full names
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2CoreEmployeesGet(fullTextName?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Employee>>> {
            const localVarAxiosArgs = await CoreEmployeesV2ApiAxiosParamCreator(configuration).v2CoreEmployeesGet(fullTextName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Only admins can see all the employees' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {string} id (Required) 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2CoreEmployeesIdGet(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Employee>> {
            const localVarAxiosArgs = await CoreEmployeesV2ApiAxiosParamCreator(configuration).v2CoreEmployeesIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {string} id (Required) 
         * @param {EmployeesIdBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2CoreEmployeesIdPut(id: string, body?: EmployeesIdBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Employee>> {
            const localVarAxiosArgs = await CoreEmployeesV2ApiAxiosParamCreator(configuration).v2CoreEmployeesIdPut(id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {CoreEmployeesBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2CoreEmployeesPost(body?: CoreEmployeesBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Employee>> {
            const localVarAxiosArgs = await CoreEmployeesV2ApiAxiosParamCreator(configuration).v2CoreEmployeesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CoreEmployeesV2Api - factory interface
 * @export
 */
export const CoreEmployeesV2ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Only `admins` can see all the employees' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employees from a company
         * @param {string} [fullTextName] Retrieves the list of employees by full names
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2CoreEmployeesGet(fullTextName?: string, options?: any): AxiosPromise<Array<Employee>> {
            return CoreEmployeesV2ApiFp(configuration).v2CoreEmployeesGet(fullTextName, options).then((request) => request(axios, basePath));
        },
        /**
         * Only admins can see all the employees' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
         * @summary Get employee
         * @param {string} id (Required) 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2CoreEmployeesIdGet(id: string, options?: any): AxiosPromise<Employee> {
            return CoreEmployeesV2ApiFp(configuration).v2CoreEmployeesIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Update employee
         * @summary Update employee
         * @param {string} id (Required) 
         * @param {EmployeesIdBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2CoreEmployeesIdPut(id: string, body?: EmployeesIdBody, options?: any): AxiosPromise<Employee> {
            return CoreEmployeesV2ApiFp(configuration).v2CoreEmployeesIdPut(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Create employee
         * @summary Create employee
         * @param {CoreEmployeesBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2CoreEmployeesPost(body?: CoreEmployeesBody, options?: any): AxiosPromise<Employee> {
            return CoreEmployeesV2ApiFp(configuration).v2CoreEmployeesPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CoreEmployeesV2Api - object-oriented interface
 * @export
 * @class CoreEmployeesV2Api
 * @extends {BaseAPI}
 */
export class CoreEmployeesV2Api extends BaseAPI {
    /**
     * Only `admins` can see all the employees' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
     * @summary Get employees from a company
     * @param {string} [fullTextName] Retrieves the list of employees by full names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreEmployeesV2Api
     */
    public v2CoreEmployeesGet(fullTextName?: string, options?: any) {
        return CoreEmployeesV2ApiFp(this.configuration).v2CoreEmployeesGet(fullTextName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Only admins can see all the employees' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
     * @summary Get employee
     * @param {string} id (Required) 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreEmployeesV2Api
     */
    public v2CoreEmployeesIdGet(id: string, options?: any) {
        return CoreEmployeesV2ApiFp(this.configuration).v2CoreEmployeesIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update employee
     * @summary Update employee
     * @param {string} id (Required) 
     * @param {EmployeesIdBody} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreEmployeesV2Api
     */
    public v2CoreEmployeesIdPut(id: string, body?: EmployeesIdBody, options?: any) {
        return CoreEmployeesV2ApiFp(this.configuration).v2CoreEmployeesIdPut(id, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create employee
     * @summary Create employee
     * @param {CoreEmployeesBody} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreEmployeesV2Api
     */
    public v2CoreEmployeesPost(body?: CoreEmployeesBody, options?: any) {
        return CoreEmployeesV2ApiFp(this.configuration).v2CoreEmployeesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
