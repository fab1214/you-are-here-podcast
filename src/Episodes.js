import React from 'react'
const API = 'AIzaSyAcGCqx0kg5Xk0_qFOVULEa7y5ACp5tlNA';
const channelID = 'UCyUWgAVvyA0_RU0XZ2qON7A';
const result = '1';
const finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${result}&order=date&key=${API}`;
function Episodes() {

fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
        // console.log(responseJson);
        const result = responseJson.items.map(item => "https://www.youtube.com/embed/"+ item.id.videoId);
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });    
  return (
    <div>
        <h1>Episodes</h1>
        <div className="episode container">
        </div>
    </div>
  )
  }
export default Episodes

