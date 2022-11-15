import ReactDOMServer from "react-dom/server";
import MangoJasmine from "./checkerimages/MangoJasmine";
import Lychee from "./checkerimages/Lychee";
import PassionFruit from "./checkerimages/PassionFruit";
import JasmineMt from "./checkerimages/JasmineMt";
import Matcha from "./checkerimages/Matcha";
import Oolong from "./checkerimages/Oolong";
import Taro from "./checkerimages/Taro";
import Thai from "./checkerimages/Thai";
import VietCoffee from "./checkerimages/VietCoffee";
import MangoLassi from "./checkerimages/MangoLassi";
import CoffeeMt from "./checkerimages/CoffeeMt";
//the reason we use svgs here instead of images is because if we use images, it will take a long time to load. and it will mess up the qtyoverlay

// const cups2 = {
//   default:
//     '<svg xmlns="http://www.w3.org/2000/svg"fill-rule="evenodd"stroke-linejoin="round"stroke-miterlimit="2"clip-rule="evenodd"viewBox="0 0 32 32"><path d="M7.055 10H6a1 1 0 0 0 0 2h1.105l1.703 15.331A3 3 0 0 0 11.79 30h8.42a3 3 0 0 0 2.982-2.669L24.895 12H26a1 1 0 0 0 0-2h-1.055C24.447 5.503 20.629 2 16 2c-4.629 0-8.447 3.503-8.945 8Zm15.239 7.298c-2.913.533-4.755-.136-6.596-.72-1.655-.524-3.31-.951-6.065.068l1.163 10.464a1 1 0 0 0 .994.89h8.42a1 1 0 0 0 .994-.89l1.09-9.812ZM14 24.269a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM18 23a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3.527-3.795L22.883 12H9.117l.289 2.603c3.074-1.036 4.985-.537 6.896.069 1.695.537 3.39 1.192 6.225.533ZM22.929 10A7.005 7.005 0 0 0 16 4a7.005 7.005 0 0 0-6.929 6h13.858Z" /></svg>',
//   mangojasmine: "<img src=\"/assets/mango_tea_l.png\" class = 'machine-img'/>",

//   lycheefruittea:
//     "<img src=\"/assets/lychee_tea_l.png\" class = 'machine-img'/>",

//   passionfruittea:
//     "<img src=\"/assets/passion_tea_l.png\" class = 'machine-img'/>",
//   jasminemilktea:
//     "<img src=\"/assets/jasmine_mt_l.png\" class = 'machine-img'/>",
//   oolongmilktea: "<img src=\"/assets/oolong_mt_l.png\" class = 'machine-img'/>",

//   matchamilktea: "<img src=\"/assets/matcha.png\" class = 'machine-img'/>",

//   taromilktea: "<img src=\"/assets/taro_l.png\" class = 'machine-img'/>",

//   coffeemilktea: "<img src=\"/assets/coffee_mt_l.png\" class = 'machine-img'/>",

//   thaiicedtea: "<img src=\"/assets/thaitea_l.png\" class = 'machine-img'/>",

//   vietnamesecoffee: "<img src=\"/assets/coffee_l.png\" class = 'machine-img'/>",

//   mangolassi: "<img src=\"/assets/lassi_l.png\" class = 'machine-img'/>",
// };

const cups2 = {
  default:
    '<svg xmlns="http://www.w3.org/2000/svg"fill-rule="evenodd"stroke-linejoin="round"stroke-miterlimit="2"clip-rule="evenodd"viewBox="0 0 32 32"><path d="M7.055 10H6a1 1 0 0 0 0 2h1.105l1.703 15.331A3 3 0 0 0 11.79 30h8.42a3 3 0 0 0 2.982-2.669L24.895 12H26a1 1 0 0 0 0-2h-1.055C24.447 5.503 20.629 2 16 2c-4.629 0-8.447 3.503-8.945 8Zm15.239 7.298c-2.913.533-4.755-.136-6.596-.72-1.655-.524-3.31-.951-6.065.068l1.163 10.464a1 1 0 0 0 .994.89h8.42a1 1 0 0 0 .994-.89l1.09-9.812ZM14 24.269a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM18 23a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3.527-3.795L22.883 12H9.117l.289 2.603c3.074-1.036 4.985-.537 6.896.069 1.695.537 3.39 1.192 6.225.533ZM22.929 10A7.005 7.005 0 0 0 16 4a7.005 7.005 0 0 0-6.929 6h13.858Z" /></svg>',
  mangojasmine: () => {
    return ReactDOMServer.renderToString(<MangoJasmine />);
  },

  lycheefruittea: () => {
    return ReactDOMServer.renderToString(<Lychee />);
  },

  passionfruittea: () => {
    return ReactDOMServer.renderToString(<PassionFruit />);
  },

  jasminemilktea: () => {
    return ReactDOMServer.renderToString(<JasmineMt />);
  },
  oolongmilktea: () => {
    return ReactDOMServer.renderToString(<Oolong />);
  },

  matchamilktea: () => {
    return ReactDOMServer.renderToString(<Matcha />);
  },

  taromilktea: () => {
    return ReactDOMServer.renderToString(<Taro />);
  },

  coffeemilktea: () => {
    return ReactDOMServer.renderToString(<CoffeeMt />);
  },

  thaiicedtea: () => {
    return ReactDOMServer.renderToString(<Thai />);
  },

  vietnamesecoffee: () => {
    return ReactDOMServer.renderToString(<VietCoffee />);
  },

  mangolassi: () => {
    return ReactDOMServer.renderToString(<MangoLassi />);
  },
};

export { cups2 };
