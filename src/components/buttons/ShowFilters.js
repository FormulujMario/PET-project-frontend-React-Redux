import NormalWhiteButton from "./NormalWhiteButton.js";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const ShowFilters = () => {
  const buttonVisibility = useSelector(
    (state) => state.activeCategoryReducer.visible
  );
  const filtersButtonTitle = useSelector(
    (state) => state.filtersButtonReducer.filtersButtonTitle
  );
  const openFiltersDispatch = useDispatch();
  return (
    <NormalWhiteButton
      text={filtersButtonTitle}
      icon={<BsArrowRight />}
      click={() => {
        openFiltersDispatch({ type: filtersButtonTitle });
      }}
      isHidden={buttonVisibility}
    />
  );
};
export default ShowFilters;
