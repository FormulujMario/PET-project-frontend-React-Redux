import { Link } from "react-router-dom";

function NormalWhiteButtonWithoutBorder({ text, icon, link }) {
  return (
    <Link to={link}>
    <button className="white-button-without-border">
      {text}
      {icon}
    </button>
    </Link>
  );
}

export default NormalWhiteButtonWithoutBorder;
