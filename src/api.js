let justChecking = process.env.FORTNITE_APIKEY;
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
displayDataArray()