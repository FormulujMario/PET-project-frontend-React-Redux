import NormalWhiteButton from "./NormalWhiteButton.js";
import { BsArrowRight } from "react-icons/bs";

const ShowFilters = ({
  isHidden,
  filtersButtonTitle,
  setfiltersButtonTitle,
  setFilters,
}) => {
  const openFilters = () => {
    setfiltersButtonTitle((currentValue) => {
      return currentValue === "SHOW FILTERS" ? "HIDE FILTERS" : "SHOW FILTERS";
    });
    setFilters((currentValue) => {
      return currentValue === "block" ? "none" : "block";
    });
  };

  return (
    <NormalWhiteButton
      text={filtersButtonTitle}
      icon={<BsArrowRight />}
      click={openFilters}
      isHidden={isHidden}
    />
  );
};
export default ShowFilters;
