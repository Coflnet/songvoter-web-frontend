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


/**
 * The platform of this song
 * @export
 */
export const CoflnetSongVoterModelsSongCreationSongPlatform = {
    Youtube: 'youtube',
    Spotify: 'spotify'
} as const;
export type CoflnetSongVoterModelsSongCreationSongPlatform = typeof CoflnetSongVoterModelsSongCreationSongPlatform[keyof typeof CoflnetSongVoterModelsSongCreationSongPlatform];


export function CoflnetSongVoterModelsSongCreationSongPlatformFromJSON(json: any): CoflnetSongVoterModelsSongCreationSongPlatform {
    return CoflnetSongVoterModelsSongCreationSongPlatformFromJSONTyped(json, false);
}

export function CoflnetSongVoterModelsSongCreationSongPlatformFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoflnetSongVoterModelsSongCreationSongPlatform {
    return json as CoflnetSongVoterModelsSongCreationSongPlatform;
}

export function CoflnetSongVoterModelsSongCreationSongPlatformToJSON(value?: CoflnetSongVoterModelsSongCreationSongPlatform | null): any {
    return value as any;
}
