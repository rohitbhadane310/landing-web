import React from "react";
import music from "../images/music.png";
import frame from "../images/Frame.png"

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>All articles</h3>
          <p>
            Hundreds of articles for any mind, any mood, any goal. Browse all of
            our articles on meditation, mindfulness, sleep, and more.
          </p>
          <img src={music} alt="" />
          <div className="audio">
            <a href="#" className="btn">
              Start your free trial
            </a>
          </div>
        </div>

        <div className="image">
          <img src={frame} alt="" />
        </div>
      </section>
    </>
  );
}

export default Home;
