 //import * as dotenv from dotenv;
/*console.log(OPENAI_API_KEY) *//* */
//import 'dotenv/config' 

//import OPENAI_API_KEY from 'dotenv';
//require('dotenv').config()
console.log(typeof process.env.OPENAI_API_KEY)
//dotenv.config();
//import dotenv as dotenv;
/* console.log(process.env.OPENAI_API_KEY)
console.log(OPENAI_API_KEY) */

/* const { container } = require("webpack");



// URL of the API endpoint to retrieve player stats
const apiUrl = 'https://fortnite-api.com/v2/stats/br/v2';

// Example player name and account type
const playerName = 'shaepods';
const playertwo = 'M_Mcflyyy';
const accountType = 'epic'; // Or 'psn' or 'xbl'
let fullUrl = '';
// Construct the full URL with parameters
//console.log(playerName)


//for(let run of playerName){
    //let newNames = run.toString();
   
fullUrl = `${apiUrl}?name=${playerName}&accountType=${accountType}`;

fullUrl2 = `${apiUrl}?name=${playertwo}&accountType=${accountType}`;
// console.log(fullUrl)
//}

// Define the headers with your API key
const headers = {
    'Authorization': apiKey,
};

// Send a GET request to the Fortnite API
fetch(fullUrl, { headers })

    .then(response => response.json())
    .then(data => {
        // Handle the API response data here
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
    }); */

/*  fetch( fullUrl2,{ headers })
 .then(response => response.json())
    .then(data => {
        // Handle the API response data here
      //displayDataArray(data.data, 'main_container')
        //console.log(data);
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
    }); */



   /*  function displayDataArray(data, displaySpot){
        
               // const container = document.getElementById(displaySpot)
        console.log(data.data)
        for(const key in data){
            if (data.hasOwnProperty(key)){
                const value = data[key];
                const listItem = document.createElement('li');
                listItem.textContent = `${key}: ${value}`;
                container.appenChild(listItem);
            }
        }
    } */



    async function getPlayerStats(player){
        const response = await fetch ("https://fortnite-api.com/v2/stats/br/v2?name=" + player + "&accountType=epic", {
            method
        });
        const playerStats = await response.json();
        console.log(playerStats);

    }

    getPlayerStats('M_Mcflyyy')
    getPlayerStats('shaepods')