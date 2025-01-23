function downloadReel() {
    const reelUrl = document.getElementById('reelUrl').value.trim();
    
    // Validate URL
    const instaUrlPattern = /^https?:\/\/(www\.)?instagram\.com\/reel\/[A-Za-z0-9_-]+\/?$/;
    if (!reelUrl) {
        alert("Please enter the Instagram reel URL!");
        return;
    } else if (!instaUrlPattern.test(reelUrl)) {
        alert("Please enter a valid Instagram reel URL!");
        return;
    }

    // Change button text to indicate loading
    const downloadButton = document.querySelector("button");
    downloadButton.textContent = "Downloading...";
    downloadButton.disabled = true;

    // Replace this API link with your backend service if needed.
    const apiUrl = `https://instagram-downloader-api.com/download?url=${reelUrl}`;
    window.open(apiUrl, "_blank");

    // Reset button text after download starts
    setTimeout(() => {
        downloadButton.textContent = "Download Reel";
        downloadButton.disabled = false;
    }, 2000);
}
