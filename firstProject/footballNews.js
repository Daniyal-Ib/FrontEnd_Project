const footballNews = {
    headline: "Premier League Highlights",
    summary: "Manchester United wins over Liverpool in a thrilling match...",
    displayNews: function() {
        document.getElementById("footballHeadline").innerText = this.headline;
        document.getElementById("footballSummary").innerText = this.summary;
    }
};

footballNews.displayNews();
