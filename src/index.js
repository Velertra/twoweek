import "./api.js";
//import * as dotenv from dotenv;
/*console.log(FORTNITE_API_KEY) *//* */
//import 'dotenv/config' 

//import * as dotenv from 'dotenv';
//require('dotenv').config()
//console.log(typeof process.env.FORTNITE_API_KEY)

//dotenv.config();
//import dotenv as dotenv;
/* console.log(process.env.FORTNITE_API_KEY)
console.log(FORTNITE_API_KEY) */
/*
const { container } = require("webpack");
 
*/
/* 
// URL of the API endpoint to retrieve player stats
const apiUrl = 'https://fortnite-api.com/v2/stats/br/v2';

// Example player name and account type
const playerName = 'shaepods';
const playertwo = 'M_Mcflyyy';
const accountType = 'epic'; // Or 'psn' or 'xbl'
let fullUrl = '';

//let test = process.env.FORTNITE_APIKEY;
const apiKey = process.env.FORTNITE_APIKEY;
// Construct the full URL with parameters
//console.log(playerName)



//for(let run of playerName){
    //let newNames = run.toString();
   
fullUrl = `${apiUrl}?name=${playerName}&accountType=${accountType}`;

//fullUrl2 = `${apiUrl}?name=${playertwo}&accountType=${accountType}`;

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
    });  */

/*   fetch( fullUrl2,{ headers })
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



/*     let justChecking = process.env.FORTNITE_APIKEY;
    //console.log(justChecking)

    async function getPlayerStats(player){
        const response = await fetch ("https://fortnite-api.com/v2/stats/br/v2?name=" + player + "&accountType=epic" , {
            headers: {
                'Authorization': justChecking,  
            }
        } );

        const playerStats = await response.json();
        return playerStats

    }



     async function displayDataArray(){
        //const martyInfo = await getPlayerStats('M_Mcflyyy');
        const shaeInfo = await getPlayerStats('shaepods');
        console.log(shaeInfo)
    
        for(const key in shaeInfo.data){
            if (shaeInfo.data.hasOwnProperty(key)){
                const container = document.getElementById('main_container')
                const value = JSON.stringify(shaeInfo.data[key]);
                console.log(typeof key)
                
                const listItem = document.createElement('div');
                listItem.textContent = `${key}: ${value}`;
                main_container.appendChild(listItem);
            }
        }
    }
    displayDataArray() */

/* 
const apiKey = process.env.FORTNITE_APIKEY;

async function getPlayerStats(playerName) {
   try{ 
    const apiUrl = `https://fortnite-api.com/v2/stats/br/v2?name=${playerName}`;

    const headers = {
        'Authorization': apiKey
    };

    const response = await fetch(apiUrl,{ headers });
    if(!response.ok){
        throw new Error('API request failed with status ${response.status}')
    }
    const data = await response.json();
    console.log(data);
    return data;
    } catch (error){
        console.error('Error retriving player stats', error)
        throw error;
    }
}
getPlayerStats('M_Mcflyyy') */
