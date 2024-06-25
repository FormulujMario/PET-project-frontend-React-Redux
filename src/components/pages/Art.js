import { GALLERY } from "../CONSTANTS";
import PageTitle from "../PageTitle";
import { Link } from "react-router-dom";

const Art = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const pathsToArtItem = (item) => {
    let nameToURL = (name) => {
      return name
        .toLowerCase()
        .replace(/[^\w ]/g, "")
        .replace(/\s+/g, " ")
        .replace(/\s/g, "-");
    };
    let fullPathArt =
      "/art/" + nameToURL(item.artist) + "-" + nameToURL(item.name);
    return { fullPathArt };
  };
  const classesArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
  ];
  let galleryItem = null;
  let i = 0;
  const galleryItemRender = (item, ind) => {
    if (!classesArr[ind]) {
      i = 0;
      ind = i;
    }
    return (galleryItem = {
      classItem: classesArr[ind],
      nameItem: item.name,
      imageItem: item.img,
      artist: item.artist,
    });
  };
  let copyOfGalleryArr = null;
  let arrForRender = [];
  let restOfGallery = null;
  const createArrForGalleryRender = (arr) => {
    copyOfGalleryArr = JSON.parse(JSON.stringify(arr));
    if (copyOfGalleryArr.length !== 0) {
      if (copyOfGalleryArr.length < classesArr.length) {
        restOfGallery = [];
        arrForRender.push(copyOfGalleryArr);
      } else {
        restOfGallery = JSON.parse(JSON.stringify(copyOfGalleryArr));
        copyOfGalleryArr.splice(classesArr.length);
        arrForRender.push(copyOfGalleryArr);
        restOfGallery.splice(0, classesArr.length);
      }
      createArrForGalleryRender(restOfGallery);
    }
    return arrForRender;
  };
  createArrForGalleryRender(GALLERY);
  let indexOfRenderingArr = -1;
  return (
    <main>
      <PageTitle title="ART GALLERY" />
      {arrForRender.map((arr) => {
        indexOfRenderingArr++;
        return (
          <div
            key={`art-gallery-${indexOfRenderingArr}`}
            className="gallery-container"
          >
            {arr.map((item) => {
              galleryItemRender(item, i);
              i++;
              if (!galleryItem.imageItem) {
                return (
                  <div
                    key={galleryItem.nameItem}
                    className={`item-without-pic ${galleryItem.classItem}`}
                  >
                    <p>{galleryItem.nameItem}</p>
                  </div>
                );
              } else {
                let myLink = pathsToArtItem(item);
                return (
                  <Link
                    key={galleryItem.nameItem}
                    className={`gallery-item ${galleryItem.classItem}`}
                    to={myLink.fullPathArt}
                  >
                    <div>
                      <div className="item-img">
                        <img
                          src={galleryItem.imageItem}
                          alt={galleryItem.nameItem}
                        />
                      </div>
                      <p>
                        {galleryItem.artist} <br /> {galleryItem.nameItem}
                      </p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        );
      })}
    </main>
  );
};

export default Art;
