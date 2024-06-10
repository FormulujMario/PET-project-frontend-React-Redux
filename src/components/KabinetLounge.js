import NormalTransparentButton from "./buttons/NormalTransparentButton.js";
import NormalWhiteButtonWithoutBorder from "./buttons/NormalWhiteButtonWithoutBorder.js";

const KabinetLounge = () => {
  return (
    <section class="trip-to-kabinet-lounge">
      <img
        src={process.env.REACT_APP_IMAGES_PATH + "/trip-to-kabinet-lounge.png"}
        alt=""
        loading="lazy"
      />
      <div class="kabinet-lounge-title">
        <div class="title">
          <h2>
            KABINET LOUNGE
            <br />A PLACE FOR ALL
            <br />
            THE SENSES
          </h2>
        </div>
        <div class="description">
          <p>
            While your imagination flourishes, the flavors inspire you to try
            one of over 20 unique beers. On top of that, experience slowly
            cooked dishes, with the stamp of our experienced chef Max.
          </p>
          <div class="buttons">
            <NormalTransparentButton text="VIEW MORE" link="/contacts" />
            <NormalWhiteButtonWithoutBorder text="ONLINE RESERVATION" link="/contacts" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KabinetLounge;
