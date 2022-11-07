import { Request, Response } from "express";
import { CoinService } from "../services/coin.service";

const coinService: CoinService = new CoinService();

export class CoinController {
  constructor() {}

  async getCoins(req: Request, res: Response) {
    const response = await coinService.getCoins(req.query);
    return res.status(response.statusCode).json(response);
  }

 async getCoinById(req: Request, res: Response) {
    const response = await coinService.getCoinsById(req.params.coinId, req.query);
    return res.status(response.statusCode).json(response);
  }
}
