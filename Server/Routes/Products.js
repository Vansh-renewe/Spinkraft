const router = require("express").Router();
const multer = require("multer");

const data = [
  {
    imgSrc: "http://spinkraft.com/images/product-img/product-one.jpg",
    brand: "Axitec",
    productName: "AXIworldpremium XXL HC",
    productType: "Solar PV Module",
    detailsLink: "http://spinkraft.com/products/show",
  },
  {
    imgSrc: "http://spinkraft.com/images/product-img/product-one.jpg",
    brand: "Axitec",
    productName: "AXIworldpower",
    productType: "Solar PV Module",
    detailsLink: "http://spinkraft.com/products/show",
  },
  {
    imgSrc: "http://spinkraft.com/images/product-img/product-two.jpg",
    brand: "WattPower",
    productName: "SUN2000-200KTL-H2",
    productType: "Solar Inverter",
    detailsLink: "http://spinkraft.com/products/show",
  },
  {
    imgSrc: "http://spinkraft.com/images/product-img/product-two.jpg",
    brand: "WattPower",
    productName: "SUN2000-300KTL-H2",
    productType: "Solar Inverter",
    detailsLink: "http://spinkraft.com/products/show",
  },
  {
    imgSrc: "http://spinkraft.com/images/product-img/product-five.jpg",
    brand: "ZIZI+",
    productName: "P7W",
    productType: "EV Charger",
    detailsLink: "http://spinkraft.com/products/show",
  },
  {
    imgSrc: "http://spinkraft.com/images/product-img/product-five.jpg",
    brand: "ZIZI+",
    productName: "P22F",
    productType: "EV Charger",
    detailsLink: "http://spinkraft.com/products/show",
  },
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.json(data);
});

router.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
