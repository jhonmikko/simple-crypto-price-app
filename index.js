// Fetching data from the CoinGecko API to get the latest prices and 24-hour changes for specified cryptocurrencies
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')
.then(res => res.json()) // Parse the response as JSON
.then(json => {
    // Selecting the container element where the cryptocurrency data will be displayed
    const container = document.querySelector(".container");
    // Getting an array of the names of the cryptocurrencies from the JSON object
    const coins = Object.getOwnPropertyNames(json);

    // Looping through each cryptocurrency in the JSON object
    for(let coin of coins){
        // Retrieving information about the current cryptocurrency
        const coinInfo = json[`${coin}`];
        // Extracting the price and 24-hour change for the current cryptocurrency
        const price = coinInfo.usd;
        const change = coinInfo.usd_24h_change.toFixed(5);

        // Appending HTML markup for displaying cryptocurrency information to the container element
        container.innerHTML += `
            <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                <div class="coin-logo">
                    <img src="images/${coin}.png">
                </div>
                <div class="coin-name">
                    <h3 >${coin}</h3>
                    <span>/USD</span>
                </div>
                <div class="coin-price">
                    <span class="price">$${price}</span>
                    <span class="change">${change}</span>
                </div>
            </div>
        `;
    }
})