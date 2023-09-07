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
/**
 * 
 * @export
 * @interface CoflnetSongVoterModelsInvite
 */
export interface CoflnetSongVoterModelsInvite {
    /**
     * 
     * @type {string}
     * @memberof CoflnetSongVoterModelsInvite
     */
    link?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CoflnetSongVoterModelsInvite
     */
    expiration?: Date;
}

/**
 * Check if a given object implements the CoflnetSongVoterModelsInvite interface.
 */
export function instanceOfCoflnetSongVoterModelsInvite(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoflnetSongVoterModelsInviteFromJSON(json: any): CoflnetSongVoterModelsInvite {
    return CoflnetSongVoterModelsInviteFromJSONTyped(json, false);
}

export function CoflnetSongVoterModelsInviteFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoflnetSongVoterModelsInvite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'expiration': !exists(json, 'expiration') ? undefined : (new Date(json['expiration'])),
    };
}

export function CoflnetSongVoterModelsInviteToJSON(value?: CoflnetSongVoterModelsInvite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'expiration': value.expiration === undefined ? undefined : (value.expiration.toISOString()),
    };
}
