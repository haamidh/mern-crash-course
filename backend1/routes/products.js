import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/", createProduct );

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct)

router.get("/", getProducts )

export default router;