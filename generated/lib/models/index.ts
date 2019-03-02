/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing Order.
 */
export interface Order {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {number} [petId]
   */
  petId?: number;
  /**
   * @member {number} [quantity]
   */
  quantity?: number;
  /**
   * @member {Date} [shipDate]
   */
  shipDate?: Date;
  /**
   * @member {Status} [status] Order Status. Possible values include: 'placed',
   * 'approved', 'delivered'
   */
  status?: Status;
  /**
   * @member {boolean} [complete] Default value: false .
   */
  complete?: boolean;
}

/**
 * @interface
 * An interface representing User.
 */
export interface User {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [username]
   */
  username?: string;
  /**
   * @member {string} [firstName]
   */
  firstName?: string;
  /**
   * @member {string} [lastName]
   */
  lastName?: string;
  /**
   * @member {string} [email]
   */
  email?: string;
  /**
   * @member {string} [password]
   */
  password?: string;
  /**
   * @member {string} [phone]
   */
  phone?: string;
  /**
   * @member {number} [userStatus] User Status
   */
  userStatus?: number;
}

/**
 * @interface
 * An interface representing Category.
 */
export interface Category {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing Tag.
 */
export interface Tag {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing Pet.
 */
export interface Pet {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {Category} [category]
   */
  category?: Category;
  /**
   * @member {string} name
   */
  name: string;
  /**
   * @member {string[]} photoUrls
   */
  photoUrls: string[];
  /**
   * @member {Tag[]} [tags]
   */
  tags?: Tag[];
  /**
   * @member {Status1} [status] pet status in the store. Possible values
   * include: 'available', 'pending', 'sold'
   */
  status?: Status1;
}

/**
 * @interface
 * An interface representing ApiResponse.
 */
export interface ApiResponse {
  /**
   * @member {number} [code]
   */
  code?: number;
  /**
   * @member {string} [type]
   */
  type?: string;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing SwaggerPetstoreOptions.
 * @extends ServiceClientOptions
 */
export interface SwaggerPetstoreOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing SwaggerPetstoreUpdatePetWithFormOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface SwaggerPetstoreUpdatePetWithFormOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [name] Updated name of the pet
   */
  name?: string;
  /**
   * @member {string} [status] Updated status of the pet
   */
  status?: string;
}

/**
 * @interface
 * An interface representing SwaggerPetstoreDeletePetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface SwaggerPetstoreDeletePetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [apiKey]
   */
  apiKey?: string;
}

/**
 * @interface
 * An interface representing SwaggerPetstoreUploadFileOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface SwaggerPetstoreUploadFileOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [additionalMetadata] Additional data to pass to server
   */
  additionalMetadata?: string;
  /**
   * @member {msRest.HttpRequestBody} [file] file to upload
   */
  file?: msRest.HttpRequestBody;
}

/**
 * @interface
 * An interface representing LoginUserHeaders.
 * Defines headers for loginUser operation.
 *
 */
export interface LoginUserHeaders {
  /**
   * @member {number} [xRateLimit] calls per hour allowed by the user
   */
  xRateLimit: number;
  /**
   * @member {Date} [xExpiresAfter] date in UTC when token expires
   */
  xExpiresAfter: Date;
}

/**
 * Defines values for Status.
 * Possible values include: 'placed', 'approved', 'delivered'
 * @readonly
 * @enum {string}
 */
export type Status = 'placed' | 'approved' | 'delivered';

/**
 * Defines values for Status1.
 * Possible values include: 'available', 'pending', 'sold'
 * @readonly
 * @enum {string}
 */
export type Status1 = 'available' | 'pending' | 'sold';

/**
 * Contains response data for the findPetsByStatus operation.
 */
export type FindPetsByStatusResponse = Array<Pet> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Pet[];
    };
};

/**
 * Contains response data for the findPetsByTags operation.
 */
export type FindPetsByTagsResponse = Array<Pet> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Pet[];
    };
};

/**
 * Contains response data for the getPetById operation.
 */
export type GetPetByIdResponse = Pet & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Pet;
    };
};

/**
 * Contains response data for the uploadFile operation.
 */
export type UploadFileResponse = ApiResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ApiResponse;
    };
};

/**
 * Contains response data for the getInventory operation.
 */
export type GetInventoryResponse = {
  /**
   * The response body properties.
   */
  [propertyName: string]: number;
} & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: { [propertyName: string]: number };
    };
};

/**
 * Contains response data for the placeOrder operation.
 */
export type PlaceOrderResponse = Order & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Order;
    };
};

/**
 * Contains response data for the getOrderById operation.
 */
export type GetOrderByIdResponse = Order & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Order;
    };
};

/**
 * Contains response data for the loginUser operation.
 */
export type LoginUserResponse = LoginUserHeaders & {
  /**
   * The parsed response body.
   */
  body: string;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: LoginUserHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the getUserByName operation.
 */
export type GetUserByNameResponse = User & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: User;
    };
};
