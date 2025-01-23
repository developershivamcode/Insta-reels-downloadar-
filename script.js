function validateInstagramURL(url) {
    // Regular expression to match Instagram reel URLs
    const regex = /^(https?:\/\/)?(www\.)?instagram\.com\/reel\/[a-zA-Z0-9_-]+\/?$/;
    return regex.test(url);
}

document.getElementById("downloadButton").addEventListener("click", function () {
    const userInput = document.getElementById("reelURL").value.trim();
    if (validateInstagramURL(userInput)) {
        alert("Valid URL! Proceeding to download...");
        // यहाँ पर डाउनलोड फंक्शन कॉल करें
    } else {
        alert("Please enter a valid Instagram reel URL!");
    }
});
