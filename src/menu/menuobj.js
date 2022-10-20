const menuobj = [
  {
    id: "fruitteasection",
    section: "Fruit Teas",
    items: [
      {
        id: 1,
        htmlid: "mangojasmine",
        name: "Mango Jasmine Tea",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032484622849822740/unknown.png",
      },

      {
        id: 2,
        htmlid: "lycheefruittea",
        name: "Lychee Jasmine Tea",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032489049283362877/unknown.png",
      },
      {
        id: 3,
        htmlid: "passionfruittea",
        name: "Passionfruit Jasmine Tea",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032497287550734336/unknown.png",
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
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032507744583958599/unknown.png",
      },

      {
        id: 5,
        htmlid: "oolongmilktea",
        name: "Roasted Oolong Milk Tea",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032507903816503377/unknown.png",
      },
      {
        id: 6,
        htmlid: "matchamilktea",
        name: "Matcha Milk Tea",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032508025770082334/unknown.png",
      },

      {
        id: 7,
        htmlid: "taromilktea",
        name: "Taro Milk Tea",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032508240900137030/unknown.png",
      },

      {
        id: 8,
        htmlid: "coffeemilktea",
        name: "Coffee Milk Tea",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032508527182360617/unknown.png",
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
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032508684833665084/unknown.png",
      },

      {
        id: 10,
        htmlid: "vietnamesecoffee",
        name: "Vietnamese Coffee",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032508887384993842/unknown.png",
      },
      {
        id: 11,
        htmlid: "mangolassi",
        name: "Mango Lassi",
        image:
          "https://cdn.discordapp.com/attachments/779278654714675232/1032509056822280233/unknown.png",
      },
    ],
  },
];

const allItems = [
  {
    id: 1,
    htmlid: "mangojasmine",
    name: "Mango Jasmine Tea",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032484622849822740/unknown.png",
    nutrition: {
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: 14,
        saturated_fat: 0,
        trans_fat: 0,
        sodium: 0,
        total_carbohydrate: 48,
        dietary_fiber: 0,
        total_sugars: 27,
        added_sugars: 0,
        protein: 1,
      },

      large: {
        serving_size: 400,
        calories: 325,
        total_fat: 14,
        saturated_fat: 0,
        trans_fat: 0,
        sodium: 0,
        total_carbohydrate: 48,
        dietary_fiber: 0,
        total_sugars: 27,
        added_sugars: 0,
        protein: 1,
      },
    },
  },

  {
    id: 2,
    htmlid: "lycheefruittea",
    name: "Lychee Jasmine Tea",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032489049283362877/unknown.png",
    nutrition: {
      small: {
        serving_size: 400,
        calories: 325,
        total_fat: 14,
        saturated_fat: 0,
        trans_fat: 0,
        sodium: 0,
        total_carbohydrate: 48,
        dietary_fiber: 0,
        total_sugars: 27,
        added_sugars: 0,
        protein: 1,
      },

      large: {
        serving_size: 400,
        calories: 325,
        total_fat: 14,
        saturated_fat: 0,
        trans_fat: 0,
        sodium: 0,
        total_carbohydrate: 48,
        dietary_fiber: 0,
        total_sugars: 27,
        added_sugars: 0,
        protein: 1,
      },
    },
  },
  {
    id: 3,
    htmlid: "passionfruittea",
    name: "Passionfruit Jasmine Tea",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032497287550734336/unknown.png",
  },
  {
    id: 4,
    htmlid: "jasminemilktea",
    name: "Jasmine Milk Tea",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032507744583958599/unknown.png",
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
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032507903816503377/unknown.png",
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
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032508025770082334/unknown.png",
  },

  {
    id: 7,
    htmlid: "taromilktea",
    name: "Taro Milk Tea",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032508240900137030/unknown.png",
  },

  {
    id: 8,
    htmlid: "coffeemilktea",
    name: "Coffee Milk Tea",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032508527182360617/unknown.png",
  },
  {
    id: 9,
    htmlid: "thaiicedtea",
    name: "Thai Iced Tea",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032508684833665084/unknown.png",
  },

  {
    id: 10,
    htmlid: "vietnamesecoffee",
    name: "Vietnamese Coffee",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032508887384993842/unknown.png",
  },
  {
    id: 11,
    htmlid: "mangolassi",
    name: "Mango Lassi",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1032509056822280233/unknown.png",
  },
];

export { menuobj, allItems };
