import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://elements-resized.envatousercontent.com/elements-video-cover-images/010ecceb-5e9d-412a-aaf2-33830021d7fc/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=f366ac5e6cd8c9d88e442767b38c7a64c6bc6af2bcaaef021a313d87f8ac8790"
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
