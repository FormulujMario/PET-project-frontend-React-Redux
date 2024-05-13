import './NormalWhiteButton.css'

function NormalWhiteButton(text, icon) {
  return (
    <button className="normal-button white-button">
      {text}
      {icon}
    </button>
  );
}

export default NormalWhiteButton;
