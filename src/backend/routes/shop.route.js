import express from "express";
import ShopController from "../controllers/shop.controller.js";
import ShopModel from "../models/shop.model.js";

const router = express.Router();

router.get("/cities", ShopController.getCities);
router.get("/districts", ShopController.getDistrictsByCity);
router.get("/shops", ShopController.getShopByAddress);
router.get("/detail", ShopController.getShopById);
router.get("/nearbyshops", ShopController.getNearByShops);

router.get("/", ShopController.getListShops);
router.post("/many", ShopController.getManyShops);
router.post("/", ShopController.createShop);
router.put("/:id", ShopController.updateShop);
router.delete("/:id", ShopController.deleteShop);
router.get("/:id", ShopController.getOneShop);

export default router;