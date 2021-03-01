
const fetchQuote = () => {
    fetch('https://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('quoteDisplay').innerHTML = data.quote;
            const quote = data.quote;
             const twitterShare = `https://twitter.com/intent/tweet?text=${quote}`;
            document.querySelector("#twitterButton>a").href = twitterShare;
        });
    };