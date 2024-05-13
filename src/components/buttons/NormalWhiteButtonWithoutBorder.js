import "./NormalWhiteButtonWithoutBorder.css";

function NormalWhiteButtonWithoutBorder({ text, icon }) {
  return (
    <button className="normal-button white-button-without-border">
      {text}
      {icon}
    </button>
  );
}

export default NormalWhiteButtonWithoutBorder;
