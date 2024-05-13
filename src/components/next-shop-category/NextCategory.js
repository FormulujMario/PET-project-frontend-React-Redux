import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FOOTER_MENU_LIST } from "../constants";
import "./NextCategory.css";

const NextCategory = () => {
  const currentUrl = window.location.pathname
    .slice(6)
    .toUpperCase()
    .replace(/-/g, " ");
  const shopArr = FOOTER_MENU_LIST[0].list
    .map((element) => {
      return element.name;
    })
    .filter((element) => {
      return (
        element !== "ALL" &&
        element !== currentUrl &&
        element !== "TERMS OF SERVICE" &&
        element !== "REFUND POLICY"
      );
    });
  const randomIndex = Math.floor(Math.random() * shopArr.length);
  const firstButtonTitle = shopArr[randomIndex];
  const [nextCategoryButtonTitle, setnextCategoryButtonTitle] =
    useState(firstButtonTitle);

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
