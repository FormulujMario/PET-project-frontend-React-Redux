import NormalTransparentButton from "./buttons/NormalTransparentButton.js";
import NormalWhiteButtonWithoutBorder from "./buttons/NormalWhiteButtonWithoutBorder.js";

const KabinetLounge = () => {
  return (
    <section className="trip-to-kabinet-lounge">
      <img
        src={process.env.REACT_APP_IMAGES_PATH + "/trip-to-kabinet-lounge.png"}
        alt="trip to kabinet lounge background"
        loading="lazy"
      />
      <div className="kabinet-lounge-title">
        <div className="title">
          <h2>
            KABINET LOUNGE
            <br />A PLACE FOR ALL
            <br />
            THE SENSES
          </h2>
        </div>
        <div className="description">
          <p>
            While your imagination flourishes, the flavors inspire you to try
            one of over 20 unique beers. On top of that, experience slowly
            cooked dishes, with the stamp of our experienced chef Max.
          </p>
          <div className="buttons">
            <NormalTransparentButton text="VIEW MORE" link="/contacts" />
            <NormalWhiteButtonWithoutBorder text="ONLINE RESERVATION" link="/contacts" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KabinetLounge;
