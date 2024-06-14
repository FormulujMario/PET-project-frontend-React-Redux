import NormalWhiteButton from "./buttons/NormalWhiteButton";
import { BsArrowUpRight } from "react-icons/bs";

function LinkToAboutUs() {
  return (
    <section className="link-to-about-us">
      <div className="section-title">
        <h2>
          BEER CREATES
          <br />
          GREAT EXCITEMENT
        </h2>
      </div>
      <img
        src={
          process.env.REACT_APP_IMAGES_PATH + "/link-to-about-us-main-page.png"
        }
        alt=""
        loading="lazy"
      />
      <div className="align-right">
        <p>
          We are searching for new and unusual tastes, while aiming to offer the
          highest quality craft beers from the selected ingredients, thus we
          have created Kabinet Brewery.
        </p>
        <NormalWhiteButton
          text="ABOUT US"
          icon={<BsArrowUpRight />}
          href="/about"
        />
      </div>
    </section>
  );
}

export default LinkToAboutUs;
