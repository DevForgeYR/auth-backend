import express from "express";
import dotenv from "dotenv";
import "./models/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/router.js";
import productRouters from "./routes/productRouter.js";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 8000;
const app = express();

// Middleware (optional)
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/", authRoutes);
app.use("/products", productRouters);

app.listen(PORT, () => {
  console.log(`🚀 Server is up at http://localhost:${PORT}`);
});
