import "./NormalWhiteButton.css";

function NormalWhiteButton({ text, icon, click, isHidden }) {
  return (
    <button
      className="normal-button white-button"
      style={{ display: isHidden }}
      onClick={click}
    >
      {text}
      {icon}
    </button>
  );
}

export default NormalWhiteButton;
