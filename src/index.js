import express from "express";
import morgan from "morgan";
import PaymentRoutes from "./routes/payments.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(morgan("dev"));

app.use(PaymentRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
