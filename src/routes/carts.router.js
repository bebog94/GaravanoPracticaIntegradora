import { Router } from "express";
import { cartsManager } from "../dao/managers/cartsManager.js";

const router = Router();

router.get("/:idCart", async (req, res) => {

    const { idCart } = req.params;
    try {
      const cart = await cartsManager.findCartById(idCart);
      if (!cart) {
        res.status(404).json({ message: "Cart not found" });
      } else {
        res.json({ cart });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/:idCart/products/:idProduct", async (req, res) => {

    const { idCart, idProduct } = req.params;
    try {
      const cart = await cartsManager.addProductToCart(idCart, idProduct);
      res.json({ cart });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/", async (req, res) => {
    try {
      const cart = await cartsManager.createCart();
      res.json({ cart });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
export default router;