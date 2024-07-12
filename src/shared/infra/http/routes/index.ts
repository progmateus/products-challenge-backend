import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authRoutes } from "./authenticate.routes";
import { productsRoutes } from "./products.routes";

const router = Router();
router.use("/users", usersRoutes)
router.use("/auth", authRoutes)
router.use("/products", productsRoutes)


export { router };