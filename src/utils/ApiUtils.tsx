import {
    AuthApiControllerImplApi,
    CoflnetSongVoterModelsUserInfo,
    Configuration,
    ListApiControllerImplApi,
    PartyApi,
    SongApiApi,
    UserApi
} from '../../generated'

export const GOOGLE_TOKEN = 'googleToken'
export const SPOTIFY_TOKEN = 'spotifyToken'
export const USER_INFO = 'userInfo'
export const IS_CURRENTLY_PARTY_OWNER = 'isPartyOwner'

export async function getUserInfo(): Promise<CoflnetSongVoterModelsUserInfo> {
    let info = localStorage.getItem(USER_INFO)
    if (info) {
        let parsed = JSON.parse(info) as CoflnetSongVoterModelsUserInfo

        if (parsed.spotifyTokenExpiration) {
            parsed.spotifyTokenExpiration = new Date(parsed.spotifyTokenExpiration)
        }
        if (parsed && parsed.spotifyTokenExpiration && parsed.spotifyTokenExpiration.getTime() - new Date().getTime() > 10000) {
            return parsed
        }
    }

    let userController = await getUserController()
    let result = await userController.apiUserInfoGet()
    localStorage.setItem(USER_INFO, JSON.stringify(result))
    return result
}

async function getConfiguration(): Promise<Configuration> {
    let config = new Configuration({
        basePath: 'https://songvoter.party',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let googleToken = localStorage.getItem(GOOGLE_TOKEN)
    if (!googleToken) {
        let authController = new AuthApiControllerImplApi(config)
        googleToken = (await authController.apiAuthAnonymousPost()).token || null
        localStorage.setItem(GOOGLE_TOKEN, googleToken!)
    }
    config.headers!.Authorization = `Bearer ${googleToken}`
    return config
}

export let getAuthController = async () => new AuthApiControllerImplApi(await getConfiguration())
export let getPartyController = async () => new PartyApi(await getConfiguration())
export let getSongController = async () => new SongApiApi(await getConfiguration())
export let getListController = async () => new ListApiControllerImplApi(await getConfiguration())
export let getUserController = async () => new UserApi(await getConfiguration())
