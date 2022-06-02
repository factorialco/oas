# coding: utf-8

"""
    Factorial API

    Open Api Specifications available at [https://github.com/factorialco/oas](https://github.com/factorialco/oasLooking)  Guides and support available at [https://help.factorialhr.com/integrations](https://help.factorialhr.com/integrations)  # Authentication  The public API provides two methods of authentication, ApiKeys and OAuth2. The following sections provide information regarding each one and their intent.  ## OAuth2  > OAuth2 is used to identify individual users, not applicatins or platforms.  OAuth2 is available for authenticating to the public API and making requests via third parties **on behalf of a user**. All actions are authored on behalf of the user that creates the token. This means the intent is to be used mainly to do submit actions the actual user is performing on an alternative interface.  To generate a token you will require opening an authorization dialog that returns a code, this code can then be exchanged for a token.  ### Configuration  In order to create an OAuth application, you must be an admin, head over to your [personal repository of OAuth applications](https://api.factorialhr.com/oauth/applications), click on `New application` and follow the creation process.  The Factorial API enforces the same permissions at the user level than the Factorial web application. This means that Factorial API users will only be able to perform the same actions they are allowed to do in the Factorial platform.  Next step will be to generate the Authorization Code you will need in order to generate an OAuth2 Token.  ### OAuth2 Code Generation  Should be generated via browser by opening the following url. The user should be already logged in to Factorial beforehand.  `https://api.factorialhr.com/oauth/authorize?client_id=&redirect_uri=&response_type=code&scope=`  YOUR_CLIENT_ID: OAuth2 Application Id REDIRECT_URI: OAuth2 Redirect URL  #### State Parameter  An optional query parameter called `state` can be added to the code generation url. Any string can be used and will be sent on the callback url.  > Authorization protocols provide a `state` parameter that allows you to restore the previous state of your application. The `state` parameter preserves some state objects set by the client in the Authorization request and makes it available to the client in the response.  ### OAuth2 Token Generation  Once you have the authorization code, you can request their access token to Factorial.  `curl -X POST 'https://api.factorialhr.com/oauth/token' -d 'client_id=&client_secret=&code=&grant_type=authorization_code&redirect_uri='`  YOUR_CLIENT_ID: OAuth2 Application Id YOUR_CLIENT_SECRET: OAuth2 Application Secret AUTHORIZATION_CODE: OAuth2 CODE REDIRECT_URI: OAuth2 Redirect URL  > You can generate only one OAuth2 token per Code, that means that if you want to generate a new token for a Code that already have one you should refresh your token.  Every time a new token is generated a refresh token is generated as well, so that you can use it on the OAuth2 Refresh Token, and an expire date is also provided.  ### OAuth2 Refresh Token  You can generate a new token under the same Code with a new expire date (you can do it as many times as you need). A refresh token is also returned here so that you can use it on the OAuth2 Refresh Token again.  `curl -X POST 'https://api.factorialhr.com/oauth/token' -d 'client_id=&client_secret=&refresh_token=&grant_type=refresh_token'`  YOUR_CLIENT_ID: OAuth2 Application Id YOUR_CLIENT_SECRET: OAuth2 Application Secret REFRESH_TOKEN: OAuth2 Refresh Token  ### OAuth2 Token Usage  The generated token is the credential for performing authenticated requests to Factorial. This token should be included in the Authorization header prefixed with the word Bearer and a separating space. As an example, if your token is `12345` then the header content should be `Bearer 12345`.  ### Maintaining a persistent connection  To maintain a persistent connection, you should not let the token expire. You can avoid this by simply refreshing your token before the expiration date. This will give you another token with a new expiration date, before that token expires you should refresh it again, and so on... If you want to do this automatically, you should provide something in your code that will help you perform the update every time the token expires. Otherwise, you would have to do the update manually and make sure you refresh your token before the expiration date to maintain the connection.  ## ApiKeys  > API keys are used to identify systems, not the individual users that access.  ApiKeys have **TOTAL ACCESS** to everything and never expire. Its the creators responsability to generate them and store them securely.  ### Generation  In the `Core>Keys` section of this documentation you can access the apis for managing this resource.  ### Usage  ApiKeys are a single string of symbols that must be added as a custom header on the request. The header name must be `x-api-key` and the key must be the value without any prefixes.  ### Disclaimer  ApiKey management require full admin permissions as the resource itself allows for full admin access to the entire platform on behalf of the company and not of a user, therefore any operations are not linked to any user in particular.  # Development  ## SDKs  Coming soon  ## Sandbox  A sandbox/demo environment is available for testing integrations via public API calls. Developers can request provisioning with full access to a demo company where to test code before actually interacting with a production environment.  Contact your account manager or account executive to request this environment and get OAuth2 credentials for generating tokens.  Note: the domain for sandbox is different than that from production. Sandbox base domain is `http://api.demo.factorialhr.com`  ## Postman  Click the \"Run in Postman\" button to open the full list of endpoints on your Postman workspace as a Postman Collection. Inside the collection lookout for the Collection's Variables, configure your variables accordingly.  ### Delegating Token Generation To Postman  Coming soon  # Changelog  Coming soon  # How to...  ## Custom Fields  Custom fields are useful when you want to add some fields that are not the default ones, to every employee of the company.  For that, you have to create via Factorial App the base custom field in order to have all the employees with it. That option is available in customization, inside the company menu  Once you have that, via API, you can [Create a value for a custom field](https://apidoc.factorialhr.com/#72f3f786-e37d-4e80-ada2-0beedd03b171) to each employee. You should know the custom field id in order to make that, you can check it by [getting a collection of custom fields](https://apidoc.factorialhr.com/#f98dae5a-a8d0-474e-a181-7e9603409b42)  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class EmployeesIdBody(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'email': 'str',
        'first_name': 'str',
        'last_name': 'str',
        'birthday_on': 'str',
        'role': 'str',
        'terminated_on': 'str',
        'gender': 'str',
        'nationality': 'str',
        'bank_number': 'str',
        'country': 'str',
        'city': 'str',
        'state': 'str',
        'postal_code': 'str',
        'address_line_1': 'str',
        'address_line_2': 'str',
        'identifier': 'str',
        'swift_bic': 'str',
        'manager_id': 'int',
        'timeoff_manager_id': 'int'
    }

    attribute_map = {
        'email': 'email',
        'first_name': 'first_name',
        'last_name': 'last_name',
        'birthday_on': 'birthday_on',
        'role': 'role',
        'terminated_on': 'terminated_on',
        'gender': 'gender',
        'nationality': 'nationality',
        'bank_number': 'bank_number',
        'country': 'country',
        'city': 'city',
        'state': 'state',
        'postal_code': 'postal_code',
        'address_line_1': 'address_line_1',
        'address_line_2': 'address_line_2',
        'identifier': 'identifier',
        'swift_bic': 'swift_bic',
        'manager_id': 'manager_id',
        'timeoff_manager_id': 'timeoff_manager_id'
    }

    def __init__(self, email=None, first_name=None, last_name=None, birthday_on=None, role=None, terminated_on=None, gender=None, nationality=None, bank_number=None, country=None, city=None, state=None, postal_code=None, address_line_1=None, address_line_2=None, identifier=None, swift_bic=None, manager_id=None, timeoff_manager_id=None):  # noqa: E501
        """EmployeesIdBody - a model defined in Swagger"""  # noqa: E501
        self._email = None
        self._first_name = None
        self._last_name = None
        self._birthday_on = None
        self._role = None
        self._terminated_on = None
        self._gender = None
        self._nationality = None
        self._bank_number = None
        self._country = None
        self._city = None
        self._state = None
        self._postal_code = None
        self._address_line_1 = None
        self._address_line_2 = None
        self._identifier = None
        self._swift_bic = None
        self._manager_id = None
        self._timeoff_manager_id = None
        self.discriminator = None
        if email is not None:
            self.email = email
        if first_name is not None:
            self.first_name = first_name
        if last_name is not None:
            self.last_name = last_name
        if birthday_on is not None:
            self.birthday_on = birthday_on
        if role is not None:
            self.role = role
        if terminated_on is not None:
            self.terminated_on = terminated_on
        if gender is not None:
            self.gender = gender
        if nationality is not None:
            self.nationality = nationality
        if bank_number is not None:
            self.bank_number = bank_number
        if country is not None:
            self.country = country
        if city is not None:
            self.city = city
        if state is not None:
            self.state = state
        if postal_code is not None:
            self.postal_code = postal_code
        if address_line_1 is not None:
            self.address_line_1 = address_line_1
        if address_line_2 is not None:
            self.address_line_2 = address_line_2
        if identifier is not None:
            self.identifier = identifier
        if swift_bic is not None:
            self.swift_bic = swift_bic
        if manager_id is not None:
            self.manager_id = manager_id
        if timeoff_manager_id is not None:
            self.timeoff_manager_id = timeoff_manager_id

    @property
    def email(self):
        """Gets the email of this EmployeesIdBody.  # noqa: E501


        :return: The email of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this EmployeesIdBody.


        :param email: The email of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._email = email

    @property
    def first_name(self):
        """Gets the first_name of this EmployeesIdBody.  # noqa: E501


        :return: The first_name of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """Sets the first_name of this EmployeesIdBody.


        :param first_name: The first_name of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._first_name = first_name

    @property
    def last_name(self):
        """Gets the last_name of this EmployeesIdBody.  # noqa: E501


        :return: The last_name of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """Sets the last_name of this EmployeesIdBody.


        :param last_name: The last_name of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._last_name = last_name

    @property
    def birthday_on(self):
        """Gets the birthday_on of this EmployeesIdBody.  # noqa: E501


        :return: The birthday_on of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._birthday_on

    @birthday_on.setter
    def birthday_on(self, birthday_on):
        """Sets the birthday_on of this EmployeesIdBody.


        :param birthday_on: The birthday_on of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._birthday_on = birthday_on

    @property
    def role(self):
        """Gets the role of this EmployeesIdBody.  # noqa: E501


        :return: The role of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._role

    @role.setter
    def role(self, role):
        """Sets the role of this EmployeesIdBody.


        :param role: The role of this EmployeesIdBody.  # noqa: E501
        :type: str
        """
        allowed_values = ["basic", "admin"]  # noqa: E501
        if role not in allowed_values:
            raise ValueError(
                "Invalid value for `role` ({0}), must be one of {1}"  # noqa: E501
                .format(role, allowed_values)
            )

        self._role = role

    @property
    def terminated_on(self):
        """Gets the terminated_on of this EmployeesIdBody.  # noqa: E501


        :return: The terminated_on of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._terminated_on

    @terminated_on.setter
    def terminated_on(self, terminated_on):
        """Sets the terminated_on of this EmployeesIdBody.


        :param terminated_on: The terminated_on of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._terminated_on = terminated_on

    @property
    def gender(self):
        """Gets the gender of this EmployeesIdBody.  # noqa: E501


        :return: The gender of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._gender

    @gender.setter
    def gender(self, gender):
        """Sets the gender of this EmployeesIdBody.


        :param gender: The gender of this EmployeesIdBody.  # noqa: E501
        :type: str
        """
        allowed_values = ["male", "female"]  # noqa: E501
        if gender not in allowed_values:
            raise ValueError(
                "Invalid value for `gender` ({0}), must be one of {1}"  # noqa: E501
                .format(gender, allowed_values)
            )

        self._gender = gender

    @property
    def nationality(self):
        """Gets the nationality of this EmployeesIdBody.  # noqa: E501


        :return: The nationality of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._nationality

    @nationality.setter
    def nationality(self, nationality):
        """Sets the nationality of this EmployeesIdBody.


        :param nationality: The nationality of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._nationality = nationality

    @property
    def bank_number(self):
        """Gets the bank_number of this EmployeesIdBody.  # noqa: E501


        :return: The bank_number of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._bank_number

    @bank_number.setter
    def bank_number(self, bank_number):
        """Sets the bank_number of this EmployeesIdBody.


        :param bank_number: The bank_number of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._bank_number = bank_number

    @property
    def country(self):
        """Gets the country of this EmployeesIdBody.  # noqa: E501


        :return: The country of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._country

    @country.setter
    def country(self, country):
        """Sets the country of this EmployeesIdBody.


        :param country: The country of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._country = country

    @property
    def city(self):
        """Gets the city of this EmployeesIdBody.  # noqa: E501


        :return: The city of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._city

    @city.setter
    def city(self, city):
        """Sets the city of this EmployeesIdBody.


        :param city: The city of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._city = city

    @property
    def state(self):
        """Gets the state of this EmployeesIdBody.  # noqa: E501


        :return: The state of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._state

    @state.setter
    def state(self, state):
        """Sets the state of this EmployeesIdBody.


        :param state: The state of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._state = state

    @property
    def postal_code(self):
        """Gets the postal_code of this EmployeesIdBody.  # noqa: E501


        :return: The postal_code of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._postal_code

    @postal_code.setter
    def postal_code(self, postal_code):
        """Sets the postal_code of this EmployeesIdBody.


        :param postal_code: The postal_code of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._postal_code = postal_code

    @property
    def address_line_1(self):
        """Gets the address_line_1 of this EmployeesIdBody.  # noqa: E501


        :return: The address_line_1 of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._address_line_1

    @address_line_1.setter
    def address_line_1(self, address_line_1):
        """Sets the address_line_1 of this EmployeesIdBody.


        :param address_line_1: The address_line_1 of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._address_line_1 = address_line_1

    @property
    def address_line_2(self):
        """Gets the address_line_2 of this EmployeesIdBody.  # noqa: E501


        :return: The address_line_2 of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._address_line_2

    @address_line_2.setter
    def address_line_2(self, address_line_2):
        """Sets the address_line_2 of this EmployeesIdBody.


        :param address_line_2: The address_line_2 of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._address_line_2 = address_line_2

    @property
    def identifier(self):
        """Gets the identifier of this EmployeesIdBody.  # noqa: E501


        :return: The identifier of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._identifier

    @identifier.setter
    def identifier(self, identifier):
        """Sets the identifier of this EmployeesIdBody.


        :param identifier: The identifier of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._identifier = identifier

    @property
    def swift_bic(self):
        """Gets the swift_bic of this EmployeesIdBody.  # noqa: E501


        :return: The swift_bic of this EmployeesIdBody.  # noqa: E501
        :rtype: str
        """
        return self._swift_bic

    @swift_bic.setter
    def swift_bic(self, swift_bic):
        """Sets the swift_bic of this EmployeesIdBody.


        :param swift_bic: The swift_bic of this EmployeesIdBody.  # noqa: E501
        :type: str
        """

        self._swift_bic = swift_bic

    @property
    def manager_id(self):
        """Gets the manager_id of this EmployeesIdBody.  # noqa: E501


        :return: The manager_id of this EmployeesIdBody.  # noqa: E501
        :rtype: int
        """
        return self._manager_id

    @manager_id.setter
    def manager_id(self, manager_id):
        """Sets the manager_id of this EmployeesIdBody.


        :param manager_id: The manager_id of this EmployeesIdBody.  # noqa: E501
        :type: int
        """

        self._manager_id = manager_id

    @property
    def timeoff_manager_id(self):
        """Gets the timeoff_manager_id of this EmployeesIdBody.  # noqa: E501


        :return: The timeoff_manager_id of this EmployeesIdBody.  # noqa: E501
        :rtype: int
        """
        return self._timeoff_manager_id

    @timeoff_manager_id.setter
    def timeoff_manager_id(self, timeoff_manager_id):
        """Sets the timeoff_manager_id of this EmployeesIdBody.


        :param timeoff_manager_id: The timeoff_manager_id of this EmployeesIdBody.  # noqa: E501
        :type: int
        """

        self._timeoff_manager_id = timeoff_manager_id

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EmployeesIdBody, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EmployeesIdBody):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
