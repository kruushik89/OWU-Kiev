let videoWrap = '';
let nextPageToken;
let wrapVideo = document.querySelector('.wrap-video');

document.getElementById('load-more').addEventListener('click', () => {
    execute(nextPageToken);
});

async function loadClient() {
    gapi.client.setApiKey("AIzaSyAOgnS0pLCNrYa2uVHyzRN-iH-4ZOUXpb4"); // paste api key
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function () {
                execute();
            },
            function (err) {
                console.error("Error loading GAPI client for API", err);
            });
}


function execute(page) {
    return gapi.client.youtube.playlistItems.list({
        "part": "snippet,contentDetails",
        "maxResults": 8,
        "playlistId": "PLY1sAemBLA5ySDbUtWeeD5QEr_kcVsnw7", // paste playlist id
        // "playlistId": "PL_48a05FlkczvGDRA5FAMGpbMhI0mX6ZJ", // with 82 videos
        // "playlistId": "PLUjMOnGMMRhdxruHdkmwly9D7ODtQvRfk", // with 3 videos
        "pageToken": page || null
    })
        .then(function (response) {

                nextPageToken = response.result.nextPageToken;

                loadMore(response.result.items);

            },
            function (err) {
                console.error("Execute error", err);
            });
}

gapi.load("client", function () {
    loadClient();
});

let loadMore = function (arrItems) {
    for (let i = 0; i <= arrItems.length; i++) {
        try {
            videoWrap += `<div class="review-video-items"><a href="https://youtube.com/watch?v=${arrItems[i].snippet.resourceId.videoId}">
                                                <img src="${arrItems[i].snippet.thumbnails.medium.url}" alt="${arrItems[i].snippet.title}">
                                            </a>
                                       </div>`
        } catch (e) {
        }
    }
    wrapVideo.innerHTML = videoWrap;
};


// ======================================================================================================================
