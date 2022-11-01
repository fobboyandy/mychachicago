const location = [
  {
    id: "uice",
    name: "UIC Student Center East",
    address: "750 S Halsted St Chicago, IL 60607",
    hours: "",
    desc: "",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1031734599258218577/unknown.png",
  },

  {
    id: "uicw",
    name: "UIC Student Center West",
    address: "828 S Wolcott Ave Chicago, IL 60612",
    hours: "",
    desc: "",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1031346086041890877/unknown.png",
  },

  {
    id: "b37ped",
    name: "Block 37 Pedway (Chicago Downtown)",
    address: "108 N State St Pedway Chicago, IL 60602",
    hours: "",
    desc: "",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1031690526988181504/unknown.png",
  },

  {
    id: "uicbsb",
    name: "UIC Behavioral Sciences Building",
    address: "1007 W Harrison St Chicago, IL 60607",
    hours: "",
    desc: "",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1031686927285489684/unknown.png",
  },

  {
    id: "rushu",
    name: "Rush University",
    address: "600 S Paulina St Chicago, IL 60612",
    hours: "",
    desc: "",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1031690687604871188/unknown.png",
  },

  {
    id: "bpapa",
    name: "Beard Papa @ Wicker Park / SALT burgers + fries",
    address: "924 West North Avenue Chicago, IL 60622",
    hours: "Hours: Mon – Thu: 11am – 10pm. Fri – Sun: 11am – 10pm.",
    desc: "",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1031689723770581113/unknown.png",
  },

  {
    id: "uchimed",
    name: "UChicago Medicine Duchossois Center for Advanced Medicine (DCAM) – Hyde Park",
    address: "5758 S Maryland Ave Chicago, IL 60637",
    hours: "Hours: Mon – Fri: 7:30am – 6pm. Sat: 8am – 12pm. Sun: Closed",
    desc: "",
    image:
      "https://cdn.discordapp.com/attachments/779278654714675232/1031690203032719491/unknown.png",
  },
];

const stock = [
  {
    id: "uice",
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
    matchamilktea: [1, 2],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
  },

  {
    id: "uicw",
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
    matchamilktea: [1, 2],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
  },
  {
    id: "b37ped",
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
    matchamilktea: [1, 2],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
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
    matchamilktea: [1, 2],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
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
    matchamilktea: [1, 2],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
  },
  {
    id: "bpapa",
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
    matchamilktea: [1, 2],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
  },
  {
    id: "uchimed",
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
    matchamilktea: [1, 2],
    taromilktea: [1, 2],
    coffeemilktea: [1, 2],
    thaiicedtea: [1, 2],
    vietnamesecoffee: [1, 2],
    mangolassi: [1, 2],
  },
];

export { location, stock };
