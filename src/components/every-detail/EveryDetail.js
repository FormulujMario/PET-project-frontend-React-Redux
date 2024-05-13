import { useState } from "react";
import { Link } from "react-router-dom";
import "./EveryDetail.css";

const EveryDetail = () => {
  const [detailPic, setDetailPic] = useState(
    process.env.REACT_APP_IMAGES_PATH + "/Every-detail-2.png"
  );
  const changePic = (event) => {
    setDetailPic(event.target.src);
  };
  return (
    <div className="about-fifth-section">
      <h2>Every detail matters</h2>
      <div className="main">
        <img src={detailPic} />
        <p>
          Each of these types of beer, in addition to it’s unique taste, also
          has a characteristic appearance in the form of a label, which in
          itself is a real work of art - a miniature canvas with the artist's
          own signature.
        </p>
      </div>
      <div className="every-detail-pics">
        <div>
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/Every-detail-1.png"}
            onClick={(event) => changePic(event)}
          />
        </div>
        <div>
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/Every-detail-2.png"}
            onClick={(event) => changePic(event)}
          />
        </div>
        <div>
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/Every-detail-3.png"}
            onClick={(event) => changePic(event)}
          />
        </div>
        <Link to="/art">
          <div className="every-detail-learn-more-container">
            <div className="every-detail-learn-more">
              <div className="every-detail-learn-more-img">
                <img
                  src={process.env.REACT_APP_IMAGES_PATH + "/shop-now.png"}
                  alt=""
                ></img>
              </div>
              <span className="learn-more">LEARN MORE</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EveryDetail;