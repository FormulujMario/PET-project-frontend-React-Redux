import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// ======================= Menu header =======================
export const MENU_LIST = [
  { name: "SHOP", link: "./pages/shop-main.shtml" },
  { name: "ABOUT", link: "./index.shtml" },
  { name: "ART", link: "./index.shtml" },
  { name: "NEWS", link: "./index.shtml" },
  { name: "CONTACT", link: "./index.shtml" },
];
// ======================= Index page =======================
export const BESTSELLERS_LIST = [
  {
    name: "Super nova",
    price: "230 RSD",
    description: "IPA / abv 5.0% / ibu 26 / 0.33l",
    img: "../pics/SuperNova.png",
  },
  {
    name: "Lutka",
    price: "230 RSD",
    description: "IPA / abv 4.7% / ibu 15 / 0.33l",
    img: "../pics/Lutka.png",
  },
  {
    name: "Plavo",
    price: "230 RSD",
    description: "IPA / abv 6.2% / ibu 26 / 0.33l",
    img: "../pics/Plavo.png",
  },
  {
    name: "Porter",
    price: "235 RSD",
    description: "IPA / abv 6.0% / ibu 30 / 0.33l",
    img: "../pics/Porter.png",
  },
  {
    name: "Plavo",
    price: "230 RSD",
    description: "IPA / abv 6.2% / ibu 26 / 0.33l",
    img: "../pics/Plavo.png",
  },
  {
    name: "Porter",
    price: "235 RSD",
    description: "IPA / abv 6.0% / ibu 30 / 0.33l",
    img: "../pics/Porter.png",
  },
];
export const KABINET_PRODUCTS_BEERS_LIST = [
  {
    name: "Disko",
    price: "255 RSD",
    description: "IPA / abv 5.6% / ibu 40 / 0.33l",
    img: "./pics/Disko.png",
  },
  {
    name: "Konfuzije",
    price: "260 RSD",
    description: "lager / abv 6.3% / ibu 60 / 0.33l",
    img: "./pics/Konfuzije.png",
  },
  {
    name: "Trag",
    price: "230 RSD",
    description: "Ale / abv 4.7 %% / ibu 15 / 0.33l",
    img: "./pics/Trag.png",
  },
  {
    name: "Shop now",
    img: "./pics/shop-now.png",
  },
];
export const KABINET_PRODUCTS_MERCH_LIST = [
  {
    name: "Kabinet",
    price: "1200 RSD",
    description: "T-shirt",
    img: "./pics/kabinet-t-short.png",
  },
  {
    name: "BrrKaaa",
    price: "350 RSD",
    description: "Tote bag",
    img: "./pics/BrrKaaa-bag.png",
  },
  {
    name: "Lutka",
    price: "350 RSD",
    description: "Tote bag",
    img: "./pics/Lutka-bag.png",
  },
  {
    name: "Shop now",
    img: "./pics/shop-now.png",
  },
];
export const KABINET_PRODUCTS_PIVOLADA_LIST = [
  {
    name: "BrrKaaa",
    price: "350 RSD",
    description: "Citrus / 0.25l",
    img: "./pics/BrrKaaa-pivolada.png",
  },
  {
    name: "Plavo",
    price: "350 RSD",
    description: "Floral / 0.25l",
    img: "./pics/Plavo-pivolada.png",
  },
  {
    name: "Porter",
    price: "350 RSD",
    description: "Chocolate / 0.25l",
    img: "./pics/Porter-pivolada.png",
  },
  {
    name: "Shop now",
    img: "./pics/shop-now.png",
  },
];
export const NEWS_LIST = [
  {
    date: "03 mar 2022",
    title: "Spring is almost here, it is the time for discounts!",
    imgSmall: "./pics/news/2022-03-03-Spring.png",
    imgBig: "",
  },
  {
    date: "02 FeB 2022",
    title: "Seventh Birthday Kabinet Brewery!",
    imgSmall: "",
    imgBig: "./pics/news/2022-02-02-Birthday.png",
  },
  {
    date: "02 FeB 2022",
    title: "III birthday of our bread with wild yeast!",
    imgSmall: "./pics/news/2022-05-05-Birthday.png",
    imgBig: "",
  },
];
// ======================= Footer =======================
export const FOOTER_MENU_LIST = [
  {
    name: "SHOP",
    list: [
      "ALL",
      "BEER PACKS",
      "BEER",
      "PIVOLADA",
      "MERCH",
      "TERMS OF SERVICE",
      "REFUND POLICY",
    ],
  },
  {
    name: "ABOUT US",
    list: ["ABOUT", "ART", "NEWS"],
  },
  {
    name: "HELP",
    list: [
      "CONTACT",
      "SHIPPING",
      "RETURNED",
      "TERMS & CONDITIONS",
      "PRIVACY POLICY",
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
    currency: "RSD",
    style: "ipa",
    alcohol: 5.0,
    alcoholFilter: "zero-five",
    color: 26,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/SuperNova.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2020-09-07 03:42:05"),
  },
  {
    name: "Lutka",
    price: 230,
    currency: "RSD",
    style: "ipa",
    alcohol: 4.7,
    alcoholFilter: "zero-five",
    color: 15,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/Lutka.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-02-19 06:05:38"),
  },
  {
    name: "Plavo",
    price: 230,
    currency: "RSD",
    style: "ipa",
    alcohol: 6.2,
    alcoholFilter: "five-seven",
    color: 26,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/Plavo.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2022-12-03 08:01:07"),
  },
  {
    name: "Porter",
    price: 235,
    currency: "RSD",
    style: "ipa",
    alcohol: 6.0,
    alcoholFilter: "five-seven",
    color: 30,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/Porter.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-02-18 12:12:48"),
  },
  {
    name: "Disko",
    price: 255,
    currency: "RSD",
    style: "ipa",
    alcohol: 5.6,
    alcoholFilter: "five-seven",
    color: 40,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/Disko.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-07-06 12:11:23"),
  },
  {
    name: "Konfuzije",
    price: 260,
    currency: "RSD",
    style: "lager",
    alcohol: 6.3,
    alcoholFilter: "five-seven",
    color: 60,
    colorFilter: "over-fourty-ebc",
    volume: 0.33,
    img: "../pics/Konfuzije.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2022-08-17 01:57:37"),
  },
  {
    name: "Trag",
    price: 230,
    currency: "RSD",
    style: "ale",
    alcohol: 4.7,
    alcoholFilter: "zero-five",
    color: 15,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/Trag.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-05-25 01:07:53"),
  },
  {
    name: "Pixie Dust",
    price: 240,
    currency: "RSD",
    style: "sour",
    alcohol: 4.3,
    alcoholFilter: "zero-five",
    color: 30,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/Pixie-Dust.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-05-27 06:37:55"),
  },
  {
    name: "Bang",
    price: 250,
    currency: "RSD",
    style: "ipa",
    alcohol: 4.6,
    alcoholFilter: "zero-five",
    color: 40,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/Bang.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-10-20 10:56:23"),
  },
  {
    name: "Carica",
    price: 250,
    currency: "RSD",
    style: "sour",
    alcohol: 9.5,
    alcoholFilter: "over-seven",
    color: 60,
    colorFilter: "over-fourty-ebc",
    volume: 0.33,
    img: "../pics/Carica.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-09-13 15:40:08"),
  },
  {
    name: "Hop Stew",
    price: 245,
    currency: "RSD",
    style: "ale",
    alcohol: 4.9,
    alcoholFilter: "zero-five",
    color: 20,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/Hop-Stew.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-01-02 17:42:38"),
  },
  {
    name: "MiLLe",
    price: 240,
    currency: "RSD",
    style: "sour",
    alcohol: 5.0,
    alcoholFilter: "zero-five",
    color: 30,
    colorFilter: "fifteen-fourty-ebc",
    volume: 0.33,
    img: "../pics/MiLLe.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2019-10-03 10:42:00"),
  },
];
export const SHOP_MAIN_BEER_PACKS_LIST = [
  {
    name: "Kabinet",
    price: 1450,
    currency: "RSD",
    description: "6x0.33l",
    quantityFilter: "six",
    img: "../pics/Kabinet.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2019-10-03 10:42:00"),
  },
  {
    name: "Nature & society",
    price: 1050,
    currency: "RSD",
    description: "4x0.33l",
    quantityFilter: "four",
    img: "../pics/NatureSociety.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2020-10-03 10:42:00"),
  },
  {
    name: "Hold me tender…",
    price: 230,
    currency: "RSD",
    description: "4x0.33l",
    quantityFilter: "four",
    img: "../pics/HoldMeTender.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-10-03 10:42:00"),
  },
];
export const SHOP_MAIN_PIVOLADA_LIST = [
  {
    name: "BrrKaaa",
    price: 350,
    currency: "RSD",
    description: "Citrus / 0.25l",
    img: "../pics/BrrKaaa-pivolada.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2019-10-03 10:42:00"),
  },
  {
    name: "Plavo",
    price: 350,
    currency: "RSD",
    description: "Floral / 0.25l",
    img: "../pics/Plavo-pivolada.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2018-10-03 10:42:00"),
  },
  {
    name: "Porter",
    price: 350,
    currency: "RSD",
    description: "Chocolate / 0.25l",
    img: "../pics/Porter-pivolada.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2020-10-03 10:42:00"),
  },
];
export const SHOP_MAIN_MERCH_LIST = [
  {
    name: "Kabinet",
    price: 1200,
    currency: "RSD",
    description: "T-shirt",
    img: "../pics/kabinet-t-short.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2019-10-03 10:42:00"),
  },
  {
    name: "BrrKaaa",
    price: 350,
    currency: "RSD",
    description: "Tote bag",
    img: "../pics/BrrKaaa-bag.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2017-10-03 10:42:00"),
  },
  {
    name: "Lutka",
    price: 350,
    currency: "RSD",
    description: "Tote bag",
    img: "../pics/Lutka-bag.png",
    popularity: Math.random() * 10,
    averageRating: Math.random() * 10,
    added: new Date("2021-10-03 10:42:00"),
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
