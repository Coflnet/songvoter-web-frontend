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

import { exists, mapValues } from '../runtime';
import type { SystemNetHttpStatusCode } from './SystemNetHttpStatusCode';
import {
    SystemNetHttpStatusCodeFromJSON,
    SystemNetHttpStatusCodeFromJSONTyped,
    SystemNetHttpStatusCodeToJSON,
} from './SystemNetHttpStatusCode';

/**
 * 
 * @export
 * @interface CoflnetSongVoterMiddlewareApiException
 */
export interface CoflnetSongVoterMiddlewareApiException {
    /**
     * 
     * @type {SystemNetHttpStatusCode}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    statusCode?: SystemNetHttpStatusCode;
    /**
     * 
     * @type {string}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    slug?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    trace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    message?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    readonly data?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    innerException?: any | null;
    /**
     * 
     * @type {string}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    helpLink?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    source?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    hResult?: number;
    /**
     * 
     * @type {string}
     * @memberof CoflnetSongVoterMiddlewareApiException
     */
    readonly stackTrace?: string | null;
}

/**
 * Check if a given object implements the CoflnetSongVoterMiddlewareApiException interface.
 */
export function instanceOfCoflnetSongVoterMiddlewareApiException(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoflnetSongVoterMiddlewareApiExceptionFromJSON(json: any): CoflnetSongVoterMiddlewareApiException {
    return CoflnetSongVoterMiddlewareApiExceptionFromJSONTyped(json, false);
}

export function CoflnetSongVoterMiddlewareApiExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoflnetSongVoterMiddlewareApiException {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': !exists(json, 'statusCode') ? undefined : SystemNetHttpStatusCodeFromJSON(json['statusCode']),
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'trace': !exists(json, 'trace') ? undefined : json['trace'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'innerException': !exists(json, 'innerException') ? undefined : json['innerException'],
        'helpLink': !exists(json, 'helpLink') ? undefined : json['helpLink'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'hResult': !exists(json, 'hResult') ? undefined : json['hResult'],
        'stackTrace': !exists(json, 'stackTrace') ? undefined : json['stackTrace'],
    };
}

export function CoflnetSongVoterMiddlewareApiExceptionToJSON(value?: CoflnetSongVoterMiddlewareApiException | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': SystemNetHttpStatusCodeToJSON(value.statusCode),
        'slug': value.slug,
        'trace': value.trace,
        'message': value.message,
        'innerException': value.innerException,
        'helpLink': value.helpLink,
        'source': value.source,
        'hResult': value.hResult,
    };
}

