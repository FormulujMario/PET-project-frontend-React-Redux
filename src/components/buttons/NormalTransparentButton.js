import { Link } from "react-router-dom";

function NormalTransparentButton({ text, icon, link }) {
  return (
    <Link to={link}>
      <button className="transparent-button">
        {text}
        {icon}
      </button>
    </Link>
  );
}

export default NormalTransparentButton;
