import React from 'react'
import './Home.css';

function Home() {
  return (
    <div>
        <div className="header">
            <h1>This week's newest video</h1>
        </div>
        <div className="episode_container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4QLbm5qO3Yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="view-more">
            <button>View more</button>
        </div>
    </div>
)
}

export default Home