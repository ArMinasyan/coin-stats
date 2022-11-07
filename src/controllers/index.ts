import { Router } from "express";
import { CoinController } from "./coin.controller";
import { coinValidator } from "../common/validators/coin.validator";
import handleValidation from "../common/validation.handle";

const coinController: CoinController = new CoinController();

const coinRouter = Router();
coinRouter
  .get("/", coinValidator, handleValidation, coinController.getCoins)
  .get("/:coinId", coinValidator, handleValidation, coinController.getCoinById);

export { coinRouter };
