const apiKey = "AIzaSyCGMVaHBm6VvbwWIeNhS2Fn0aeDMjdPQig";
const url = "https://www.googleapis.com/youtube/v3/commentThreads";
const commentsContainer = document.getElementById("comments-container");

window.addEventListener("load", () => {
    let videoId = document.cookie.split("=")[1];

  if (YT) {
    new YT.Player("video-placeholder", {
      height: "650px",
      width: "1200px",
      videoId,
    });

     loadComments(videoId);
  }
});

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
         <p> <button><img src="./Images/comment_like_icon.svg"></button>  <button><img src="./Images/dislike_icon.svg" ></button> </p>
       </div>`;

    commentsContainer.appendChild(div);
  });
}