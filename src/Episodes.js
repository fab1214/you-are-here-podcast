// import React, {useState} from 'react'
// const API = 'AIzaSyAcGCqx0kg5Xk0_qFOVULEa7y5ACp5tlNA';
// const channelID = 'UCyUWgAVvyA0_RU0XZ2qON7A';
// const result = '10';
// const finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${result}&order=date&key=${API}`;
// function Episodes() {

// const [video, setVideo] = useState([]);

// fetch(finalURL)
//     .then((response) => response.json())
//     .then((result) => {
//         const videos = result.items.map(obj => obj.id.videoId);
//         const url="https://www.youtube.com/embed/" + videos;
//         setVideo(url);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
  
//     return (
//     <div>
//         <h1>Episodes</h1>
//         <div className="episode container">
//             <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         </div>
//     </div>
//   )
// }
// export default Episodes

