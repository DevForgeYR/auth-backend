import express from "express";
import exsureAuthenticated from "../middlewares/productAuth.js";

const router = express.Router();

router.get("/", exsureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "Phone",
      price: 10000,
    },
    {
      name: "TV",
      price: 20000,
    },
  ]);
});

export default router;
