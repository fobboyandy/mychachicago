const express = require("express");
const app = express();
const morgan = require("morgan");
const parser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 4000;
const { createServer } = require("vite");
require("dotenv").config();

const axios = require("axios");
const cron = require("node-cron");

app.use(morgan("dev"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

// /assets virtual path for the images
app.use("/assets", express.static(path.join(__dirname, "../assets")));

const v = async function () {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);
};

app.get("/fetchlocations", async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `https://pythonendpoint.herokuapp.com/api/data/fetchlocations/${process.env.SECRET_KEY}`
    );

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.get("/fetchstock/:location", async (req, res, next) => {
  try {
    const loc = req.params.location;

    const { data } = await axios.get(
      `https://pythonendpoint.herokuapp.com/api/data/fetchstock/${loc}/${process.env.SECRET_KEY}`
      // `http://localhost:4001/api/data/fetchstock/${loc}/${process.env.SECRET_KEY}`
    );

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.get("/fetchlocations", async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `https://pythonendpoint.herokuapp.com/api/data/fetchlocations/${process.env.SECRET_KEY}`
    );

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.post("/sendstock", async (req, res, next) => {
  try {
    const body = req.body;

    const { data } = await axios.post(
      `https://pythonendpoint.herokuapp.com/api/data/sendstock/${process.env.SECRET_KEY}`,
      // `http://localhost:4001/api/data/sendstock/${process.env.SECRET_KEY}`,
      body
    );

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.get("/remainingstock", async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4001/api/data/remainingstock/${process.env.SECRET_KEY}`
    );

    console.log(data.length);

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.get("/getstockforalocation/:location", async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4001/api/data/getstockforalocation/${req.params.location}/${process.env.SECRET_KEY}`
    );

    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.get("/calculatedistance/:o1/:o2/:d1/:d2", async (req, res, next) => {
  try {
    const params = req.params;

    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?key=${process.env.VITE_MAPS}&origins=${params.o1},${params.o2}&destinations=${params.d1},${params.d2}&mode=driving&language=pl-PL`
    );

    function getMiles(meters) {
      return meters * 0.000621371192;
    }

    const miles = getMiles(data.rows[0].elements[0].distance.value);

    res.send({ miles: Number(miles.toFixed(2)) }).status(200);
  } catch (error) {
    next(error);
  }
});

cron.schedule("*/10 * * * *", function () {
  console.log(`running every 10 minutes ${new Date(new Date().getTime())}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => console.log("listening on port " + port));
v();

// use vite's connect instance as middleware
// if you use your own express router (express.Router()), you should use router.use
