/*
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

package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * CoreEmployeesBody
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2022-05-27T17:39:37.480830+02:00[Europe/Madrid]")
public class CoreEmployeesBody {
  @SerializedName("email")
  private String email = null;

  @SerializedName("first_name")
  private String firstName = null;

  @SerializedName("last_name")
  private String lastName = null;

  @SerializedName("birthday_on")
  private String birthdayOn = null;

  /**
   * Gets or Sets role
   */
  @JsonAdapter(RoleEnum.Adapter.class)
  public enum RoleEnum {
    BASIC("basic"),
    ADMIN("admin");

    private String value;

    RoleEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static RoleEnum fromValue(String input) {
      for (RoleEnum b : RoleEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<RoleEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final RoleEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public RoleEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return RoleEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("role")
  private RoleEnum role = null;

  @SerializedName("terminated_on")
  private String terminatedOn = null;

  /**
   * Gets or Sets gender
   */
  @JsonAdapter(GenderEnum.Adapter.class)
  public enum GenderEnum {
    MALE("male"),
    FEMALE("female");

    private String value;

    GenderEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static GenderEnum fromValue(String input) {
      for (GenderEnum b : GenderEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<GenderEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final GenderEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public GenderEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return GenderEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("gender")
  private GenderEnum gender = null;

  @SerializedName("nationality")
  private String nationality = null;

  @SerializedName("bank_number")
  private String bankNumber = null;

  @SerializedName("country")
  private String country = null;

  @SerializedName("city")
  private String city = null;

  @SerializedName("state")
  private String state = null;

  @SerializedName("postal_code")
  private String postalCode = null;

  @SerializedName("address_line_1")
  private String addressLine1 = null;

  @SerializedName("address_line_2")
  private String addressLine2 = null;

  @SerializedName("identifier")
  private String identifier = null;

  @SerializedName("swift_bic")
  private String swiftBic = null;

  @SerializedName("company_id")
  private Integer companyId = null;

  @SerializedName("legal_entity_id")
  private Integer legalEntityId = null;

  @SerializedName("manager_id")
  private Integer managerId = null;

  @SerializedName("timeoff_manager_id")
  private Integer timeoffManagerId = null;

  public CoreEmployeesBody email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @Schema(example = "bob_stone@factorial.co", description = "")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public CoreEmployeesBody firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * Get firstName
   * @return firstName
  **/
  @Schema(description = "")
  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public CoreEmployeesBody lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * Get lastName
   * @return lastName
  **/
  @Schema(description = "")
  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public CoreEmployeesBody birthdayOn(String birthdayOn) {
    this.birthdayOn = birthdayOn;
    return this;
  }

   /**
   * Get birthdayOn
   * @return birthdayOn
  **/
  @Schema(example = "yyyy-mm-dd", description = "")
  public String getBirthdayOn() {
    return birthdayOn;
  }

  public void setBirthdayOn(String birthdayOn) {
    this.birthdayOn = birthdayOn;
  }

  public CoreEmployeesBody role(RoleEnum role) {
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @Schema(example = "basic", description = "")
  public RoleEnum getRole() {
    return role;
  }

  public void setRole(RoleEnum role) {
    this.role = role;
  }

  public CoreEmployeesBody terminatedOn(String terminatedOn) {
    this.terminatedOn = terminatedOn;
    return this;
  }

   /**
   * Get terminatedOn
   * @return terminatedOn
  **/
  @Schema(example = "yyyy-mm-dd", description = "")
  public String getTerminatedOn() {
    return terminatedOn;
  }

  public void setTerminatedOn(String terminatedOn) {
    this.terminatedOn = terminatedOn;
  }

  public CoreEmployeesBody gender(GenderEnum gender) {
    this.gender = gender;
    return this;
  }

   /**
   * Get gender
   * @return gender
  **/
  @Schema(example = "female", description = "")
  public GenderEnum getGender() {
    return gender;
  }

  public void setGender(GenderEnum gender) {
    this.gender = gender;
  }

  public CoreEmployeesBody nationality(String nationality) {
    this.nationality = nationality;
    return this;
  }

   /**
   * Get nationality
   * @return nationality
  **/
  @Schema(description = "")
  public String getNationality() {
    return nationality;
  }

  public void setNationality(String nationality) {
    this.nationality = nationality;
  }

  public CoreEmployeesBody bankNumber(String bankNumber) {
    this.bankNumber = bankNumber;
    return this;
  }

   /**
   * Get bankNumber
   * @return bankNumber
  **/
  @Schema(description = "")
  public String getBankNumber() {
    return bankNumber;
  }

  public void setBankNumber(String bankNumber) {
    this.bankNumber = bankNumber;
  }

  public CoreEmployeesBody country(String country) {
    this.country = country;
    return this;
  }

   /**
   * Get country
   * @return country
  **/
  @Schema(description = "")
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public CoreEmployeesBody city(String city) {
    this.city = city;
    return this;
  }

   /**
   * Get city
   * @return city
  **/
  @Schema(description = "")
  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public CoreEmployeesBody state(String state) {
    this.state = state;
    return this;
  }

   /**
   * Get state
   * @return state
  **/
  @Schema(description = "")
  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public CoreEmployeesBody postalCode(String postalCode) {
    this.postalCode = postalCode;
    return this;
  }

   /**
   * Get postalCode
   * @return postalCode
  **/
  @Schema(description = "")
  public String getPostalCode() {
    return postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public CoreEmployeesBody addressLine1(String addressLine1) {
    this.addressLine1 = addressLine1;
    return this;
  }

   /**
   * Get addressLine1
   * @return addressLine1
  **/
  @Schema(description = "")
  public String getAddressLine1() {
    return addressLine1;
  }

  public void setAddressLine1(String addressLine1) {
    this.addressLine1 = addressLine1;
  }

  public CoreEmployeesBody addressLine2(String addressLine2) {
    this.addressLine2 = addressLine2;
    return this;
  }

   /**
   * Get addressLine2
   * @return addressLine2
  **/
  @Schema(description = "")
  public String getAddressLine2() {
    return addressLine2;
  }

  public void setAddressLine2(String addressLine2) {
    this.addressLine2 = addressLine2;
  }

  public CoreEmployeesBody identifier(String identifier) {
    this.identifier = identifier;
    return this;
  }

   /**
   * Get identifier
   * @return identifier
  **/
  @Schema(description = "")
  public String getIdentifier() {
    return identifier;
  }

  public void setIdentifier(String identifier) {
    this.identifier = identifier;
  }

  public CoreEmployeesBody swiftBic(String swiftBic) {
    this.swiftBic = swiftBic;
    return this;
  }

   /**
   * Get swiftBic
   * @return swiftBic
  **/
  @Schema(example = "1234567890", description = "")
  public String getSwiftBic() {
    return swiftBic;
  }

  public void setSwiftBic(String swiftBic) {
    this.swiftBic = swiftBic;
  }

  public CoreEmployeesBody companyId(Integer companyId) {
    this.companyId = companyId;
    return this;
  }

   /**
   * Get companyId
   * @return companyId
  **/
  @Schema(example = "5", description = "")
  public Integer getCompanyId() {
    return companyId;
  }

  public void setCompanyId(Integer companyId) {
    this.companyId = companyId;
  }

  public CoreEmployeesBody legalEntityId(Integer legalEntityId) {
    this.legalEntityId = legalEntityId;
    return this;
  }

   /**
   * Get legalEntityId
   * @return legalEntityId
  **/
  @Schema(example = "5", description = "")
  public Integer getLegalEntityId() {
    return legalEntityId;
  }

  public void setLegalEntityId(Integer legalEntityId) {
    this.legalEntityId = legalEntityId;
  }

  public CoreEmployeesBody managerId(Integer managerId) {
    this.managerId = managerId;
    return this;
  }

   /**
   * Get managerId
   * @return managerId
  **/
  @Schema(example = "5", description = "")
  public Integer getManagerId() {
    return managerId;
  }

  public void setManagerId(Integer managerId) {
    this.managerId = managerId;
  }

  public CoreEmployeesBody timeoffManagerId(Integer timeoffManagerId) {
    this.timeoffManagerId = timeoffManagerId;
    return this;
  }

   /**
   * Get timeoffManagerId
   * @return timeoffManagerId
  **/
  @Schema(example = "5", description = "")
  public Integer getTimeoffManagerId() {
    return timeoffManagerId;
  }

  public void setTimeoffManagerId(Integer timeoffManagerId) {
    this.timeoffManagerId = timeoffManagerId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CoreEmployeesBody coreEmployeesBody = (CoreEmployeesBody) o;
    return Objects.equals(this.email, coreEmployeesBody.email) &&
        Objects.equals(this.firstName, coreEmployeesBody.firstName) &&
        Objects.equals(this.lastName, coreEmployeesBody.lastName) &&
        Objects.equals(this.birthdayOn, coreEmployeesBody.birthdayOn) &&
        Objects.equals(this.role, coreEmployeesBody.role) &&
        Objects.equals(this.terminatedOn, coreEmployeesBody.terminatedOn) &&
        Objects.equals(this.gender, coreEmployeesBody.gender) &&
        Objects.equals(this.nationality, coreEmployeesBody.nationality) &&
        Objects.equals(this.bankNumber, coreEmployeesBody.bankNumber) &&
        Objects.equals(this.country, coreEmployeesBody.country) &&
        Objects.equals(this.city, coreEmployeesBody.city) &&
        Objects.equals(this.state, coreEmployeesBody.state) &&
        Objects.equals(this.postalCode, coreEmployeesBody.postalCode) &&
        Objects.equals(this.addressLine1, coreEmployeesBody.addressLine1) &&
        Objects.equals(this.addressLine2, coreEmployeesBody.addressLine2) &&
        Objects.equals(this.identifier, coreEmployeesBody.identifier) &&
        Objects.equals(this.swiftBic, coreEmployeesBody.swiftBic) &&
        Objects.equals(this.companyId, coreEmployeesBody.companyId) &&
        Objects.equals(this.legalEntityId, coreEmployeesBody.legalEntityId) &&
        Objects.equals(this.managerId, coreEmployeesBody.managerId) &&
        Objects.equals(this.timeoffManagerId, coreEmployeesBody.timeoffManagerId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, firstName, lastName, birthdayOn, role, terminatedOn, gender, nationality, bankNumber, country, city, state, postalCode, addressLine1, addressLine2, identifier, swiftBic, companyId, legalEntityId, managerId, timeoffManagerId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CoreEmployeesBody {\n");
    
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    birthdayOn: ").append(toIndentedString(birthdayOn)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    terminatedOn: ").append(toIndentedString(terminatedOn)).append("\n");
    sb.append("    gender: ").append(toIndentedString(gender)).append("\n");
    sb.append("    nationality: ").append(toIndentedString(nationality)).append("\n");
    sb.append("    bankNumber: ").append(toIndentedString(bankNumber)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    city: ").append(toIndentedString(city)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
    sb.append("    addressLine1: ").append(toIndentedString(addressLine1)).append("\n");
    sb.append("    addressLine2: ").append(toIndentedString(addressLine2)).append("\n");
    sb.append("    identifier: ").append(toIndentedString(identifier)).append("\n");
    sb.append("    swiftBic: ").append(toIndentedString(swiftBic)).append("\n");
    sb.append("    companyId: ").append(toIndentedString(companyId)).append("\n");
    sb.append("    legalEntityId: ").append(toIndentedString(legalEntityId)).append("\n");
    sb.append("    managerId: ").append(toIndentedString(managerId)).append("\n");
    sb.append("    timeoffManagerId: ").append(toIndentedString(timeoffManagerId)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
