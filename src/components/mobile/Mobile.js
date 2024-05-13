import { BsLaptop } from "react-icons/bs";
import "./Mobile.css";

const Mobile = () => {
  return (
    <div className="mobile-modal">
      <div className="mobile-title">
        <div>
          This is the desktop version of the website. Please use another device
          <br />
          <br />
          <BsLaptop />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
