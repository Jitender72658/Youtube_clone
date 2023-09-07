const apiKey = "AIzaSyCis4vIncfvo4b4usbuvn3gni1gnfIAyeY";
const url = "https://www.googleapis.com/youtube/v3/commentThreads";
const commentsContainer = document.getElementById("comments-container");
window.addEventListener("load",async () => {
    let videoId = document.cookie.split("=")[1];
    videoId = 'qeqvwl9jJy0';

  if (YT) {
    new YT.Player("video-placeholder", {
        height: "650px", 
        width: "100%",
      videoId,
      src: `https://www.youtube.com/embed/${videoId}`,
    });
           await loadDetails(videoId);
           await loadComments(videoId);
        // getRecommendedVideos(videoId)
        //  .then(recommendedVideos => {
        //      console.log('Recommended Videos:', recommendedVideos);
        //      })
        //  .catch(error => {
        //      console.log("error in getting recommandation " +error);
        // });
  }
});

async function loadDetails(videoId){
    let currUrl = "https://www.googleapis.com/youtube/v3/videos";
    let endpoint = `${currUrl}?key=${apiKey}&id=${videoId}&part=snippet,statistics`;
    const response = await fetch(endpoint);
    const result = await response.json();
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${result.items[0].snippet.channelId}&key=${apiKey}`;
    const channelRespose = await fetch(channelUrl);
    const channelDetails = await channelRespose.json();
    const videoDetails = document.getElementById("videoDetails");
    videoDetails.innerHTML = `<div id="titleDiv">
                                   ${result.items[0].snippet.localized.title}
                              </div>
                              <div id="viewDiv">
                                  <div>${result.items[0].statistics.viewCount} views . ${formatYouTubeTimeToDateString(result.items[0].snippet.publishedAt)}</div>
                                  <div id="likeDiv">
                                       <div><img src="./Images/like_icon.svg"> ${count(result.items[0].statistics.likeCount)}</div>
                                       <div> <img src="./Images/video_dislike_icon.svg"> </div>
                                       <div> <img src="./Images/share_icon.svg"> Share </div>
                                       <div> <img src="./Images/save_icon.svg"> Save</div>
                                       <div> <img src="./Images/more_icon.svg"> </div>
                                  </div>
                              </div>
                              <hr>
                              <div class="channelDetailDiv">
                                 <div id="detailDiv">
                                      <div id="channelLogo">
                                        <img src=${channelDetails.items[0].snippet.thumbnails.default.url}>
                                      </div>
                                      <div id="nameDiv">
                                           <div>${result.items[0].snippet.channelTitle}</div>
                                           <div>${count(channelDetails.items[0].statistics.subscriberCount)} subscribers</div>
                                      </div>
                                 </div>
                                 <div id="subscribeDiv">
                                     <button id="subscribeBtn">Subscibe</button>
                                 </div>
                              </div>
                              <div class="descriptionDiv">
                                   ${result.items[0].snippet.description}
                              </div>
                              <p id="commentSeeMore">See more ...</p>
                              <hr>`;
       const commentHeading = document.getElementById("commentsHeading");
       commentHeading.innerText = `${ result.items[0].statistics.commentCount} Comments`;
       const moreFromChannelLabel = document.getElementById("moreFromChannel");
       moreFromChannelLabel.innerText =  `More from ${result.items[0].snippet.channelTitle}`;
   
}
async function loadComments(videoId) {
  let endpoint = `${url}?key=${apiKey}&videoId=${videoId}&maxResults=10&part=snippet`;

  const response = await fetch(endpoint);
  const result = await response.json();

  result.items.forEach((item) => {
    const repliesCount = item.snippet.totalReplyCount;
    const {
      authorDisplayName,
      textDisplay,
      likeCount,
      authorProfileImageUrl: profileUrl,
      publishedAt,
    } = item.snippet.topLevelComment.snippet;

    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
      <div>
         <img src="${profileUrl}" class="author-profile" alt="author profile" />
      </div>
      <div class="sigle-comment-div">
         <b>${authorDisplayName}</b>
         <p>${textDisplay}</p>
         <div> <button><img src="./Images/comment_like_icon.svg"></button> ${likeCount}  <button id="dislikeBtn"><img src="./Images/dislike_icon.svg" ></button> </div>
       </div>`;

    commentsContainer.appendChild(div);
  });
}


function getRecommendedVideos(videoId, maxResults = 10) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&relatedToVideoId=${videoId}&type=video&maxResults=${maxResults}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.items)
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

function formatYouTubeTimeToDateString(youtubeTime) {
    const date = new Date(youtubeTime);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
  }
  
  function count(value){
    let number =  parseInt(value);
    if(number<100){
        return number;
    }
    
    else if(number>=1000 && number<1000000){
        return Math.round(number/1000)+"K";
    }
    return Math.round(number/1000000)+"M";
 }
  

