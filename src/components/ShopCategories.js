import ShopSlider from "./slider/ShopSlider.js";

const ShopCategories = ({ categories, show, sliderParams }) => {
  return Array.isArray(categories) ? (
    categories.map((element) => {
      return element.show.length === 0 ? (
        <p>No such products</p>
      ) : (
        <ShopSlider
          list={element.show}
          title={element.category}
          sliderParams={element.sliderParams}
        />
      );
    })
  ) : { show }.show.length === 0 ? (
    <p>No such products</p>
  ) : (
    <ShopSlider list={show} sliderParams={sliderParams} title={categories} />
  );
};

export default ShopCategories;
