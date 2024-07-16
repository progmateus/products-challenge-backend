import { Router } from "express";
import { CreateProductController } from "../../../../modules/products/useCases/createProduct/CreateProductController";
import { UpdateProductController } from "../../../../modules/products/useCases/updateProduct/UpdateProductController";
import { DeleteProductController } from "../../../../modules/products/useCases/deleteProduct/DeleteProductController";
import { ListProductsController } from "../../../../modules/products/useCases/listProducts/ListProductsController";
import { GenerateRandomProductsController } from "../../../../modules/products/useCases/generateRandomProducts/GenerateRandomProductsController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { DeleteAllProductsController } from "../../../../modules/products/useCases/deleteAllProducts/DeleteAllProductsController";

const productsRoutes = Router();
const createProductController = new CreateProductController()
const updateProductController = new UpdateProductController()
const deleteProductController = new DeleteProductController()
const listProductsController = new ListProductsController()
const generateRandomProductsController = new GenerateRandomProductsController()
const deleteAllProductsController = new DeleteAllProductsController()


productsRoutes.post("/", ensureAuthenticated, createProductController.handle);
productsRoutes.get("/", ensureAuthenticated, listProductsController.handle);
productsRoutes.delete("/", ensureAuthenticated, deleteAllProductsController.handle);
productsRoutes.put("/:id", ensureAuthenticated, updateProductController.handle);
productsRoutes.delete("/:id", ensureAuthenticated, deleteProductController.handle);
productsRoutes.post("/generate", ensureAuthenticated, generateRandomProductsController.handle);

export { productsRoutes };
