

export interface VideoItems {
    kind:    string;
    etag:    string;
    id:      ID;
    snippet: Snippet;
}

export interface ID {
    kind:    string;
    videoId: string;
}

export interface Snippet {
    publishedAt:          string;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    liveBroadcastContent: string;
    publishTime:          string;
}

export interface Thumbnails {
    default: Default;
    medium:  Default;
    high:    Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface VideoResult {
  title: string;
  imgUrl: string;
  id: string;
}

export async function getCommonVideos(url: string) : Promise<VideoResult[]>{
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
    const YOUTUBE_BASE_URL = process.env.YOUTUBE_BASE_URL

    const popularUrl = '/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=ID';

    result = [];
    try {
        var response = await fetch(`${YOUTUBE_BASE_URL}${url}&key=${YOUTUBE_API_KEY}`)
        //'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=ID&key=[YOUR_API_KEY]' 
        var data = await response.json();

        if (data.error) {
            throw new Error('ase')
        }

        var result = data.items.map((value : any, index: number) => {
        var newId: ID = {
            kind: value.id.kind,
            videoId: value.id.videoId ?? ''
        }
        var currSnippet = value.snippet;
            
        var defaultThumbnail = currSnippet.thumbnails.default;
        var highThumbnail = currSnippet.thumbnails.high;
        var medThumbnail = currSnippet.thumbnails.medium;
        
        var id = newId.videoId ?? newId.kind
        
        var newSnippet: Snippet = {
            title: currSnippet.title,
            channelId: currSnippet.channelId,
            channelTitle: currSnippet.channelTitle,
            liveBroadcastContent: currSnippet.liveBroadcastContent,
            description: currSnippet.description,
            publishedAt: currSnippet.publishedAt,
            publishTime: currSnippet.publishTime,
            thumbnails: {
                default: {
                    height: defaultThumbnail.height ?? 0,
                    url: defaultThumbnail.url,
                    width: defaultThumbnail.width ?? 0
                },
                high: {
                    height: highThumbnail.height ?? 0,
                    url: highThumbnail.url,
                    width: highThumbnail.width ?? 0
                },
                medium: {
                    height: medThumbnail.height ?? 0,
                    url: medThumbnail.url,
                    width: medThumbnail.width ?? 0
                },
            },
        }
            var finalValue: VideoResult = {
                imgUrl: newSnippet.thumbnails.high.url,
                id: id,
                title: newSnippet.title
            }
            
            // console.log('perkiraan error')
            // console.log(finalValue)

        return finalValue;
        });
        return result;
    } catch (e) {
        console.error('Error while loading video :' + e)
        return [];
    }
}

export const getVideos = (searchQuery : string) => {
    const URL = `/search?part=snippet&q=${searchQuery}&type=video&maxResults=25`;
    return getCommonVideos(URL);
}