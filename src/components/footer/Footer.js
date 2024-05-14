import BackToTop from "../buttons/BackToTop.js";
import Subscribe from "./subscribe/Subscribe.js";
import MainLinks from "./main-links/MainLinks.js";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <BackToTop />
      <section className="footer-main">
        <Subscribe />
        <MainLinks />
        <section className="developed-by">
          <span>© 2022 kabinet brewery</span>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
