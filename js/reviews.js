let videoWrap = '';

async function loadClient() {
    gapi.client.setApiKey("AIzaSyAOgnS0pLCNrYa2uVHyzRN-iH-4ZOUXpb4"); // paste api key
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function () {
                console.log("GAPI client loaded for API");
                execute();
            },
            function (err) {
                console.error("Error loading GAPI client for API", err);
            });
}

function execute(page) {
    return gapi.client.youtube.playlistItems.list({
        "part": "snippet,contentDetails",
        "maxResults": 50,
        "playlistId": "PLY1sAemBLA5ySDbUtWeeD5QEr_kcVsnw7", // paste playlist id
        // "playlistId": "PL_48a05FlkczvGDRA5FAMGpbMhI0mX6ZJ", // with 82 videos
        // "playlistId": "PLUjMOnGMMRhdxruHdkmwly9D7ODtQvRfk", // with 3 videos
        "pageToken": page || null
    })
        .then(function (response) {
                const youtubeLink = 'https://youtube.com/watch?v=';
                const arrItems = response.result.items;
                arrItems.forEach(function (el, index) {
                    try {
                        videoWrap += `<div class="review-video-items"><a href="https://youtube.com/watch?v=${el.snippet.resourceId.videoId}">
                                                <img src="${el.snippet.thumbnails.medium.url}" alt="${el.snippet.title}">
                                            </a>
                                       </div>`
                    } catch (e) {

                    }
                });

                document.querySelector('.wrap-video').innerHTML = videoWrap;

                if (response.result.nextPageToken) {
                    execute(response.result.nextPageToken)
                }

                console.log(response);

            },
            function (err) {
                console.error("Execute error", err);
            });
}

gapi.load("client", function () {
    loadClient();
});
