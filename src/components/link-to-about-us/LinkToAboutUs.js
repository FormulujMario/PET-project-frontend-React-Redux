import NormalWhiteButton from "../buttons/NormalWhiteButton";
import { BsArrowUpRight } from "react-icons/bs";
import "./LinkToAboutUs.css";

function LinkToAboutUs() {
  return (
    <section class="link-to-about-us">
      <div class="section-title">
        <h2>
          BEER CREATES
          <br />
          GREAT EXCITEMENT
        </h2>
      </div>
      <img src="../pics/link-to-about-us-main-page.png" alt="" />
      <div class="align-right">
        <p>
          We are searching for new and unusual tastes, while aiming to offer the
          highest quality craft beers from the selected ingredients, thus we
          have created Kabinet Brewery.
        </p>
        {NormalWhiteButton("ABOUT US", <BsArrowUpRight />)}
      </div>
    </section>
  );
}

export default LinkToAboutUs;
