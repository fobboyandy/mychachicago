const location = [
  {
    id: "uice",
    name: "UIC Student Center East",
    address: "750 S Halsted St Chicago, IL 60607",
    hours: "Hours: Mon – Fri: 6:30am – 10pm. Sat: - Sun 6:30am - 9PM",
    desc: "",
    image: "../assets/locations/image1.png",
  },

  {
    id: "uicw",
    name: "UIC Student Center West",
    address: "828 S Wolcott Ave Chicago, IL 60612",
    hours: "Hours: Mon – Fri: 6:30am – 10pm. Sat: - Sun 6:30am - 9PM",
    desc: "",
    image: "../assets/locations/image.png",
  },

  {
    id: "b37ped",
    name: "Block 37 Pedway (Chicago Downtown)",
    address: "108 N State St Pedway Chicago, IL 60602",
    hours: "Hours: Open 24/7",
    desc: "",
    image: "../assets/locations/image3.png",
  },

  {
    id: "uicbsb",
    name: "UIC Behavioral Sciences Building",
    address: "1007 W Harrison St Chicago, IL 60607",
    hours: "Hours: Mon – Fri: 8:00am – 4pm. Sat - Sun : Closed",
    desc: "",
    image: "../assets/locations/image4.png",
  },

  {
    id: "rushu",
    name: "Rush University",
    address: "600 S Paulina St Chicago, IL 60612",
    hours: "Hours: Open 24/7",
    desc: "",
    image: "../assets/locations/image5.png",
  },

  {
    id: "bpapa",
    name: "Beard Papa @ Wicker Park / SALT burgers + fries",
    address: "924 West North Avenue Chicago, IL 60622",
    hours: "Hours: Mon – Thu: 11am – 10pm. Fri – Sun: 11am – 10pm.",
    desc: "",
    image: "../assets/locations/image6.png",
  },

  {
    id: "uchimed",
    name: "UChicago Medicine Duchossois Center (DCAM) – Hyde Park",
    address: "5758 S Maryland Ave Chicago, IL 60637",
    hours: "Hours: Mon – Fri: 7:30am – 6pm. Sat: 8am – 12pm. Sun: Closed",
    desc: "",
    image: "../assets/locations/image7.png",
  },

  {
    id: "unionstation",
    name: "Chicago Union Station",
    address: "225 S Canal St, Chicago, IL 60606",
    hours: "Hours: Open 24/7",
    desc: "",
    image: "../assets/locations/image8.png",
  },
];

const stock = [
  {
    id: "uice",
    mangojasmine: [134, 2],
    lycheefruittea: [1, 2],
    passionfruittea: [1, 25],
    jasminemilktea: {
      boba: [16, 2],
      nb: [1, 2],
    },
    oolongmilktea: {
      boba: [1, 2],
      nb: [1, 2],
    },
    matchamilktea: [14, 2],
    taromilktea: [1, 26],
    coffeemilktea: [1, 2],
    thaiicedtea: [41, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
  },

  {
    id: "uicw",
    mangojasmine: [1, 2],
    lycheefruittea: [13, 2],
    passionfruittea: [1, 2],
    jasminemilktea: {
      boba: [1, 2],
      nb: [1, 2],
    },
    oolongmilktea: {
      boba: [1, 2],
      nb: [1, 2],
    },
    matchamilktea: [179, 22],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [145, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
  },
  {
    id: "b37ped",
    mangojasmine: [41, 2],
    lycheefruittea: [16, 2],
    passionfruittea: [5, 23],
    jasminemilktea: {
      boba: [1, 25],
      nb: [1, 32],
    },
    oolongmilktea: {
      boba: [1587, 2],
      nb: [14, 2],
    },
    matchamilktea: [10, 2],
    taromilktea: [12, 2],
    coffeemilktea: [1, 42],
    thaiicedtea: [61, 72],
    vietnamesecoffee: [15, 32],
    mangolassi: [14, 2],
  },
  {
    id: "uicbsb",
    mangojasmine: [1, 2],
    lycheefruittea: [1, 2],
    passionfruittea: [1, 2],
    jasminemilktea: {
      boba: [1, 2],
      nb: [1, 2],
    },
    oolongmilktea: {
      boba: [1, 2],
      nb: [1, 2],
    },
    matchamilktea: [51, 2],
    taromilktea: [1, 2],
    coffeemilktea: [1, 62],
    thaiicedtea: [231, 2],
    vietnamesecoffee: [145, 26],
    mangolassi: [51, 24],
  },
  {
    id: "rushu",
    mangojasmine: [1, 2],
    lycheefruittea: [1, 2],
    passionfruittea: [1, 2],
    jasminemilktea: {
      boba: [1, 2],
      nb: [1, 2],
    },
    oolongmilktea: {
      boba: [1, 2],
      nb: [1, 2],
    },
    matchamilktea: [51, 2],
    taromilktea: [14, 27],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [455, 2],
  },
  {
    id: "bpapa",
    mangojasmine: [1, 2],
    lycheefruittea: [16, 2],
    passionfruittea: [1321, 2],
    jasminemilktea: {
      boba: [14, 2],
      nb: [21, 25],
    },
    oolongmilktea: {
      boba: [1, 2],
      nb: [1, 2],
    },
    matchamilktea: [1, 2],
    taromilktea: [1, 2],
    coffeemilktea: [13, 26],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 25],
    mangolassi: [14, 2],
  },
  {
    id: "uchimed",
    mangojasmine: [14, 27],
    lycheefruittea: [131, 25],
    passionfruittea: [13, 82],
    jasminemilktea: {
      boba: [1, 27],
      nb: [16, 2],
    },
    oolongmilktea: {
      boba: [1, 245],
      nb: [1234, 2],
    },
    matchamilktea: [1342, 24],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [18546, 2],
  },

  {
    id: "unionstation",
    mangojasmine: [14, 27],
    lycheefruittea: [131, 25],
    passionfruittea: [13, 82],
    jasminemilktea: {
      boba: [1, 27],
      nb: [16, 2],
    },
    oolongmilktea: {
      boba: [1, 245],
      nb: [1234, 2],
    },
    matchamilktea: [1342, 24],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [18546, 2],
  },
];

export { location, stock };
