import { Button } from "antd";
import { Link } from "react-router-dom";

function NormalWhiteButtonWithoutBorder({ text, icon, link }) {
  return (
    <Link to={link}>
      <Button
        className="white-button-without-border"
        type="primary"
      >
        {text}
        {icon}
      </Button>
    </Link>
  );
}

export default NormalWhiteButtonWithoutBorder;
