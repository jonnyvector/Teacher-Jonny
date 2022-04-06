require("dotenv").config();

const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  [1, { priceInCents: 2000, name: "One, 25-minute Class" }],
  [2, { priceInCents: 19000, name: "Ten, 25-minute Classes" }],
  [3, { priceInCents: 37500, name: "Twenty, 25-minute Classes" }],
  [4, { priceInCents: 4000, name: "One, 50-minute Classes" }],
  [5, { priceInCents: 38000, name: "Ten, 50-minute Classes" }],
  [6, { priceInCents: 75000, name: "Twenty, 50-minute Classes" }],
]);

app.listen(3000);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "alipay", "wechat_pay"],
      payment_method_options: {
        wechat_pay: {
          client: "web",
        },
      },
      mode: "payment",
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`,
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
