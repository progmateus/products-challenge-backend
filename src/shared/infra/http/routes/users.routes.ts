import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { GetUserProfileController } from "../../../../modules/accounts/useCases/profileUser/GetUserProfileController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const getUserProfileController = new GetUserProfileController()

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/profile", ensureAuthenticated, getUserProfileController.handle);

export { usersRoutes };
