import { Router } from "express";
import {
  createOrder,
  receiveWebhook,
} from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-order", createOrder);

router.get("/success", (req, res) => res.send("Success"));

router.get("/failure", (req, res) => res.send("Failure"));

router.get("/pending", (req, res) => res.send("Pending"));

router.post("/webhook", receiveWebhook);

export default router;
