import "./NormalTransparentButton.css";

function NormalTransparentButton({ text, icon }) {
  return (
    <button className="normal-button transparent-button">
      {text}
      {icon}
    </button>
  );
}

export default NormalTransparentButton;
