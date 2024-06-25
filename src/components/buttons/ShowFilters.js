import { useDispatch, useSelector } from "react-redux";
import { filtersToggle } from "../../store/FiltersSlice.js";
import NormalWhiteButton from "./NormalWhiteButton.js";
import { BsArrowRight } from "react-icons/bs";

const ShowFilters = () => {
  const buttonVisibility = useSelector(
    (state) => state.activeCategoryReducer.visible
  );
  const filtersButtonTitle = useSelector(
    (state) => state.filtersReducer.filtersButtonTitle
  );
  const openFiltersDispatch = useDispatch();
  return (
    <NormalWhiteButton
      text={filtersButtonTitle}
      icon={<BsArrowRight />}
      click={() => {
        openFiltersDispatch(filtersToggle());
      }}
      isHidden={buttonVisibility}
    />
  );
};
export default ShowFilters;
