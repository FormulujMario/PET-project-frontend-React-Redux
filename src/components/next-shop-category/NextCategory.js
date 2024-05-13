import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./NextCategory.css";

const NextCategory = () => {
  const [nextCategoryButtonTitle, setnextCategoryButtonTitle] =
    useState("BEERS");
  const changeCategory = (event) => {
    const allTabs = Array(
      ...document.querySelectorAll(".shop-section .tab-buttons a")
    );
    const inactiveCategories = allTabs.filter((element) => {
      return element.ariaSelected === "false" && element.innerText !== "ALL";
    });
    const buttonTitle = event.currentTarget.querySelector("button").innerText;
    const selectedCategory = inactiveCategories.filter((element) => {
      return element.innerText === buttonTitle;
    })[0];
    selectedCategory.click();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const next = inactiveCategories.filter((element) => {
      return element.innerText !== buttonTitle;
    });
    const randomIndex = Math.floor(Math.random() * next.length);
    const randomElement = next[randomIndex].innerText;
    setnextCategoryButtonTitle((currentValue) => {
      return (currentValue = randomElement);
    });
  };
  return (
    <section className="next-shop-category" onClick={changeCategory}>
      <img src="../pics/Beers.png" alt="" />
      <div className="next-shop-category-title">
        <button className="next-shop-category-button">
          {nextCategoryButtonTitle}
          <BsArrowRight />
        </button>
      </div>
    </section>
  );
};

export default NextCategory;
