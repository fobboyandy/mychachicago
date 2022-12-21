const menuobj = [
  {
    id: "fruitteasection",
    section: "Fruit Teas",
    items: [
      {
        id: 1,
        htmlid: "mangojasmine",
        name: "Mango Jasmine Tea",
        image: "../assets/Final/mango_small.jpg",
      },

      {
        id: 2,
        htmlid: "lycheefruittea",
        name: "Lychee Jasmine Tea",
        image: "../assets/Final/lychee_small.jpg",
      },
      {
        id: 3,
        htmlid: "passionfruittea",
        name: "Passionfruit Jasmine Tea",
        image: "../assets/Final/passion_small.jpg",
      },
    ],
  },

  {
    id: "milkteasection",
    section: "Milk Teas",
    items: [
      {
        id: 4,
        htmlid: "jasminemilktea",
        name: "Jasmine Milk Tea",
        image: "../assets/Final/jasmine_jelly_small.jpg",
      },

      {
        id: 5,
        htmlid: "oolongmilktea",
        name: "Roasted Oolong Milk Tea",
        image: "../assets/Final/oolong_jelly_small.jpg",
      },
      {
        id: 6,
        htmlid: "matchamilktea",
        name: "Matcha Milk Tea",
        image: "../assets/Final/matcha_small.jpg",
      },

      {
        id: 7,
        htmlid: "taromilktea",
        name: "Taro Milk Tea",
        image: "../assets/Final/taro_small.jpg",
      },

      {
        id: 8,
        htmlid: "coffeemilktea",
        name: "Coffee Milk Tea",
        image: "../assets/Final/coffee_mt_small.jpg",
      },
    ],
  },

  {
    id: "specialsection",
    section: "Specialty Drinks",
    items: [
      {
        id: 9,
        htmlid: "thaiicedtea",
        name: "Thai Iced Tea",
        image: "../assets/Final/thai_tea_small.jpg",
      },

      {
        id: 10,
        htmlid: "vietnamesecoffee",
        name: "Vietnamese Coffee",
        image: "../assets/Final/coffee_small.jpg",
      },
      {
        id: 11,
        htmlid: "mangolassi",
        name: "Mango Lassi",
        image: "../assets/Final/lassi-removebg-preview.png",
      },
    ],
  },
];

const allItems = [
  {
    id: 1,
    htmlid: "mangojasmine",
    name: "Mango Jasmine Tea",
    image: "../assets/Final/mango_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },

  {
    id: 2,
    htmlid: "lycheefruittea",
    name: "Lychee Jasmine Tea",
    image: "../assets/Final/lychee_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },
  {
    id: 3,
    htmlid: "passionfruittea",
    name: "Passionfruit Jasmine Tea",
    image: "../assets/Final/passion_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },
  {
    id: 4,
    htmlid: "jasminemilktea",
    name: "Jasmine Milk Tea",
    image: "../assets/Final/jasmine_jelly_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },

  {
    id: 5,
    htmlid: "oolongmilktea",
    name: "Roasted Oolong Milk Tea",
    image: "../assets/Final/oolong_jelly_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },
  {
    id: 6,
    htmlid: "matchamilktea",
    name: "Matcha Milk Tea",
    image: "../assets/Final/matcha_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },

  {
    id: 7,
    htmlid: "taromilktea",
    name: "Taro Milk Tea",
    image: "../assets/Final/taro_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },

  {
    id: 8,
    htmlid: "coffeemilktea",
    name: "Coffee Milk Tea",
    image: "../assets/Final/coffee_mt_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },
  {
    id: 9,
    htmlid: "thaiicedtea",
    name: "Thai Iced Tea",
    image: "../assets/Final/thai_tea_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },

  {
    id: 10,
    htmlid: "vietnamesecoffee",
    name: "Vietnamese Coffee",
    image: "../assets/Final/coffee_small.jpg",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },
  {
    id: 11,
    htmlid: "mangolassi",
    name: "Mango Lassi",
    image: "../assets/Final/lassi-removebg-preview.png",
    nutrition: {
      //correct
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [48, 17],
        dietary_fiber: [0, 0],
        total_sugars: 27,
        added_sugars: [0, 0],
        protein: [1, 2],
      },

      large: {
        serving_size: 400,
        calories: 332,
        total_fat: [14, 18],
        saturated_fat: [0, 0],
        trans_fat: 0,
        sodium: [0, 0],
        total_carbohydrate: [49, 18],
        dietary_fiber: [0, 0],
        total_sugars: 30,
        added_sugars: [0, 0],
        protein: [1, 2],
      },
    },
  },
];

export { menuobj, allItems };
