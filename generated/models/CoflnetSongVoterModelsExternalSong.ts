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
import type { CoflnetSongVoterModelsSongPlatform } from './CoflnetSongVoterModelsSongPlatform';
import {
    CoflnetSongVoterModelsSongPlatformFromJSON,
    CoflnetSongVoterModelsSongPlatformFromJSONTyped,
    CoflnetSongVoterModelsSongPlatformToJSON,
} from './CoflnetSongVoterModelsSongPlatform';

/**
 * 
 * @export
 * @interface CoflnetSongVoterModelsExternalSong
 */
export interface CoflnetSongVoterModelsExternalSong {
    /**
     * Gets or Sets Title
     * @type {string}
     * @memberof CoflnetSongVoterModelsExternalSong
     */
    title?: string | null;
    /**
     * Gets or Sets Artist
     * @type {string}
     * @memberof CoflnetSongVoterModelsExternalSong
     */
    artist?: string | null;
    /**
     * Gets or Sets Thumbnail
     * @type {string}
     * @memberof CoflnetSongVoterModelsExternalSong
     */
    thumbnail?: string | null;
    /**
     * Gets or Sets ExternalId
     * @type {string}
     * @memberof CoflnetSongVoterModelsExternalSong
     */
    externalId: string;
    /**
     * Gets or Sets the Duration
     * @type {number}
     * @memberof CoflnetSongVoterModelsExternalSong
     */
    duration?: number;
    /**
     * 
     * @type {CoflnetSongVoterModelsSongPlatform}
     * @memberof CoflnetSongVoterModelsExternalSong
     */
    platform: CoflnetSongVoterModelsSongPlatform;
}

/**
 * Check if a given object implements the CoflnetSongVoterModelsExternalSong interface.
 */
export function instanceOfCoflnetSongVoterModelsExternalSong(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "externalId" in value;
    isInstance = isInstance && "platform" in value;

    return isInstance;
}

export function CoflnetSongVoterModelsExternalSongFromJSON(json: any): CoflnetSongVoterModelsExternalSong {
    return CoflnetSongVoterModelsExternalSongFromJSONTyped(json, false);
}

export function CoflnetSongVoterModelsExternalSongFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoflnetSongVoterModelsExternalSong {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'artist': !exists(json, 'artist') ? undefined : json['artist'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : json['thumbnail'],
        'externalId': json['externalId'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'platform': CoflnetSongVoterModelsSongPlatformFromJSON(json['platform']),
    };
}

export function CoflnetSongVoterModelsExternalSongToJSON(value?: CoflnetSongVoterModelsExternalSong | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'artist': value.artist,
        'thumbnail': value.thumbnail,
        'externalId': value.externalId,
        'duration': value.duration,
        'platform': CoflnetSongVoterModelsSongPlatformToJSON(value.platform),
    };
}

