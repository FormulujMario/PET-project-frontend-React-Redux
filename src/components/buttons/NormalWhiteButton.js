import { Button } from "antd";
import { Link } from "react-router-dom";

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
      <div className="cont">
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
      </div>
    </Link>
  );
};

export default NormalWhiteButton;
