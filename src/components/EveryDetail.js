import { useState } from "react";
import { Link } from "react-router-dom";

const EveryDetail = () => {
  const [detailPic, setDetailPic] = useState(
    process.env.REACT_APP_IMAGES_PATH + "/Every-detail-2.png"
  );
  const changePic = (event) => {
    setDetailPic(event.target.src);
  };
  return (
    <section className="every-detail">
      <h2>Every detail matters</h2>
      <div className="main-img-and-text">
        <img src={detailPic} alt="" loading="lazy" />
        <p>
          Each of these types of beer, in addition to it’s unique taste, also
          has a characteristic appearance in the form of a label, which in
          itself is a real work of art - a miniature canvas with the artist's
          own signature.
        </p>
      </div>
      <div className="other-imgs">
        <div>
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/Every-detail-1.png"}
            alt="first piece of art"
            loading="lazy"
            onClick={(event) => changePic(event)}
          />
        </div>
        <div>
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/Every-detail-2.png"}
            alt="second piece of art"
            loading="lazy"
            onClick={(event) => changePic(event)}
          />
        </div>
        <div>
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/Every-detail-3.png"}
            alt="third piece of art"
            loading="lazy"
            onClick={(event) => changePic(event)}
          />
        </div>
        <Link to="/art">
          <div className="learn-more-container">
            <div className="learn-more">
              <div className="learn-more-img">
                <img
                  src={process.env.REACT_APP_IMAGES_PATH + "/shop-now.png"}
                  alt=""
                  loading="lazy"
                ></img>
              </div>
              <span>LEARN MORE</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default EveryDetail;
