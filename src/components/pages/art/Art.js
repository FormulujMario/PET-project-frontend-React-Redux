import { Link } from "react-router-dom";
import PageTitle from "../../PageTitle";
import { GALLERY} from "../../constants";
import "./Art.css";

const Art = () => { 
  const pathsToArtItem = (item) => {
    let fullPathArt =
      "/art/" +
      item.artist
        .toLowerCase()
        .replace(/[^\w ]/g, "")
        .replace(/\s+/g, " ")
        .replace(/\s/g, "-") +
      "-" +
      item.name
        .toLowerCase()
        .replace(/[^\w ]/g, "")
        .replace(/\s+/g, " ")
        .replace(/\s/g, "-");

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
    if (classesArr[ind]) {
      galleryItem = {
        classItem: classesArr[ind],
        nameItem: item.name,
        imageItem: item.img,
        artist: item.artist,
      };
    } else {
      i = 0;
      galleryItem = {
        classItem: classesArr[i],
        nameItem: item.name,
        imageItem: item.img,
        artist: item.artist,
        element: item.element,
      };
    }
    return galleryItem;
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

  return (
    <main>
      <PageTitle title="ART GALLERY" />
      {arrForRender.map((arr) => {
        return (
          <div className="gallery-container">
            {arr.map((item) => {
              galleryItemRender(item, i);
              i++;
              {
                if (!galleryItem.imageItem) {
                  let myLink = pathsToArtItem(item);
                  return (
                    <div
                      className={`gallery-item ${galleryItem.classItem} gallery-item-without-pic`}
                      href={myLink.fullPathArt}
                    >
                      <p>{galleryItem.nameItem}</p>
                    </div>
                  );
                } else {
                  let myLink = pathsToArtItem(item);

                  return (
                    <Link
                      className={`gallery-item ${galleryItem.classItem}`}
                      to={myLink.fullPathArt}
                    >
                      <div>
                        <div className="gallery-item-img">
                          <img src={galleryItem.imageItem} alt="" />
                        </div>
                        <p>
                          {galleryItem.artist} <br /> {galleryItem.nameItem}
                        </p>
                      </div>
                    </Link>
                  );
                }
              }
            })}
          </div>
        );
      })}
    </main>
  );
};

export default Art;
