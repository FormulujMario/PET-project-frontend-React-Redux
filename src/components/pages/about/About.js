import { useState } from "react";
import { BsCheckCircleFill, BsPlayCircle } from "react-icons/bs";
import PageTitle from "../../PageTitle";
import EveryDetail from "../../every-detail/EveryDetail";
import "./About.css";

const About = () => {
  const [videoContent, setVideoContent] = useState(<BsPlayCircle />);
  const videoPlay = () => {
    setVideoContent(<BsCheckCircleFill />);
  };
  return (
    <main>
      <PageTitle title="ABOUT KABINET" />
      <div className="about-kabinet">
        <div className="about-first-section">
          <h2>
            Kabinet Brewery - the unique <br />
            utopia of the finest taste
          </h2>
          <img src={process.env.REACT_APP_IMAGES_PATH + "/Beers.png"} />
        </div>
        <div className="about-second-section">
          <div className="content-to-right">
            <p>
              The history of the Kabinet brewery is also the history of the
              craft movement in our country and marks the beginning of the
              flourishing of craft microbreweries in Serbia.
            </p>
            <p>
              The office of the brewery is located in the village of
              Nemenikuche, on a beautiful green meadow near Kosmai.
            </p>
            <p>
              The brewery was founded in February 2013, and the first Kabinet
              beers hit the market in mid-2014.
            </p>
            <img
              src={process.env.REACT_APP_IMAGES_PATH + "/About-history.png"}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-third-section">
          <h2>
            We are offer the highest
            <br />
            quality craft beers from
            <br />
            the selected ingredients
          </h2>
          <div className="video-preview-container">
            <div className="video-preview">
              <div className="video-preview-img">
                <img
                  src={process.env.REACT_APP_IMAGES_PATH + "/Video.png"}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="video-preview-icon" onClick={videoPlay}>
                {videoContent}
              </div>
            </div>
          </div>
        </div>
        <div className="about-fourth-section">
          <h2>
            The first greenfield craft
            <br />
            brewery in the Balkans,
            <br />
            awarded beers
          </h2>
          <hr />
          <div className="awards-section">
            <div className="awards-title">
              <p>awards</p>
            </div>
            <div className="awards-table">
              <table>
                <tr class="border_bottom">
                  <td>2020</td>
                  <td>Best Brewmaster in Serbia</td>
                  <td>Ratebeer</td>
                </tr>
                <tr class="border_bottom">
                  <td>2020-2016</td>
                  <td>Best beer in Serbia</td>
                  <td>Ratebeer</td>
                </tr>
                <tr class="border_bottom">
                  <td>2016</td>
                  <td>Best Brewery in Serbia</td>
                  <td>Ratebeer</td>
                </tr>
                <tr class="border_bottom">
                  <td>2016</td>
                  <td>Best Entrepreneur of the Year- nominee 2016</td>
                  <td>Ernst & Young</td>
                </tr>
                <tr class="border_bottom">
                  <td>2016</td>
                  <td>for the most successful start up in 2016</td>
                  <td>Serbian Chamber of Commerce</td>
                </tr>
                <tr class="border_bottom">
                  <td>2015-2014</td>
                  <td>Grand prix for the best packaging in Serbia</td>
                  <td>Pactivity</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <EveryDetail />
      </div>
    </main>
  );
};

export default About;
