import NormalWhiteButton from "./NormalWhiteButton.js";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const ShowFilters = () => {
  const activeCategoryContextButton = useSelector(
    (state) => state.activeCategoryReducer.visible
  );
  const filtersButtonTitleContext = useSelector(
    (state) => state.filtersButtonReducer.filtersButtonTitle
  );
  const openFiltersDispatch = useDispatch();
  return (
    <NormalWhiteButton  
      text={filtersButtonTitleContext}
      icon={<BsArrowRight />}
      click={() => {
        openFiltersDispatch({ type: filtersButtonTitleContext });
      }}
      isHidden={activeCategoryContextButton}
    />
  );
};
export default ShowFilters;
