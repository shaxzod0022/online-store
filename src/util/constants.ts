import {
  Anchor,
  ApplePay,
  Butterkist,
  Cheeze,
  Cherry,
  Cocktail,
  Cou,
  Cou2,
  Fresh,
  GooglePay,
  Kts,
  Mastercard,
  PartnerAnchor,
  PartnerKoLe,
  PartnersKts,
  PartnerWoerle,
  PeopleAndCou,
  ProductFerma,
  UnionPay,
  Visa,
  Yogurt,
} from "../assets";
export const navbarLinks = [
  {
    id: "dairy",
    title: "Dairy",
  },
  {
    id: "eggs",
    title: "Eggs",
  },
  {
    id: "poultry",
    title: "Poultry",
  },
  {
    id: "rice",
    title: "Rice",
  },
  {
    id: "beefmutton",
    title: "Beef/Mutton",
  },
  {
    id: "more",
    title: "More",
  },
];
export const productInfo = [
  {
    id: 1,
    title: "6 Fresh & Tasty Eggs",
    price: "£72.00 £60",
    img: Fresh,
  },
  {
    id: 2,
    title: "7up Cherry",
    price: "£72.00 £60",
    img: Cherry,
  },
  {
    id: 3,
    title: "Anchor Butter",
    price: "£72.00 £60",
    img: Anchor,
  },
  {
    id: 4,
    title: "Butterkist Salted",
    price: "£72.00 £60",
    img: Butterkist,
  },
  {
    id: 5,
    title: "Desi Yogurt",
    price: "£72.00 £60",
    img: Yogurt,
  },
  {
    id: 6,
    title: "KTC Coconut Milk",
    price: "£72.00 £60",
    img: Kts,
  },
  {
    id: 7,
    title: "Asya Cocktail",
    price: "£72.00 £60",
    img: Cocktail,
  },
  {
    id: 8,
    title: "Happy Cow Cheeze",
    price: "£72.00 £60",
    img: Cheeze,
  },
];
export const slideImages = [ProductFerma, Cou, PeopleAndCou, Cou2];
export const partners = [
  PartnersKts,
  PartnerAnchor,
  PartnerKoLe,
  PartnerWoerle,
];

export const footerLinks = [
  {
    title: "Links",
    links: ["Contact", "Affiliation", "Terms of Use"],
  },
  {
    title: "Company",
    links: ["Blog", "Shop", "About"],
  },
  {
    title: "Categories",
    links: ["Eggs", "Drinks", "Eatables"],
  },
  {
    title: "Terms",
    links: ["Privacy Policy", "Terms & Conditions"],
  },
];

export const Pay = [Mastercard, Visa, UnionPay, ApplePay, GooglePay];
