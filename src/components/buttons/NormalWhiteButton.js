import "./NormalWhiteButton.css";
import { Link } from "react-router-dom";

function NormalWhiteButton({ text, icon, click, isHidden, href, iconInFront }) {
  const isIconInFront = () => {
    if (iconInFront) {
      return (
        <>
          {icon}
          {text}
        </>
      );
    }
    return (
      <>
        {text}
        {icon}
      </>
    );
  };
  return (
    <Link to={href}>
      <button
        className="normal-button white-button"
        style={{ display: isHidden }}
        onClick={click}
      >
        {isIconInFront()}
      </button>
    </Link>
  );
}

export default NormalWhiteButton;
