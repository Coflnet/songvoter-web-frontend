/* tslint:disable */
/* eslint-disable */
/**
 * Songvoter
 * Songvoter
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@coflnet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CoflnetSongVoterControllersAuthApiControllerImplAuthCode,
  CoflnetSongVoterModelsAuthRefreshToken,
  CoflnetSongVoterModelsAuthToken,
} from '../models/index';
import {
    CoflnetSongVoterControllersAuthApiControllerImplAuthCodeFromJSON,
    CoflnetSongVoterControllersAuthApiControllerImplAuthCodeToJSON,
    CoflnetSongVoterModelsAuthRefreshTokenFromJSON,
    CoflnetSongVoterModelsAuthRefreshTokenToJSON,
    CoflnetSongVoterModelsAuthTokenFromJSON,
    CoflnetSongVoterModelsAuthTokenToJSON,
} from '../models/index';

export interface ApiAuthAnonymousPostRequest {
    nonce?: string;
}

export interface ApiAuthGoogleCodePostRequest {
    coflnetSongVoterControllersAuthApiControllerImplAuthCode?: CoflnetSongVoterControllersAuthApiControllerImplAuthCode;
}

export interface ApiAuthGooglePostRequest {
    coflnetSongVoterModelsAuthRefreshToken?: CoflnetSongVoterModelsAuthRefreshToken;
}

export interface ApiAuthSpotifyCodePostRequest {
    coflnetSongVoterControllersAuthApiControllerImplAuthCode?: CoflnetSongVoterControllersAuthApiControllerImplAuthCode;
}

export interface ApiAuthTestPostRequest {
    coflnetSongVoterModelsAuthToken?: CoflnetSongVoterModelsAuthToken;
}

export interface DbDeleteRequest {
    coflnetSongVoterModelsAuthToken?: CoflnetSongVoterModelsAuthToken;
}

export interface DbPostRequest {
    coflnetSongVoterModelsAuthToken?: CoflnetSongVoterModelsAuthToken;
}

/**
 * 
 */
export class AuthApiControllerImplApi extends runtime.BaseAPI {

    /**
     * Sign in with anonymous user
     */
    async apiAuthAnonymousPostRaw(requestParameters: ApiAuthAnonymousPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoflnetSongVoterModelsAuthToken>> {
        const queryParameters: any = {};

        if (requestParameters.nonce !== undefined) {
            queryParameters['nonce'] = requestParameters.nonce;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/auth/anonymous`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoflnetSongVoterModelsAuthTokenFromJSON(jsonValue));
    }

    /**
     * Sign in with anonymous user
     */
    async apiAuthAnonymousPost(requestParameters: ApiAuthAnonymousPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoflnetSongVoterModelsAuthToken> {
        const response = await this.apiAuthAnonymousPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Authcode oauth2 flow for google
     */
    async apiAuthGoogleCodePostRaw(requestParameters: ApiAuthGoogleCodePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoflnetSongVoterModelsAuthToken>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/google/code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CoflnetSongVoterControllersAuthApiControllerImplAuthCodeToJSON(requestParameters.coflnetSongVoterControllersAuthApiControllerImplAuthCode),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoflnetSongVoterModelsAuthTokenFromJSON(jsonValue));
    }

    /**
     * Authcode oauth2 flow for google
     */
    async apiAuthGoogleCodePost(requestParameters: ApiAuthGoogleCodePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoflnetSongVoterModelsAuthToken> {
        const response = await this.apiAuthGoogleCodePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Stores google auth token server side
     */
    async apiAuthGooglePostRaw(requestParameters: ApiAuthGooglePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoflnetSongVoterModelsAuthToken>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/google`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CoflnetSongVoterModelsAuthRefreshTokenToJSON(requestParameters.coflnetSongVoterModelsAuthRefreshToken),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoflnetSongVoterModelsAuthTokenFromJSON(jsonValue));
    }

    /**
     * Stores google auth token server side
     */
    async apiAuthGooglePost(requestParameters: ApiAuthGooglePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoflnetSongVoterModelsAuthToken> {
        const response = await this.apiAuthGooglePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiAuthSpotifyCodePostRaw(requestParameters: ApiAuthSpotifyCodePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoflnetSongVoterModelsAuthToken>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/spotify/code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CoflnetSongVoterControllersAuthApiControllerImplAuthCodeToJSON(requestParameters.coflnetSongVoterControllersAuthApiControllerImplAuthCode),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoflnetSongVoterModelsAuthTokenFromJSON(jsonValue));
    }

    /**
     */
    async apiAuthSpotifyCodePost(requestParameters: ApiAuthSpotifyCodePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoflnetSongVoterModelsAuthToken> {
        const response = await this.apiAuthSpotifyCodePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiAuthTestPostRaw(requestParameters: ApiAuthTestPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/test`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CoflnetSongVoterModelsAuthTokenToJSON(requestParameters.coflnetSongVoterModelsAuthToken),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAuthTestPost(requestParameters: ApiAuthTestPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiAuthTestPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async dbDeleteRaw(requestParameters: DbDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/db`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: CoflnetSongVoterModelsAuthTokenToJSON(requestParameters.coflnetSongVoterModelsAuthToken),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async dbDelete(requestParameters: DbDeleteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.dbDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async dbPostRaw(requestParameters: DbPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/db`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CoflnetSongVoterModelsAuthTokenToJSON(requestParameters.coflnetSongVoterModelsAuthToken),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async dbPost(requestParameters: DbPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.dbPostRaw(requestParameters, initOverrides);
    }

}
