import { Link } from "react-router-dom";
import { Button } from "antd";

const NormalWhiteButton = ({
  text,
  icon,
  click,
  isHidden = false,
  href,
  iconPosition = "end",
}) => {
  return (
    <Link to={href}>
      <Button
        className="white-button"
        type="primary"
        style={{ display: isHidden }}
        icon={icon}
        onClick={click}
        iconPosition={iconPosition}
      >
        {text}
      </Button>
    </Link>
  );
};

export default NormalWhiteButton;
