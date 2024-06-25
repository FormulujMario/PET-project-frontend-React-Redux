const InputProductsNumber = ({
  onClickMinus,
  inputName,
  value,
  onClickPlus,
}) => {
  return (
    <div className="input-number">
      <div className="minus" onClick={onClickMinus}>
        -
      </div>
      <input
        name={inputName}
        className="input"
        type="text"
        pattern="^[0-9]+$"
        value={value}
        readOnly
      />
      <div className="plus" onClick={onClickPlus}>
        +
      </div>
    </div>
  );
};
export default InputProductsNumber;
