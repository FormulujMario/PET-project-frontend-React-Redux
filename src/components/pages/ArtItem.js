import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import NormalWhiteButton from "../buttons/NormalWhiteButton.js";
import {
  GALLERY,
  QUESTIONS,
  SOC_NET_ICONS,
  ghPagesPath,
} from "../CONSTANTS.js";

const ArtItem = () => {
  let currentArtItem = {};
  let prevItemPath = "";
  let nextItemPath = "";
  const pathsTemplate = (item) => {
    return item
      .toLowerCase()
      .replace(/[^\w ]/g, "")
      .replace(/\s+/g, " ")
      .replace(/\s/g, "-");
  };
  const pathsToArtItem = (arr) => {
    arr.map((item) => {
      const itemUrl = `${ghPagesPath}art/${pathsTemplate(
        // `${ghPagesPath}/art/${pathsTemplate(
        item.artist
      )}-${pathsTemplate(item.name)}`;
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
        if (arr.indexOf(prevItem) >= 0) {
          if (prevItem.artist == "") {
            prevItem = arr[currentArtItem.itemIndex - 2];
          }
          prevItemPath = `/art/${pathsTemplate(
            prevItem.artist
          )}-${pathsTemplate(prevItem.name)}`;
        }

        let nextItem = arr[currentArtItem.itemIndex + 1];
        if (arr.indexOf(nextItem) < arr.length && arr.indexOf(nextItem) > 0) {
          if (nextItem.artist == "") {
            nextItem = arr[currentArtItem.itemIndex + 2];
          }
          nextItemPath = `/art/${pathsTemplate(
            nextItem.artist
          )}-${pathsTemplate(nextItem.name)}`;
        }

        return { currentArtItem, prevItemPath, nextItemPath };
      }
    });
  };

  const isPrevItem = () => {
    if (prevItemPath) {
      return (
        <div className="prev-button">
          <NormalWhiteButton
            text="PREVIOUS ART"
            icon={<BsArrowLeft />}
            href={prevItemPath}
            iconPosition="start"
          />
        </div>
      );
    } else {
      return <div className="prev-button"></div>;
    }
  };
  const isNextItem = () => {
    if (nextItemPath) {
      return (
        <div className="next-button">
          <NormalWhiteButton
            text="NEXT ART"
            icon={<BsArrowRight />}
            href={nextItemPath}
          />
        </div>
      );
    } else {
      return <div className="next-button"></div>;
    }
  };
  pathsToArtItem(GALLERY);
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
              <p>
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
        {isPrevItem()}
        {isNextItem()}
      </section>
    </main>
  );
};

export default ArtItem;
