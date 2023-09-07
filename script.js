const apiKey = "AIzaSyCis4vIncfvo4b4usbuvn3gni1gnfIAyeY";

const url = "https://www.googleapis.com/youtube/v3/search";

async function fetchVideos() {
  const searchQuery = "";
  const response = await fetch(
    `${url}?key=${apiKey}&q=${searchQuery}&part=snippet&maxResults=20`
  );
  const result = await response.json();
  displayVideo(result);
  result.items.forEach((videoItem) => {
    console.log(videoItem.snippet.description);
  });
}

// fetchVideos();









[
    {
        "kind": "youtube#video",
        "etag": "zt992gGxMbexPUb0TUn23lFeZcg",
        "id": "qeqvwl9jJy0",
        "snippet": {
            "publishedAt": "2023-09-04T14:46:56Z",
            "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
            "title": "Shannon Sharpe and Stephen A. APPLAUD Deion Sanders’ PATIENCE 💯 | First Take",
            "description": "On First Take, Stephen A. Smith and Shannon Sharpe discuss Colorado’s 45-42 upset of TCU in Deion Sanders’ debut with the Buffaloes.\n0:00 Shannon loved what he saw from Colorado\n2:30 Coach Prime’s patience\n3:30 Stephen A.’s thoughts on Deion’s press conference \n5:40 How he’s not “a typical coach”\n#ESPN #FirstTake #StephenA #ShannonSharpe \n\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/qeqvwl9jJy0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/qeqvwl9jJy0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/qeqvwl9jJy0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/qeqvwl9jJy0/sddefault.jpg",
                    "width": 640,
                    "height": 480
                }
            },
            "channelTitle": "ESPN",
            "tags": [
                "shannon sharpe",
                "shannon sharpe first take",
                "shannon sharpe deion sanders",
                "deion sanders",
                "first take",
                "Stephen A. Smith",
                "Stephen A. Smith First Take",
                "stephen a",
                "stephen a smith",
                "stephen a smith first take",
                "shannon sharpe first take today",
                "shannon sharpe deion sanders first take",
                "first take deion sanders",
                "college football",
                "college football on espn",
                "espn college football",
                "CFB on ESPN",
                "molly qerim",
                "first take shannon sharpe",
                "first take stephen a smith"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Shannon Sharpe and Stephen A. APPLAUD Deion Sanders’ PATIENCE 💯 | First Take",
                "description": "On First Take, Stephen A. Smith and Shannon Sharpe discuss Colorado’s 45-42 upset of TCU in Deion Sanders’ debut with the Buffaloes.\n0:00 Shannon loved what he saw from Colorado\n2:30 Coach Prime’s patience\n3:30 Stephen A.’s thoughts on Deion’s press conference \n5:40 How he’s not “a typical coach”\n#ESPN #FirstTake #StephenA #ShannonSharpe \n\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV"
            }
        },
        "statistics": {
            "viewCount": "1211327",
            "likeCount": "27887",
            "favoriteCount": "0",
            "commentCount": "2861"
        }
    }
]