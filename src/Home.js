import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const channelID = "UCyUWgAVvyA0_RU0XZ2qON7A";
const result = "1";
const finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${result}&order=date&key=${process.env.REACT_APP_API_KEY}`;

function Home() {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    axios.get(finalURL).then((response) => {
      const ids = response.data.items.map((obj) => obj.id.videoId);
      const prefix = "https://www.youtube.com/embed/";
      const url = ids.map((id) => prefix + id);
      console.log(url);
      setVideos(url);
    });
  };

  useEffect(() => getVideos(), []);

  fetch(finalURL)
    .then((response) => response.json())
    .then((result) => {
      const ids = result.items.map((obj) => obj.id.videoId);
      const prefix = "https://www.youtube.com/embed/";
      const url = ids.map((id) => prefix + id);
      setVideos(url);
      console.log(url);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <div className="header">
        <h2>This week's newest video</h2>
      </div>
      {videos.map((video) => {
        return (
          <div className="episode_container">
            <iframe
              width="560"
              height="315"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        );
      })}
      <div className="view-more">
        <button>
          <a
            href="https://www.youtube.com/channel/UCyUWgAVvyA0_RU0XZ2qON7A"
            target="_blank"
            rel="noreferrer noopener"
          >
            View more
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
