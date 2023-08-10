const o = {
  customerName: "Jack Yu",
  customerAddress: "123 W 123 Street",
  customerCity: "Chicago",
  customerState: "IL",
  customerZip: "60616",
  customerEmail: "fakeemail@gmail.com",
  customerPhone: "123-123-1234",

  orderRegion: "Chicago", //chicago or la
  orderType: "delivery", //delivery or pickup
  orderDate: "8/10/2023",
  orderEventDate: "8/25/2023", //day the order would be delivered / picked up
  orderEventTime: "11:30 AM", //time of the day when the order should be delivered / picked up

  orderMemo: null, //in case customer wants to give the whole order adjustments / comments

  cart: [
    {
      name: "Oolong Milk Tea No Boba",
      quantity: 20, //at least 15 per, even same drink with different customizations
      customizations: {
        sugarlevel: "50%", //0%, 25%, 50%, 75%, or 100%
        toppings: null, //tapioca boba, crystal jelly, lychee jelly, null = keep original toppings, if any
      },

      memo: null, //in case customer wants special instructions for a specific drink
    },

    {
      name: "Oolong Milk Tea No Boba",
      quantity: 25,
      customizations: {
        sugarlevel: "75%",
        toppings: "Lychee Jelly",
      },

      memo: null,
    },

    {
      name: "Lychee Fruit Tea",
      quantity: 30,
      customizations: {
        sugarlevel: "50%",
        topping: "Tapioca Boba",
      },

      memo: "Please make this less sweet than usual",
    },
  ],
};
