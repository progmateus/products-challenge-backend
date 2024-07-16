import "reflect-metadata";
import "dotenv/config"
import "../../../database/index"
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import "../../container/index"
import { router } from "./routes";
import { AppError } from "../../../errors/AppError";
import swaggerFile from "../../../swagger.json"

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();
app.use(express.json())
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, {
  customCss:
    '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
  customCssUrl: CSS_URL
}));

app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {


    if (err instanceof AppError) {
      console.log(err.message);
      return response.status(err.statusCode).json({
        message: err.message
      })
    }

    return response.status(500).json({
      status: "error",
      message: `ERR_INTERNAL_SERVER_ERROR - ${err.message}`
    })

  }
)
export { app };