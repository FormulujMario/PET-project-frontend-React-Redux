import BackToTop from "../buttons/BackToTop.js";
import Subscribe from "./Subscribe.js";
import MainLinks from "./MainLinks.js";

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
