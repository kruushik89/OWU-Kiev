// let videoWrap = '';
// let nextPageToken;
// let wrapVideo = document.querySelector('.wrap-video');
//
// document.getElementById('load-more').addEventListener('click', () => {
//     execute(nextPageToken);
// });
//
// async function loadClient() {
//     gapi.client.setApiKey("AIzaSyAOgnS0pLCNrYa2uVHyzRN-iH-4ZOUXpb4"); // paste api key
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function () {
//                 execute();
//             },
//             function (err) {
//                 console.error("Error loading GAPI client for API", err);
//             });
// }
//
//
// function execute(page) {
//     return gapi.client.youtube.playlistItems.list({
//         "part": "snippet,contentDetails",
//         "maxResults": 8,
//         "playlistId": "PLY1sAemBLA5ySDbUtWeeD5QEr_kcVsnw7", // paste playlist id
//         // "playlistId": "PL_48a05FlkczvGDRA5FAMGpbMhI0mX6ZJ", // with 82 videos
//         // "playlistId": "PLUjMOnGMMRhdxruHdkmwly9D7ODtQvRfk", // with 3 videos
//         "pageToken": page || null
//     })
//         .then(function (response) {
//
//                 nextPageToken = response.result.nextPageToken;
//
//                 loadMore(response.result.items);
//
//             },
//             function (err) {
//                 console.error("Execute error", err);
//             });
// }
//
// gapi.load("client", function () {
//     loadClient();
// });
//
// let loadMore = function (arrItems) {
//     for (let i = 0; i <= arrItems.length; i++) {
//         try {
//             videoWrap += `<div class="review-video-items"><a href="https://youtube.com/watch?v=${arrItems[i].snippet.resourceId.videoId}">
//                                                 <img src="${arrItems[i].snippet.thumbnails.medium.url}" alt="${arrItems[i].snippet.title}">
//                                             </a>
//                                        </div>`
//         } catch (e) {
//         }
//     }
//     wrapVideo.innerHTML = videoWrap;
// };


// ======================================================================================================================
let buttonVideo = document.querySelector('#load-more');
const headerType = 'OWUToken';
const authorizationKey = 'eyJhbGciOiJIUzI1NiJ9.eW91dHViZQ.52JguZaTkt1NtHTDMT_ThRdGxL9QfWoE-LzolvJUxgw';
let videoWrap = '';
let page = 0;
const size = 12;

async function getVideos(page, size = 12) {
    let response = await fetch(`http://bigbird.space:3010/getYoutubeVideos?size=${size}&page=${page}`, {
            headers: {
                [headerType]: authorizationKey,
            },
        }
    );
    return await response.json();
}

function wrapVideo(videos) {
    videos.forEach((video) => {
        videoWrap += `<div class="review-video-items"><a href="${video.youtubeLink}">
                                                <img src="${video.youtubeImage}" alt="${video.youtubeTitle}">
                                            </a>
                                       </div>`
    });

    document.querySelector('.wrap-video').innerHTML = videoWrap;
}

getVideos(page, size).then(arrayOfVideos => {
    wrapVideo(arrayOfVideos);
    page++;
    console.log(page);
});

buttonVideo.addEventListener('click', () => {
    getVideos(page, size).then(arrayOfVideos => {
        wrapVideo(arrayOfVideos);

        console.log(arrayOfVideos);
        page++;
        console.log(page);
    })

});















