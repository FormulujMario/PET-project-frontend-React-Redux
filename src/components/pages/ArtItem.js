import scrollUp from "../scrollUp.js";
import rewrite from "../rewrite.js";
import NormalWhiteButton from "../buttons/NormalWhiteButton.js";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  GALLERY,
  QUESTIONS,
  SOC_NET_ICONS,
  ghPagesPath,
} from "../CONSTANTS.js";

const ArtItem = () => {
  scrollUp();
  let currentArtItem = {};
  let prevItemPath = "";
  let nextItemPath = "";
  const pathsToArtItem = (arr) => {
    arr.map((item) => {
      const itemUrl = `${ghPagesPath}art/${rewrite(item.artist)}-${rewrite(
        item.name
      )}`;
      if (itemUrl === window.location.pathname) {
        currentArtItem = {
          itemIndex: arr.indexOf(item),
          name: item.name,
          artist: item.artist,
          img: item.img,
          interview: item.interview,
          description: item.description,
          site: item.site,
        };
        let prevItem = arr[currentArtItem.itemIndex - 1];
        const prevOrNextItemURL = (atrist, name) => {
          return `/art/${rewrite(atrist)}-${rewrite(name)}`;
        };
        if (arr.indexOf(prevItem) >= 0) {
          if (!prevItem.artist) {
            prevItem = arr[currentArtItem.itemIndex - 2];
          }
          prevItemPath = prevOrNextItemURL(prevItem.artist, prevItem.name);
        }
        let nextItem = arr[currentArtItem.itemIndex + 1];
        if (arr.indexOf(nextItem) < arr.length && arr.indexOf(nextItem) > 0) {
          if (!nextItem.artist) {
            nextItem = arr[currentArtItem.itemIndex + 2];
          }
          nextItemPath = prevOrNextItemURL(nextItem.artist, nextItem.name);
        }
      }
      return { currentArtItem, prevItemPath, nextItemPath };
    });
  };
  const prevOrNextButton = (itemClass, text, icon, path, iconPosition) => {
    return (
      <div className={`${itemClass}-button`}>
        {path && (
          <NormalWhiteButton
            text={text}
            icon={icon}
            href={path}
            iconPosition={iconPosition}
          />
        )}
      </div>
    );
  };
  pathsToArtItem(GALLERY);
  if (currentArtItem) {
    return (
      <main>
        <section className="art-item-top">
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/ArtItemTopImage.png"}
            alt=""
          />
          <h2>
            {currentArtItem.artist}
            <br />
            {currentArtItem.name}
          </h2>
        </section>
        <section className="art-item-interview">
          <div className="soc-net-icons">
            {SOC_NET_ICONS.map((icon) => {
              return icon.svg;
            })}
          </div>
          <div>
            {QUESTIONS.map((question) => {
              return (
                <p key={question}>
                  <b>{question}</b>
                  <br />
                  <br />
                  <span>
                    {currentArtItem.interview[QUESTIONS.indexOf(question)]}
                  </span>
                </p>
              );
            })}
          </div>
        </section>
        <section className="art-item-desc">
          <div>
            <div>
              <p>{currentArtItem.description}</p>
              <br />
              <p>
                Visit <u>{currentArtItem.site[0]}</u> to see{" "}
                {currentArtItem.site[1]} works.
              </p>
            </div>
          </div>
          <div>
            <img src={currentArtItem.img} alt={currentArtItem.name} />
          </div>
        </section>
        <section className="prev-next-buttons">
          {prevOrNextButton(
            "prev",
            "PREVIOUS ART",
            <BsArrowLeft />,
            prevItemPath,
            "start"
          )}
          {prevOrNextButton("next", "NEXT ART", <BsArrowRight />, nextItemPath)}
        </section>
      </main>
    );
  } else {
    return <h2>No such art item</h2>;
  }
};

export default ArtItem;
