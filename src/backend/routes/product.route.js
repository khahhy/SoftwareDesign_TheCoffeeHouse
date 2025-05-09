import express from "express";
import ProductController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/shop/:shopId/menu", ProductController.getMenuByShopId);
router.get("/shop/:shopId/product/:drinkId", ProductController.getDetailDrink);

router.get("/", ProductController.getListProducts);
router.post("/many", ProductController.getManyProducts);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/:id", ProductController.getOneProduct);

export default router;