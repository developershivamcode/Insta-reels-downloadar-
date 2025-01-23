function downloadReel() {
    const reelUrl = document.getElementById('reelUrl').value;
    if (reelUrl.trim() === "") {
        alert("Please enter the Instagram reel URL!");
        return;
    }

    // Replace this API link with your backend service if needed.
    const apiUrl = `https://instagram-downloader-api.com/download?url=${reelUrl}`;
    window.open(apiUrl, "_blank");
}
