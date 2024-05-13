import NormalWhiteButton from "./NormalWhiteButton.js";
import { BsArrowRight } from "react-icons/bs";
import { useActiveCategoryContext } from "../../contexts/ActiveCategoryContext.js";
import { useProductsContext } from "../../contexts/ProductsContext.js";

const ShowFilters = () => {
  const showFiltersSectionContext = useProductsContext();
  const activeCategoryContext = useActiveCategoryContext();
  return (
    <NormalWhiteButton
      text={showFiltersSectionContext[1].filtersState.filtersButtonTitle}
      icon={<BsArrowRight />}
      click={showFiltersSectionContext[1].openFilters}
      isHidden={activeCategoryContext.activeState.visible}
    />
  );
};
export default ShowFilters;