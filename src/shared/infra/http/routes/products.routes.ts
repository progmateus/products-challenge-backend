import { Router } from "express";
import { CreateProductController } from "../../../../modules/products/useCases/createProduct/CreateProductController";
import { UpdateProductController } from "../../../../modules/products/useCases/updateProduct/UpdateProductController";
import { DeleteProductController } from "../../../../modules/products/useCases/deleteProduct/DeleteProductController";
import { ListProductsController } from "../../../../modules/products/useCases/listProducts/ListProductsController";
import { GenerateRandomProductsController } from "../../../../modules/products/useCases/generateRandomProducts/GenerateRandomProductsController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

const productsRoutes = Router();
const createProductController = new CreateProductController()
const updateProductController = new UpdateProductController()
const deleteProductController = new DeleteProductController()
const listProductsController = new ListProductsController()
const generateRandomProductsController = new GenerateRandomProductsController()


productsRoutes.post("/", ensureAuthenticated, createProductController.handle);
productsRoutes.put("/:id", ensureAuthenticated, updateProductController.handle);
productsRoutes.delete("/:id", ensureAuthenticated, deleteProductController.handle);
productsRoutes.get("/", ensureAuthenticated, listProductsController.handle);
productsRoutes.post("/generate", ensureAuthenticated, generateRandomProductsController.handle);

export { productsRoutes };
