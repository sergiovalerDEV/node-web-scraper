// Import necessary libraries
const axios = require("axios"); // npm install axios
const cheerio = require("cheerio"); // npm install cheerio

// Define an asynchronous function to perform web scraping
async function performScraping() { // Target URL is MediaMarkt
    try {
        // Make an HTTP GET request to retrieve the product page content
        const axiosResponse = await axios.request({
            method: "GET", // Specify the request method
            url: "https://www.mediamarkt.es/es/product/_tv-micro-led-110-samsung-mna110ms1acxxe-uhd-4k-procesador-micro-ia-smart-tv-acero-inoxidable-1505386.html?a=3048432&p=270504&utm_campaign=css&tduid=Cj0KCQjwpP63BhDYARIsAOQkATYoNblm3_V-ggSCURiQf-mlN9_UHMcC0OYqUtwNgVf2zlLcCUH-wvEaAuEnEALw_wcB_deviceid&utm_source=tradedoubler&utm_medium=aff-content&utm_content=3048432&utm_term=affiliate_es_es_mm_2021-01-01_conversion_tradedoubler_tradedoubler_aff-content_mediamarkt_all_multidevice_3048432_multisize_all_all_all", // Specify the product URL
            headers: {
                // Set header to simulate a real browser (User-Agent)
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36" // Request Headers
            }
        });

        // Load the HTML response into Cheerio for manipulation
        const $ = cheerio.load(axiosResponse.data);

        // Initialize a data structure to store product information
        const productData = { 
            //Product information extraction
            title: $("h1.sc-8b815c14-0.bYawoo").text().trim(),
            price: $("span[data-test='branded-price-whole-value']").text().trim() + "€",  
            image: $("img.sc-46fee68e-2.dxjJte").attr("src") 
        };

        console.log(productData); // Display the product data in the console
    } catch (error) {//Error management
        console.error('Error performing scraping:', error); // Print the error to the console
    }
}

performScraping(); // Perform scraping of the product, JSON format

//cd web-scrapper-nodejs
//And write node scraper.js in console to execute
//Hope you enjoy it :)
//Greetings from sergiovalerDEV