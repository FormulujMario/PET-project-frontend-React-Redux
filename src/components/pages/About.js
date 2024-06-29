import { useState } from "react";
import { BsCheckCircleFill, BsPlayCircle } from "react-icons/bs";
import PageTitle from "../PageTitle";
import { Table } from "antd";
import { columns, dataSource, imgsPath } from "../CONSTANTS";
import EveryDetail from "../EveryDetail";

const About = () => {
  if (!columns || !dataSource) {
    throw new Error("Colomns or data source in About is missing");
  }
  const [videoContent, setVideoContent] = useState(<BsPlayCircle />);
  const videoPlay = () => {
    setVideoContent(<BsCheckCircleFill />);
  };
  return (
    <main>
      <PageTitle title="ABOUT KABINET" />
      <div className="about-kabinet">
        <section>
          <h2>
            Kabinet Brewery - the unique <br />
            utopia of the finest taste
          </h2>
          <img src={imgsPath + "/Beers.png"} alt="beers bottles" />
        </section>
        <section className="history">
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
              src={imgsPath + "/About-history.png"}
              alt="view to kabinet lounge"
              loading="lazy"
            />
          </div>
        </section>
        <section className="video">
          <h2>
            We are offer the highest
            <br />
            quality craft beers from
            <br />
            the selected ingredients
          </h2>
          <div className="video-preview-container">
            <div className="video-preview">
              <div className="preview-img">
                <img
                  src={imgsPath + "/Video.png"}
                  alt="video preview"
                  loading="lazy"
                />
              </div>
              <div className="preview-icon" onClick={videoPlay}>
                {videoContent}
              </div>
            </div>
          </div>
        </section>
        <section className="awards">
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
              {columns && (
                <Table
                  showHeader={false}
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                />
              )}
            </div>
          </div>
        </section>
        <EveryDetail />
      </div>
    </main>
  );
};

export default About;
