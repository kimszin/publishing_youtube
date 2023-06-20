window.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((result) => result.json())
    .then(({ data }) => renderVideo(data))
    .catch((error) => console.error(error));
});

const renderVideo = (data) => {
  data.forEach((elem) => {
    const $videoPreview = document.createElement("div");
    $videoPreview.setAttribute("class", "video-preview");

    const $thumbnailRow = document.createElement("div");
    $thumbnailRow.setAttribute("class", "thumbnail-row");
    const $thumbnail = document.createElement("img");
    $thumbnail.setAttribute("class", "thumbnail");
    $thumbnail.src = elem["thumbnail"];
    const $videoTime = document.createElement("div");
    $videoTime.setAttribute("class", "video-time");
    $videoTime.innerHTML = elem["video-time"];

    $thumbnailRow.appendChild($thumbnail);
    $thumbnailRow.appendChild($videoTime);

    const $videoInfoGrid = document.createElement("div");
    $videoInfoGrid.setAttribute("class", "video-info-grid");

    const $channelPicture = document.createElement("channel-picture");
    $channelPicture.setAttribute("class", "channel-picture");
    const $profilePicture = document.createElement("img");
    $profilePicture.setAttribute("class", "profile-picture");
    $profilePicture.src = elem["profile-picture"];

    $channelPicture.appendChild($profilePicture);

    const $videoInfo = document.createElement("div");
    $videoInfo.setAttribute("class", "video-info");
    const $videoTitle = document.createElement("p");
    $videoTitle.setAttribute("class", "video-title");
    $videoTitle.innerHTML = elem["video-title"];
    const $videoAuthor = document.createElement("p");
    $videoAuthor.setAttribute("class", "video-author");
    $videoAuthor.innerHTML = elem["video-author"];
    const $videoStats = document.createElement("p");
    $videoStats.setAttribute("class", "video-stats");
    $videoStats.innerHTML = elem["video-stats"];

    $videoInfo.appendChild($videoTitle);
    $videoInfo.appendChild($videoAuthor);
    $videoInfo.appendChild($videoStats);

    $videoInfoGrid.appendChild($channelPicture);
    $videoInfoGrid.appendChild($videoInfo);

    $videoPreview.appendChild($thumbnailRow);
    $videoPreview.appendChild($videoInfoGrid);

    document.querySelector(".video-grid").appendChild($videoPreview);
  });
};
