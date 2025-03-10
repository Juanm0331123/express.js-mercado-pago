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
        notification_url: "https://153b-190-1-215-48.ngrok-free.app/webhook",
      },
    });

    console.log(result);
    res.json({ data: result.body || result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear la orden");
  }
};

export const receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const paymentId = payment["data.id"];

      const response = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status}`);
      }

      const data = await response.json();
      console.log("Datos del pago:", data);

      // Se guarda el pago en la base de datos
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error al recibir el webhook:", error);
    res.status(500).send("Error al recibir el webhook: " + error.message);
  }
};
