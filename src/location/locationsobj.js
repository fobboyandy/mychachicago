//notes:
//fetchname is the name used to fetch stock from aws. its needed because sometimes the display name is different than the name of the stock file on aws

const location = {
  IL: {
    chicago: [
      {
        id: "uice",
        name: "UIC Student Center East",
        address: "750 S Halsted St Chicago, IL 60607",
        hours: "Mon – Fri: 6:30am – 10pm. Sat: - Sun 6:30am - 9PM",
        desc: "",
        image: "../assets/locations/image1.png",
        coordinates: [41.8719144, -87.6479295],
        fetchName: "UIC East",
      },

      {
        id: "uicw",
        name: "UIC Student Center West",
        address: "828 S Wolcott Ave Chicago, IL 60612",
        hours: "Mon – Fri: 6:30am – 10pm. Sat: - Sun 6:30am - 9PM",
        desc: "",
        image: "../assets/locations/image.png",
        coordinates: [41.8706724, -87.6744532],
        fetchName: "UIC West",
      },

      {
        id: "b37ped",
        name: "Block 37 Pedway (Chicago Downtown)",
        address: "108 N State St Pedway Chicago, IL 60602",
        hours: "Open 24/7",
        desc: "",
        image: "../assets/locations/image3.png",
        coordinates: [41.8835163, -87.6282874],
        fetchName: "Block 37",
      },

      {
        id: "uicbsb",
        name: "UIC Behavioral Sciences Building",
        address: "1007 W Harrison St Chicago, IL 60607",
        hours: "Mon – Fri: 8:00am – 4pm. Sat - Sun : Closed",
        desc: "",
        image: "../assets/locations/image4.png",
        coordinates: [41.8736761, -87.6528001],
        fetchName: "UIC BSB",
      },

      {
        id: "rushu",
        name: "Rush University",
        address: "600 S Paulina St Chicago, IL 60612",
        hours: "Open 24/7",
        desc: "",
        image: "../assets/locations/image5.png",
        coordinates: [41.8737665, -87.6694023],
        fetchName: "Rush Hospital",
      },

      {
        id: "rushr",
        name: "Rush University - Rubschlager",
        address: "1520 W. Harrison St Chicago, IL 60607",
        hours: "Mon - Fri: 7:30am - 5pm. Sat - Sun: Closed",
        desc: "",
        image: "../assets/locations/image5.png",
        coordinates: [41.874494, -87.6651297],
        fetchName: "Rush (Rubschlager)",
      },

      {
        id: "bpapa",
        name: "Beard Papa @ Wicker Park / SALT burgers + fries",
        address: "924 West North Avenue Chicago, IL 60622",
        hours: "Mon – Thu: 11am – 10pm. Fri – Sun: 11am – 10pm.",
        desc: "",
        image: "../assets/locations/image6.png",
        coordinates: [41.9107392, -87.6711167],
        fetchName: "Beard Papa",
      },

      {
        id: "uchimed",
        name: "UChicago Medicine Duchossois Center (DCAM) – Hyde Park",
        address: "5758 S Maryland Ave Chicago, IL 60637",
        hours: "Mon – Fri: 7:30am – 6pm. Sat: 8am – 12pm. Sun: Closed",
        desc: "",
        image: "../assets/locations/image7.png",
        coordinates: [41.7902097, -87.6055022],
        fetchName: "UC Med",
      },

      {
        id: "uchilibrary",
        name: "UChicago Library (Joseph Regenstein Library) - Hyde Park",
        address: "1100 E 57th St, Chicago, IL 60637",
        hours:
          "Mon – Thurs: 8:00am – 10pm. Fri: 8am – 5pm. Sat - Sun: 9am - 5pm",
        desc: "",
        image: "../assets/locations/image7.png",
        coordinates: [41.7922543, -87.5997913],
        fetchName: "UC Library",
      },

      {
        id: "uchiccd",
        name: "UChicago Medicine Center for Care and Discovery - Hyde Park",
        address: "5700 S Maryland Ave, Chicago, IL 60637",
        hours: "Open 24/7",
        desc: "",
        image: "../assets/locations/image7.png",
        coordinates: [41.7904318, -87.6051112],
        fetchName: "UC Med - CCD West",
      },

      {
        id: "nulaw",
        name: "Northwestern Law (Pritzker School of Law)",
        address: "375 E Chicago Ave, Chicago, IL 60611",
        hours: "Unknown",
        desc: "",
        image: "../assets/locations/image7.png",
        coordinates: [41.8965094, -87.6173248],
        fetchName: "Northwestern Law",
      },

      {
        id: "dupagecollege",
        name: "College of DuPage Health Sciences Center",
        address: "425 Fawell Blvd, Glen Ellyn, IL 60137",
        hours: "Unknown",
        desc: "",
        image: "../assets/locations/image7.png",
        coordinates: [41.84243, -88.07373],
        fetchName: "College of Dupage",
      },

      {
        id: "unionstation",
        name: "Chicago Union Station",
        address: "225 S Canal St, Chicago, IL 60606",
        hours: "Open 24/7",
        desc: "",
        image: "../assets/locations/image8.png",
        coordinates: [41.8786821, -87.6390661],
        fetchName: "Union Station",
      },
    ],
  },

  CA: {
    //la is a guesstimate, i will change coordinates and address later when i get them
    la: [
      {
        id: "ucla",
        name: "UCLA",
        address: "405 Hilgard Ave, Los Angeles, CA 90095",
        hours: "Open 24/7",
        desc: "",
        image: "",
        coordinates: [34.0703897, -118.4441495],
        fetchName: "UCLA",
      },
      {
        id: "smc",
        name: "Santa Monica College",
        address: "1900 Pico Blvd, Santa Monica, CA 90405",
        hours: "Open 24/7",
        desc: "",
        image: "",
        coordinates: [34.0183815, -118.4701168],
        fetchName: "Santa Monica College",
      },
      {
        id: "csula",
        name: "Cal State LA",
        address: "5151 State University Dr, Los Angeles, CA 90032",
        hours: "24/7",
        desc: "",
        image: "",
        coordinates: [34.0679172, -118.1655535],
        fetchName: "CSULA",
      },
      {
        id: "galleria",
        name: "Galleria Market",
        address: "3250 W Olympic Blvd #314, Los Angeles, CA 90006",
        hours: "24/7",
        desc: "",
        image: "",
        coordinates: [34.052156, -118.3084154],
        fetchName: "Galleria Market",
      },
      {
        id: "glendale",
        name: "Glendale Community College",
        address: "1500 North Verdugo Road, Glendale, CA 91208",
        hours: "24/7",
        desc: "",
        image: "",
        coordinates: [34.1666368, -118.2295426],
        fetchName: "Glendale Community College",
      },
    ],
  },

  //
};

const locationWithoutState = {
  chicago: [
    {
      id: "uice",
      name: "UIC Student Center East",
      address: "750 S Halsted St Chicago, IL 60607",
      hours: "Mon – Fri: 6:30am – 10pm. Sat: - Sun 6:30am - 9PM",
      desc: "",
      image: "../assets/locations/image1.png",
      coordinates: [41.8719144, -87.6479295],
      fetchName: "UIC East",
    },

    {
      id: "uicw",
      name: "UIC Student Center West",
      address: "828 S Wolcott Ave Chicago, IL 60612",
      hours: "Mon – Fri: 6:30am – 10pm. Sat: - Sun 6:30am - 9PM",
      desc: "",
      image: "../assets/locations/image.png",
      coordinates: [41.8706724, -87.6744532],
      fetchName: "UIC West",
    },

    {
      id: "b37ped",
      name: "Block 37 Pedway (Chicago Downtown)",
      address: "108 N State St Pedway Chicago, IL 60602",
      hours: "Open 24/7",
      desc: "",
      image: "../assets/locations/image3.png",
      coordinates: [41.8835163, -87.6282874],
      fetchName: "Block 37",
    },

    {
      id: "uicbsb",
      name: "UIC Behavioral Sciences Building",
      address: "1007 W Harrison St Chicago, IL 60607",
      hours: "Mon – Fri: 8:00am – 4pm. Sat - Sun : Closed",
      desc: "",
      image: "../assets/locations/image4.png",
      coordinates: [41.8736761, -87.6528001],
      fetchName: "UIC BSB",
    },

    {
      id: "rushu",
      name: "Rush University",
      address: "600 S Paulina St Chicago, IL 60612",
      hours: "Open 24/7",
      desc: "",
      image: "../assets/locations/image5.png",
      coordinates: [41.8737665, -87.6694023],
      fetchName: "Rush Hospital",
    },

    {
      id: "rushr",
      name: "Rush University - Rubschlager",
      address: "1520 W. Harrison St Chicago, IL 60607",
      hours: "Mon - Fri: 7:30am - 5pm. Sat - Sun: Closed",
      desc: "",
      image: "../assets/locations/image5.png",
      coordinates: [41.874494, -87.6651297],
      fetchName: "Rush (Rubschlager)",
    },

    {
      id: "bpapa",
      name: "Beard Papa @ Wicker Park / SALT burgers + fries",
      address: "924 West North Avenue Chicago, IL 60622",
      hours: "Mon – Thu: 11am – 10pm. Fri – Sun: 11am – 10pm.",
      desc: "",
      image: "../assets/locations/image6.png",
      coordinates: [41.9107392, -87.6711167],
      fetchName: "Beard Papa",
    },

    {
      id: "uchimed",
      name: "UChicago Medicine Duchossois Center (DCAM) – Hyde Park",
      address: "5758 S Maryland Ave Chicago, IL 60637",
      hours: "Mon – Fri: 7:30am – 6pm. Sat: 8am – 12pm. Sun: Closed",
      desc: "",
      image: "../assets/locations/image7.png",
      coordinates: [41.7902097, -87.6055022],
      fetchName: "UC Med",
    },

    {
      id: "uchilibrary",
      name: "UChicago Library (Joseph Regenstein Library) - Hyde Park",
      address: "1100 E 57th St, Chicago, IL 60637",
      hours: "Mon – Thurs: 8:00am – 10pm. Fri: 8am – 5pm. Sat - Sun: 9am - 5pm",
      desc: "",
      image: "../assets/locations/image7.png",
      coordinates: [41.7922543, -87.5997913],
      fetchName: "UC Library",
    },

    {
      id: "uchiccd",
      name: "UChicago Medicine Center for Care and Discovery - Hyde Park",
      address: "5700 S Maryland Ave, Chicago, IL 60637",
      hours: "Open 24/7",
      desc: "",
      image: "../assets/locations/image7.png",
      coordinates: [41.7904318, -87.6051112],
      fetchName: "UC Med - CCD West",
    },

    {
      id: "nulaw",
      name: "Northwestern Law (Pritzker School of Law)",
      address: "375 E Chicago Ave, Chicago, IL 60611",
      hours: "Unknown",
      desc: "",
      image: "../assets/locations/image7.png",
      coordinates: [41.8965094, -87.6173248],
      fetchName: "Northwestern Law",
    },

    {
      id: "dupagecollege",
      name: "College of DuPage Health Sciences Center",
      address: "425 Fawell Blvd, Glen Ellyn, IL 60137",
      hours: "Unknown",
      desc: "",
      image: "../assets/locations/image7.png",
      coordinates: [41.84243, -88.07373],
      fetchName: "College of Dupage",
    },

    {
      id: "unionstation",
      name: "Chicago Union Station",
      address: "225 S Canal St, Chicago, IL 60606",
      hours: "Open 24/7",
      desc: "",
      image: "../assets/locations/image8.png",
      coordinates: [41.8786821, -87.6390661],
      fetchName: "Union Station",
    },
  ],

  //la is a guesstimate, i will change coordinates and address later when i get them
  la: [
    {
      id: "ucla",
      name: "UCLA",
      address: "405 Hilgard Ave, Los Angeles, CA 90095",
      hours: "Open 24/7",
      desc: "",
      image: "",
      coordinates: [34.0703897, -118.4441495],
      fetchName: "UCLA",
    },
    {
      id: "smc",
      name: "Santa Monica College",
      address: "1900 Pico Blvd, Santa Monica, CA 90405",
      hours: "Open 24/7",
      desc: "",
      image: "",
      coordinates: [34.0183815, -118.4701168],
      fetchName: "Santa Monica College",
    },
    {
      id: "csula",
      name: "Cal State LA",
      address: "5151 State University Dr, Los Angeles, CA 90032",
      hours: "24/7",
      desc: "",
      image: "",
      coordinates: [34.0679172, -118.1655535],
      fetchName: "CSULA",
    },
    {
      id: "galleria",
      name: "Galleria Market",
      address: "3250 W Olympic Blvd #314, Los Angeles, CA 90006",
      hours: "24/7",
      desc: "",
      image: "",
      coordinates: [34.052156, -118.3084154],
      fetchName: "Galleria Market",
    },
    {
      id: "glendale",
      name: "Glendale Community College",
      address: "1500 North Verdugo Road, Glendale, CA 91208",
      hours: "24/7",
      desc: "",
      image: "",
      coordinates: [34.1666368, -118.2295426],
      fetchName: "Glendale Community College",
    },
  ],

  //
};

const location2 = [
  {
    id: "uice",
    name: "UIC East",
  },

  {
    id: "uicw",
    name: "UIC West",
  },

  {
    id: "b37ped",
    name: "B37",
  },

  {
    id: "uicbsb",
    name: "UIC BSB",
  },

  {
    id: "rushu",
    name: "Rush",
  },

  {
    id: "bpapa",
    name: "Beard",
  },

  {
    id: "uchimed",
    name: "UCMED",
  },

  {
    id: "unionstation",
    name: "Union Station",
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

export { location, stock, location2, locationWithoutState };
