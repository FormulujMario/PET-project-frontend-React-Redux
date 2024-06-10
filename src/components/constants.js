import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import ShopItem from "./pages/ShopItem.js";
import About from "./pages/About.js";
import Art from "./pages/Art.js";
import ArtItem from "./pages/ArtItem.js";
import News from "./pages/News.js";
import Contacts from "./pages/Contacts.js";

const imgsPath = process.env.REACT_APP_IMAGES_PATH;
export const ghPagesPath = process.env.REACT_APP_GHPAGES_PATH;
// ======================= Menu header =======================
export const MENU_LIST = [
  { name: "HOME", link: "/", element: <Home /> },
  {
    name: "SHOP",
    link: "/shop",
    element: <Shop activeKey="ALL" filterButton={"none"} />,
  },
  { name: "ABOUT", link: "/about", element: <About /> },
  { name: "ART", link: "/art", element: <Art /> },
  { name: "NEWS", link: "/news", element: <News /> },
  { name: "CONTACT", link: "/contacts", element: <Contacts /> },
];
// ======================= Index page =======================
export const BESTSELLERS_LIST = [
  {
    name: "Super nova",
    price: "230 RSD",
    description: "IPA / abv 5.0% / ibu 26 / 0.33l",
    img: imgsPath + "/SuperNova.png",
    path: "/shop-beers/super-nova",
  },
  {
    name: "Lutka",
    price: "230 RSD",
    description: "IPA / abv 4.7% / ibu 15 / 0.33l",
    img: imgsPath + "/Lutka.png",
    path: "/shop-beers/lutka",
  },
  {
    name: "Plavo",
    price: "230 RSD",
    description: "IPA / abv 6.2% / ibu 26 / 0.33l",
    img: imgsPath + "/Plavo.png",
    path: "/shop-beers/plavo",
  },
  {
    name: "Porter",
    price: "235 RSD",
    description: "IPA / abv 6.0% / ibu 30 / 0.33l",
    img: imgsPath + "/Porter.png",
    path: "/shop-beers/porter",
  },
  {
    name: "Plavo",
    price: "230 RSD",
    description: "IPA / abv 6.2% / ibu 26 / 0.33l",
    img: imgsPath + "/Plavo.png",
    path: "/shop-beers/plavo",
  },
  {
    name: "Porter",
    price: "235 RSD",
    description: "IPA / abv 6.0% / ibu 30 / 0.33l",
    img: imgsPath + "/Porter.png",
    path: "/shop-beers/porter",
  },
];
export const KABINET_PRODUCTS_BEERS_LIST = [
  {
    name: "Disko",
    price: "255 RSD",
    description: "IPA / abv 5.6% / ibu 40 / 0.33l",
    img: imgsPath + "/Disko.png",
    path: "/shop-beers/disko",
  },
  {
    name: "Konfuzije",
    price: "260 RSD",
    description: "lager / abv 6.3% / ibu 60 / 0.33l",
    img: imgsPath + "/Konfuzije.png",
    path: "/shop-beers/konfuzije",
  },
  {
    name: "Trag",
    price: "230 RSD",
    description: "Ale / abv 4.7 %% / ibu 15 / 0.33l",
    img: imgsPath + "/Trag.png",
    path: "/shop-beers/trag",
  },
  {
    name: "Shop now",
    img: imgsPath + "/shop-now.png",
  },
];
export const KABINET_PRODUCTS_MERCH_LIST = [
  {
    name: "Kabinet",
    price: "1200 RSD",
    description: "T-shirt",
    img: imgsPath + "/kabinet-t-short.png",
    path: "/shop-merch/kabinet",
  },
  {
    name: "BrrKaaa",
    price: "350 RSD",
    description: "Tote bag",
    img: imgsPath + "/BrrKaaa-bag.png",
    path: "/shop-merch/brrKaaa",
  },
  {
    name: "Lutka",
    price: "350 RSD",
    description: "Tote bag",
    img: imgsPath + "/Lutka-bag.png",
    path: "/shop-merch/lutka",
  },
  {
    name: "Shop now",
    img: imgsPath + "/shop-now.png",
  },
];
export const KABINET_PRODUCTS_PIVOLADA_LIST = [
  {
    name: "BrrKaaa",
    price: "350 RSD",
    description: "Citrus / 0.25l",
    img: imgsPath + "/BrrKaaa-pivolada.png",
    path: "/shop-pivolada/brrkaaa",
  },
  {
    name: "Plavo",
    price: "350 RSD",
    description: "Floral / 0.25l",
    img: imgsPath + "/Plavo-pivolada.png",
    path: "/shop-pivolada/plavo",
  },
  {
    name: "Porter",
    price: "350 RSD",
    description: "Chocolate / 0.25l",
    img: imgsPath + "/Porter-pivolada.png",
    path: "/shop-pivolada/porter",
  },
  {
    name: "Shop now",
    img: imgsPath + "/shop-now.png",
  },
];
export const NEWS_LIST = [
  {
    date: "03 mar 2022",
    title: "Spring is almost here, it is the time for discounts!",
    imgSmall: "pics/news/2022-03-03-Spring.png",
    imgBig: "",
  },
  {
    date: "02 FeB 2022",
    title: "Seventh Birthday Kabinet Brewery!",
    imgSmall: "",
    imgBig: "pics/news/2022-02-02-Birthday.png",
  },
  {
    date: "02 FeB 2022",
    title: "III birthday of our bread with wild yeast!",
    imgSmall: "pics/news/2022-05-05-Birthday.png",
    imgBig: "",
  },
];
// ======================= Footer =======================
export const FOOTER_MENU_LIST = [
  {
    name: "SHOP",
    list: [
      {
        name: "ALL",
        link: "/shop",
        activeKey: "ALL",
        filterButton: "none",
        element: <Shop />,
      },
      {
        name: "BEER PACKS",
        link: "/shop",
        activeKey: "BEER-PACKS",
        filterButton: "block",
        element: <Shop />,
      },
      {
        name: "BEERS",
        link: "/shop",
        activeKey: "BEERS",
        filterButton: "block",
        element: <Shop />,
      },
      {
        name: "PIVOLADA",
        link: "/shop",
        activeKey: "PIVOLADA",
        filterButton: "block",
        element: <Shop />,
      },
      {
        name: "MERCH",
        link: "/shop",
        activeKey: "MERCH",
        filterButton: "block",
        element: <Shop />,
      },
      { name: "TERMS OF SERVICE", link: "", element: "" },
      { name: "REFUND POLICY", link: "", element: "" },
    ],
  },
  {
    name: "ABOUT US",
    list: [
      { name: "ABOUT", link: "/about", element: <About /> },
      { name: "ART", link: "/art", element: <Art /> },
      { name: "NEWS", link: "/news", element: <News /> },
    ],
  },
  {
    name: "HELP",
    list: [
      { name: "CONTACT", link: "/contacts", element: <Contacts /> },
      { name: "SHIPPING", link: "", element: "" },
      { name: "RETURNED", link: "", element: "" },
      { name: "TERMS & CONDITIONS", link: "", element: "" },
      { name: "PRIVACY POLICY", link: "", element: "" },
    ],
  },
];
export const SOC_NET_ICONS = [
  {
    name: "Facebook",
    svg: <FaFacebookF />,
    link: "",
  },
  {
    name: "Instagram",
    svg: <FaInstagram />,
    link: "",
  },
  {
    name: "Twitter",
    svg: <FaTwitter />,
    link: "",
  },
  {
    name: "LinkedIn",
    svg: <FaLinkedinIn />,
    link: "",
  },
];
// ======================= Shop main page =======================
export const SHOP_MAIN_BEERS_LIST = [
  {
    name: "Super nova",
    price: 230,
    canPrice: 200,
    currency: "RSD",
    style: "ipa",
    alcohol: 5.0,
    alcoholFilter: "zero-five",
    color: 26,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/SuperNova.png",
    canImg: imgsPath + "/SuperNovaCan.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2020-09-07 03:42:05"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Lutka",
    price: 230,
    canPrice: 200,
    currency: "RSD",
    style: "ipa",
    alcohol: 4.7,
    alcoholFilter: "zero-five",
    color: 15,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Lutka.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-02-19 06:05:38"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Plavo",
    price: 230,
    canPrice: 200,
    currency: "RSD",
    style: "ipa",
    alcohol: 6.2,
    alcoholFilter: "five-seven",
    color: 26,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Plavo.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2022-12-03 08:01:07"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Porter",
    price: 235,
    canPrice: 200,
    currency: "RSD",
    style: "ipa",
    alcohol: 6.0,
    alcoholFilter: "five-seven",
    color: 30,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Porter.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-02-18 12:12:48"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Disko",
    price: 255,
    canPrice: 200,
    currency: "RSD",
    style: "ipa",
    alcohol: 5.6,
    alcoholFilter: "five-seven",
    color: 40,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Disko.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-07-06 12:11:23"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Konfuzije",
    price: 260,
    canPrice: 200,
    currency: "RSD",
    style: "lager",
    alcohol: 6.3,
    alcoholFilter: "five-seven",
    color: 60,
    colorFilter: "over-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Konfuzije.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2022-08-17 01:57:37"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Trag",
    price: 230,
    canPrice: 200,
    currency: "RSD",
    style: "ale",
    alcohol: 4.7,
    alcoholFilter: "zero-five",
    color: 15,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Trag.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-05-25 01:07:53"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Pixie Dust",
    price: 240,
    canPrice: 200,
    currency: "RSD",
    style: "sour",
    alcohol: 4.3,
    alcoholFilter: "zero-five",
    color: 30,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Pixie-Dust.png",
    canImg: imgsPath + "/PixieDustCan.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-05-27 06:37:55"),
    element: <ShopItem />,
    description:
      "Oatmeal stout with vanilla and cinnamon. Wash away all your troubles with our delicious Pixie dust. Sprinkle more for better results.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Bang",
    price: 250,
    canPrice: 200,
    currency: "RSD",
    style: "ipa",
    alcohol: 4.6,
    alcoholFilter: "zero-five",
    color: 40,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Bang.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-10-20 10:56:23"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Carica",
    price: 250,
    canPrice: 200,
    currency: "RSD",
    style: "sour",
    alcohol: 9.5,
    alcoholFilter: "over-seven",
    color: 60,
    colorFilter: "over-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Carica.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-09-13 15:40:08"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "Hop Stew",
    price: 245,
    canPrice: 200,
    currency: "RSD",
    style: "ale",
    alcohol: 4.9,
    alcoholFilter: "zero-five",
    color: 20,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/Hop-Stew.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-01-02 17:42:38"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
  {
    name: "MiLLe",
    price: 240,
    canPrice: 200,
    currency: "RSD",
    style: "sour",
    alcohol: 5.0,
    alcoholFilter: "zero-five",
    color: 30,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: imgsPath + "/MiLLe.png",
    canImg: "",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2019-10-03 10:42:00"),
    element: <ShopItem />,
    description:
      "Basket full of fruits whose flavors explode and spill over when you approach. Be ready to fly away, on a bed of melons, mangoes and tangerines. The first Serbian IPA, voted the best beer in 2014.",
    ingredients: "Water, barley malt, yeast, hops.",
    nutrition: {
      "Energy (kcal)": {
        "Per 100mls": 43,
        "Per 330mls": 141.9,
      },
      "Carbohydrates (g)": {
        "Per 100mls": 3.55,
        "Per 330mls": 11.71,
      },
      "Magnesium (mg)": {
        "Per 100mls": 6,
        "Per 330mls": 19.8,
      },
      "Sodium (mg)": {
        "Per 100mls": 4,
        "Per 330mls": 13.2,
      },
      "Proteins (g)": {
        "Per 100mls": 0.46,
        "Per 330mls": 1.52,
      },
    },
  },
];
export const SHOP_MAIN_BEER_PACKS_LIST = [
  {
    name: "Kabinet",
    price: 1450,
    currency: "RSD",
    description: "6x0.33l",
    quantityFilter: "six",
    img: imgsPath + "/Kabinet.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2019-10-03 10:42:00"),
    element: <ShopItem />,
  },
  {
    name: "Nature & society",
    price: 1050,
    currency: "RSD",
    description: "4x0.33l",
    quantityFilter: "four",
    img: imgsPath + "/NatureSociety.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2020-10-03 10:42:00"),
    element: <ShopItem />,
  },
  {
    name: "Hold me tender…",
    price: 230,
    currency: "RSD",
    description: "4x0.33l",
    quantityFilter: "four",
    img: imgsPath + "/HoldMeTender.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-10-03 10:42:00"),
    element: <ShopItem />,
  },
];
export const SHOP_MAIN_PIVOLADA_LIST = [
  {
    name: "BrrKaaa",
    price: 350,
    currency: "RSD",
    description: "Citrus / 0.25l",
    img: imgsPath + "/BrrKaaa-pivolada.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2019-10-03 10:42:00"),
    element: <ShopItem />,
  },
  {
    name: "Plavo",
    price: 350,
    currency: "RSD",
    description: "Floral / 0.25l",
    img: imgsPath + "/Plavo-pivolada.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-10-03 10:42:00"),
    element: <ShopItem />,
  },
  {
    name: "Porter",
    price: 350,
    currency: "RSD",
    description: "Chocolate / 0.25l",
    img: imgsPath + "/Porter-pivolada.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2020-10-03 10:42:00"),
    element: <ShopItem />,
  },
];
export const SHOP_MAIN_MERCH_LIST = [
  {
    name: "Kabinet",
    price: 1200,
    currency: "RSD",
    description: "T-shirt",
    img: imgsPath + "/kabinet-t-short.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2019-10-03 10:42:00"),
    element: <ShopItem />,
  },
  {
    name: "BrrKaaa",
    price: 350,
    currency: "RSD",
    description: "Tote bag",
    img: imgsPath + "/BrrKaaa-bag.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2017-10-03 10:42:00"),
    element: <ShopItem />,
  },
  {
    name: "Lutka",
    price: 350,
    currency: "RSD",
    description: "Tote bag",
    img: imgsPath + "/Lutka-bag.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-10-03 10:42:00"),
    element: <ShopItem />,
  },
];
// ======================= Shop filters =======================
export const SORT_BY = [
  {
    property: "Popularity",
    className: "popularity",
    connectedTo: "popularity",
  },
  {
    property: "Average rating",
    className: "average-rating",
    connectedTo: "averageRating",
  },
  { property: "Newness", className: "newness", connectedTo: "added" },
  {
    property: "Low to high price",
    className: "low-to-high-price",
    connectedTo: "price",
  },
  {
    property: "High to low price",
    className: "high-to-low-price",
    connectedTo: "price",
  },
];
export const STYLE = [
  {
    id: "ale",
    name: "Ale",
  },
  {
    id: "lager",
    name: "Lager",
  },
  {
    id: "ipa",
    name: "Ipa",
  },
  {
    id: "sour",
    name: "Sour",
  },
  {
    id: "dark",
    name: "Dark",
  },
  {
    id: "lable",
    name: "Lable",
  },
  {
    id: "herb-spice-fruit",
    name: "Herb/Spice/Fruit",
  },
  {
    id: "hoppy",
    name: "Hoppy",
  },
];

export const ALCOHOL = [
  {
    id: "zero-five",
    name: "0% - 5%",
  },
  {
    id: "five-seven",
    name: "5% - 7%",
  },
  {
    id: "over-seven",
    name: "Over 7%",
  },
];
export const COLOR = [
  {
    id: "to-fifteen-ebc",
    name: "To 15 EBC",
  },
  {
    id: "fifteen-fourty-ebc",
    name: "15 - 40 EBC",
  },
  {
    id: "over-fourty-ebc",
    name: "Over 40 EBC",
  },
];
export const QUANTITY = [
  {
    id: "four",
    name: 4,
  },
  {
    id: "six",
    name: 6,
  },
];
// ======================= Awards ========================
export const dataSource = [
  {
    key: "Best Brewmaster in Serbia - 2020",
    year: "2020",
    award: "Best Brewmaster in Serbia",
    company: "Ratebeer",
  },
  {
    key: "Best beer in Serbia - 2020-2016",
    year: "2020-2016",
    award: "Best beer in Serbia",
    company: "Ratebeer",
  },
  {
    key: "Best Brewery in Serbia - 2016",
    year: "2016",
    award: "Best Brewery in Serbia",
    company: "Ratebeer",
  },
  {
    key: "Best Entrepreneur of the Year- nominee 2016",
    year: "2016",
    award: "Best Entrepreneur of the Year- nominee 2016",
    company: "Ernst & Young",
  },
  {
    key: "for the most successful start up in 2016",
    year: "2016",
    award: "for the most successful start up in 2016",
    company: "Serbian Chamber of Commerce",
  },
  {
    key: "Grand prix for the best packaging in Serbia - 2015-2014",
    year: "2015-2014",
    award: "Grand prix for the best packaging in Serbia",
    company: "Pactivity",
  },
];

export const columns = [
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
  },
  {
    title: "Award",
    dataIndex: "award",
    key: "award",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
];
// ======================= Gallery =======================
export const QUESTIONS = [
  "KB: What are the motives for creating this design?",
  "KB: What was your initial inspiration?",
  "KB: Was it the taste of the beer that defined design of the label?",
  "KB: How does it feel like to do a design for the first Serbian craft beer?",
  "KB: Your favorite Kabinet beer?",
];
export const GALLERY = [
  {
    img: imgsPath + "/Gallery-1.png",
    artist: "Margareta Nedeljkovic,",
    name: "Akrobata",
    element: <ArtItem />,
    interview: [
      "SS: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "SS: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "SS: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "SS: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "SS: Vertigo.",
    ],
    description:
      "Akrobata is illustrated by Margareta Nedeljkovic who has more than 200 international awards and whose works are part of collections in several museums. She worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Margareta's site", "her"],
  },
  {
    img: "",
    artist: "",
    name: "DISCOVER AUTHORS BEHIND OUR EVERYDAY HEROES",
  },
  {
    img: imgsPath + "/Gallery-2.png",
    artist: "Davor Gromilovic,",
    name: "SuperNova",
    element: <ArtItem />,
    interview: [
      "DG: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "DG: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "DG: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "DG: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "DG: Vertigo.",
    ],
    description:
      "SuperNova is illustrated by Davor Gromilovic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Davor's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-3.png",
    artist: "K2abinet – Kosara Dangic Melentijevic,",
    name: "You Happy Me Happy",
    element: <ArtItem />,
    interview: [
      "DM: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "DM: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "DM: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "DM: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "DM: Vertigo.",
    ],
    description:
      "You Happy Me Happy is illustrated by Kosara Dangic Melentijevic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Kosara Dangic's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-4.png",
    artist: "Slavimir Stojanovic Futro,",
    name: "Vertigo",
    element: <ArtItem />,
    interview: [
      "SS: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "SS: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "SS: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "SS: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "SS: Vertigo.",
    ],
    description:
      "Vertigo is illustrated by Slavimir Stojanovic Futro who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Slavimir's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-5.png",
    artist: "Mikkeller – Keith Shore,",
    name: "Vista II",
    element: <ArtItem />,
    interview: [
      "KS: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "KS: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "KS: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "KS: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "KS: Vertigo.",
    ],
    description:
      "Vista II is illustrated by Keith Shore who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Keith's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-6.png",
    artist: "Mikkeller – Keith Shore,",
    name: "Vista I",
    element: <ArtItem />,
    interview: [
      "KS: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "KS: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "KS: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "KS: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "KS: Vertigo.",
    ],
    description:
      "Vista I is illustrated by Keith Shore who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Keith's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-9.png",
    artist: "Mikkeller – Keith Shore,",
    name: "Vista II",
    element: <ArtItem />,
    interview: [
      "KS: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "KS: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "KS: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "KS: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "KS: Vertigo.",
    ],
    description:
      "Vista II is illustrated by Keith Shore who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Keith's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-8.png",
    artist: "Mikkeller – Keith Shore,",
    name: "Milk Stout",
    element: <ArtItem />,
    interview: [
      "KS: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "KS: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "KS: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "KS: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "KS: Vertigo.",
    ],
    description:
      "Milk Stout is illustrated by Keith Shore who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Keith's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-7.png",
    artist: "Vastag Vendel,",
    name: "red gold",
    element: <ArtItem />,
    interview: [
      "VV: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "VV: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "VV: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "VV: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "VV: Vertigo.",
    ],
    description:
      "Red Gold is illustrated by Vastag Vendel who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Vastag's site", "his"],
  },

  {
    img: imgsPath + "/Gallery-10.png",
    artist: "Nemanja Jehlicka,",
    name: "Porter",
    element: <ArtItem />,
    interview: [
      "NJ: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "NJ: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "NJ: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "NJ: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "NJ: Vertigo.",
    ],
    description:
      "Porter is illustrated by Nemanja Jehlicka who has more than 200 international awards and whose works are part of collections in several museums. She worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Nemanja's site", "her"],
  },
  {
    img: imgsPath + "/Gallery-11.png",
    artist: "jovan mikonjic,",
    name: "Plavo",
    element: <ArtItem />,
    interview: [
      "JM: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "JM: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "JM: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "JM: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "JM: Vertigo.",
    ],
    description:
      "Plavo is illustrated by Jovan Mikonjic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Jovan's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-12.png",
    artist: "Studio Metaklinika,",
    name: "Bastardo",
    element: <ArtItem />,
    interview: [
      "SM: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "SM: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "SM: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "SM: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "SM: Vertigo.",
    ],
    description:
      "Bastardo is illustrated by Studio Metaklinika who has more than 200 international awards and whose works are part of collections in several museums. They worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Studio Metaklinika's site", "their"],
  },
  {
    img: imgsPath + "/Gallery-13.png",
    artist: "Vastag Vendel,",
    name: "Passion Galore",
    element: <ArtItem />,
    interview: [
      "VV: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "VV: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "VV: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "VV: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "VV: Vertigo.",
    ],
    description:
      "Passion Galore is illustrated by Vastag Vendel who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Vastag's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-14.png",
    artist: "Dejan Micic,",
    name: "pablo",
    element: <ArtItem />,
    interview: [
      "DM: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "DM: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "DM: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "DM: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "DM: Vertigo.",
    ],
    description:
      "Pablo is illustrated by Dejan Micic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Dejan's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-15.png",
    artist: "Bratislav Milenkovic,",
    name: "Brrkaaa",
    element: <ArtItem />,
    interview: [
      "BM: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "BM: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "BM: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "BM: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "BM: Vertigo.",
    ],
    description:
      "Brrkaaa is illustrated by Bratislav Milenkovic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Bratislav's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-16.png",
    artist: "Super Timor,",
    name: "centennial",
    element: <ArtItem />,
    interview: [
      "ST: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "ST: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "ST: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "ST: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "ST: Vertigo.",
    ],
    description:
      "Centennial is illustrated by Super Timor who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Super Timor's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-17.png",
    artist: "Insomnia - Stanislav Mirkovic,",
    name: "Cassius",
    element: <ArtItem />,
    interview: [
      "SM: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "SM: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "SM: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "SM: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "SM: Vertigo.",
    ],
    description:
      "Cassius is illustrated by Stanislav Mirkovic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Stanislav's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-18.png",
    artist: "Becha – Vesna Pesic,",
    name: "Mozaik",
    element: <ArtItem />,
    interview: [
      "VP: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "VP: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "VP: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "VP: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "VP: Vertigo.",
    ],
    description:
      "Mozaik is illustrated by Vesna Pesic who has more than 200 international awards and whose works are part of collections in several museums. She worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Vesna's site", "her"],
  },
  {
    img: imgsPath + "/Gallery-19.png",
    artist: "Valentina Brkovic,",
    name: "Melissa in Wonderland",
    element: <ArtItem />,
    interview: [
      "VB: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "VB: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "VB: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "VB: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "VB: Vertigo.",
    ],
    description:
      "Melissa in Wonderland is illustrated by Valentina Brkovic who has more than 200 international awards and whose works are part of collections in several museums. She worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Valentina's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-20.png",
    artist: "Story Line,",
    name: "Carnival",
    element: <ArtItem />,
    interview: [
      "SL: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "SL: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "SL: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "SL: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "SL: Vertigo.",
    ],
    description:
      "Carnival is illustrated by Story Line who has more than 200 international awards and whose works are part of collections in several museums. They worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Story Line's site", "their"],
  },
  {
    img: imgsPath + "/Gallery-23.png",
    artist: "Dragoslav Malinic,",
    name: "Olga",
    element: <ArtItem />,
    interview: [
      "DM: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "DM: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "DM: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "DM: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "DM: Vertigo.",
    ],
    description:
      "Olga is illustrated by Dragoslav Malinic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Dragoslav's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-22.png",
    artist: "Jelena Sanader,",
    name: "Macedo",
    element: <ArtItem />,
    interview: [
      "JS: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "JS: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "JS: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "JS: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "JS: Vertigo.",
    ],
    description:
      "Macedo is illustrated by Jelena Sanader who has more than 200 international awards and whose works are part of collections in several museums. She worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Jelena's site", "her"],
  },
  {
    img: imgsPath + "/Gallery-21.png",
    artist: "Super Timor,",
    name: "mandarina bavaria",
    element: <ArtItem />,
    interview: [
      "ST: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "ST: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "ST: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "ST: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "ST: Vertigo.",
    ],
    description:
      "Mandarina Bavaria is illustrated by Super Timor who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Super Timor's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-24.png",
    artist: "K2abinet – Kosara Dangic Melentijevic,",
    name: "Wit",
    element: <ArtItem />,
    interview: [
      "KDM: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "KDM: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "KDM: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "KDM: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "KDM: Vertigo.",
    ],
    description:
      "Wit is illustrated by Kosara Dangic Melentijevic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Kosara's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-25.png",
    artist: "Zeljko Loncar - DayDream Studio,",
    name: "Jaffamania",
    element: <ArtItem />,
    interview: [
      "ZL: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "ZL: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "ZL: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "ZL: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "ZL: Vertigo.",
    ],
    description:
      "Jaffamania is illustrated by Zeljko Loncar Melentijevic who has more than 200 international awards and whose works are part of collections in several museums. He worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Zeljko's site", "his"],
  },
  {
    img: imgsPath + "/Gallery-26.png",
    artist: "Valentina Brostean,",
    name: "Disco",
    element: <ArtItem />,
    interview: [
      "VB: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "VB: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "VB: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "VB: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "VB: Vertigo.",
    ],
    description:
      "Disco is illustrated by Valentina Brostean Melentijevic who has more than 200 international awards and whose works are part of collections in several museums. She worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Valentina's site", "her"],
  },
  {
    img: imgsPath + "/Gallery-27.png",
    artist: "Nikola Radojcic,",
    name: "Bad Copy",
    element: <ArtItem />,
    interview: [
      "NR: Idea was that through graphical interpretation you feel the power and the quality of Vertigo beer and that the visual clearly illustrates the name of the beer.",
      "NR: Optical illusion as a synonym for dizziness, but styled in a modern and artistically unexpected way for the beer industry.",
      "NR: Of course, concrete, black and white graphic approach fully reflects the taste and the effects of the Vertigo beer.",
      "NR: Pure enjoyment, without the usual creative drama between client – designer. I have joined this project completely as an author, as if I was doing it for my own beer label that when enlarged could comfortable hang on the wall of some cool gallery.",
      "NR: Vertigo.",
    ],
    description:
      "Bad Copy is illustrated by Nikola Radojcic who has more than 200 international awards and whose works are part of collections in several museums. She worked at Saatchi & Saatchi, Compass Design, Arih Advertising, Futro Creative Service Unit, Communis DDB.",
    site: ["Nikola's site", "her"],
  },
];
// ======================= News =======================
export const NEWS = [
  {
    img: imgsPath + "/News-1.png",
    date: "02 FeB 2022",
    title: "Spring is almost here, it is the time for discounts!",
  },
  {
    bigImg: imgsPath + "/News-2.png",
    date: "02 FeB 2022",
    title: "Seventh Birthday Kabinet Brewery!",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    img: imgsPath + "/News-3.png",
    date: "02 FeB 2022",
    title: "III birthday of our bread with wild yeast",
  },
  {
    img: imgsPath + "/News-4.png",
    date: "04 may 2022",
    title: "Vegetarian crunchy Samosas – Ms Nami and Restaurant Istok",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    img: imgsPath + "/News-5.png",
    date: "04 may 2022",
    title: "Stuffed dry peppers – Homa Restaurant",
  },
  {
    img: imgsPath + "/News-6.png",
    date: "28 apr 2022",
    title: "Lentils with grilled leeks – Endorfin gastro pub",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    bigImg: imgsPath + "/News-7.png",
    date: "28 apr 2022",
    title:
      "Nachos with Guacamole & tomato salsa- Hotel Dukley Gardens, Montenegro",
  },
  {
    bigImg: imgsPath + "/News-8.png",
    date: "28 apr 2022",
    title: "Vision of a new road ahead of us- Đorđe Vasić",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    img: imgsPath + "/News-9.png",
    date: "10 apr 2022",
    title: "Creativity is a cure for this world – Tadija Janićijević",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    img: imgsPath + "/News-10.png",
    date: "10 apr 2022",
    title: "The virtual outing- Bratislav Milenković",
  },
  {
    img: imgsPath + "/News-11.png",
    date: "10 apr 2022",
    title: "Dreaming – Valentina Brostean",
  },
];
export const NEWS_NEWS = [
  {
    img: imgsPath + "/News-10.png",
    date: "10 apr 2022",
    title: "The virtual outing- Bratislav Milenković",
  },
  {
    bigImg: imgsPath + "/News-7.png",
    date: "28 apr 2022",
    title:
      "Nachos with Guacamole & tomato salsa- Hotel Dukley Gardens, Montenegro",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    img: imgsPath + "/News-3.png",
    date: "02 FeB 2022",
    title: "III birthday of our bread with wild yeast",
  },
];
export const NEWS_PRESS = [
  {
    bigImg: imgsPath + "/News-7.png",
    date: "28 apr 2022",
    title:
      "Nachos with Guacamole & tomato salsa- Hotel Dukley Gardens, Montenegro",
  },
  {
    img: imgsPath + "/News-3.png",
    date: "02 FeB 2022",
    title: "III birthday of our bread with wild yeast",
  },
  {
    img: imgsPath + "/News-1.png",
    date: "02 FeB 2022",
    title: "Spring is almost here, it is the time for discounts!",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    bigImg: imgsPath + "/News-2.png",
    date: "02 FeB 2022",
    title: "Seventh Birthday Kabinet Brewery!",
  },
];
export const NEWS_VIRTUAL = [
  {
    img: imgsPath + "/News-5.png",
    date: "04 may 2022",
    title: "Stuffed dry peppers – Homa Restaurant",
  },
  {
    img: "",
    date: "",
    title: "",
  },
  {
    img: imgsPath + "/News-3.png",
    date: "02 FeB 2022",
    title: "III birthday of our bread with wild yeast",
  },
];
export const NEWS_TRAVEL = [
  {
    img: imgsPath + "/News-9.png",
    date: "10 apr 2022",
    title: "Creativity is a cure for this world – Tadija Janićijević",
  },
  {
    img: imgsPath + "/News-4.png",
    date: "04 may 2022",
    title: "Vegetarian crunchy Samosas – Ms Nami and Restaurant Istok",
  },
  {
    bigImg: imgsPath + "/News-8.png",
    date: "28 apr 2022",
    title: "Vision of a new road ahead of us- Đorđe Vasić",
  },
];
// ======================= Contacts =======================
export const KB_CONTACTS = {
  name: "Kabinet brewery",
  email: "kabinet@kabinet.rs",
  phone: "+381 11 242 44 78",
  city: "Sopot, Serbia",
  address: "Despota Stevana Lazarevica 11.",
  zip: "11450 Nemenikuce",
};
export const KL_CONTACTS = {
  name: "Kabinet lounge",
  email: "KabinetLounge@kabinet.rs",
  phone: "+ 381 65 944 95 15",
  city: "Sopot, Serbia",
  address: "Despota Stevana Lazarevica 11.",
  zip: "11450 Nemenikuce",
};
export const OPENING_HOURS = {
  name: "Opening hours",
  days: "On Fridays, Saturdays and Sundays",
  time: "from 12:00 PM to 8:00 PM",
};
