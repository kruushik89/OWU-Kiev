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
                                       </div>
                </div>
            </div>
        </div>

`

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
















