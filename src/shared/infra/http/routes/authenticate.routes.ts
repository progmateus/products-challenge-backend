import { Router } from "express";
import { AuthenticareUserController } from "../../../../modules/accounts/useCases/authentcateUser/AuthenticateUserController";
import { RefreshTokenController } from "../../../../modules/accounts/useCases/refreshToken/RefreshTokenController";

const authRoutes = Router();
const authenticareUserController = new AuthenticareUserController();
const refreshTokenController = new RefreshTokenController();


authRoutes.post("/login", authenticareUserController.handle);
authRoutes.post("/refresh-token", refreshTokenController.handle);

export { authRoutes };
