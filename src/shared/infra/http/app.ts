import "reflect-metadata";
import "dotenv/config"
import "../../../database/index"
import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express"
import "express-async-errors"
import cors from "cors"

import "../../container/index"
import { router } from "./routes";
import { AppError } from "../../../errors/AppError";
import swaggerFile from "../../../swagger.json"


const app = express();
app.use(express.json())
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

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