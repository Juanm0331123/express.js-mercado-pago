import { MercadoPagoConfig, Preference } from "mercadopago";
import { MERCADO_PAGO_ACCESS_TOKEN } from "../config.js";

export const createOrder = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: MERCADO_PAGO_ACCESS_TOKEN,
  });

  const preference = new Preference(client);

  try {
    const result = await preference.create({
      body: {
        items: [
          {
            title: "Laptop Acer",
            unit_price: 20000,
            currency_id: "COP",
            quantity: 1,
          },
        ],
        back_urls: {
          success: "http://localhost:3000/success",
          failure: "http://localhost:3000/failure",
          pending: "http://localhost:3000/pending",
        },
        notification_url: "https://7041-190-1-208-152.ngrok-free.app/webhook",
      },
    });

    console.log(result);
    res.json(result.body);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la orden");
  }
};

export const receiveWebhook = async (req, res) => {
  res.send("Recibiendo Webhook");
};
