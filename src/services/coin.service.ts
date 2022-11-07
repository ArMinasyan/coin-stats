import { BaseService } from "./base.service";
import { ResponseType } from "../types/response.type";
import { GetCoinsDto } from "../common/dtos/get-coins.dto";
import { requestToFetchCoins, requestToFetchFiats } from "./requests";
import getMinMax from "../common/getMinMax";

export class CoinService extends BaseService {
  async getMinMax(chart: number[][], currency: string) {
    const fetchFiats = await requestToFetchFiats(
      currency.slice(4).toUpperCase()
    );
    const minMaxValue = getMinMax(chart.map((e: number[]) => e[1]));
    minMaxValue.high.value = Math.round(minMaxValue.high.value * fetchFiats.rate);
    minMaxValue.low.value = Math.round(minMaxValue.low.value * fetchFiats.rate);

    return minMaxValue
  }

  async getCoins(query: GetCoinsDto): Promise<ResponseType> {
    const fetchCoins = await requestToFetchCoins();
    const minMaxValue = await this.getMinMax(fetchCoins.chart, query.currency);
    return this.responseGenerator.setData(minMaxValue).generate();
  }

  async getCoinsById(coinId: string, query: GetCoinsDto): Promise<ResponseType> {
    const fetchCoins = await requestToFetchCoins(coinId);
    console.log(fetchCoins)
    const minMaxValue = await this.getMinMax(fetchCoins.chart, query.currency);
    return this.responseGenerator.setData(minMaxValue).generate();
  }
}
