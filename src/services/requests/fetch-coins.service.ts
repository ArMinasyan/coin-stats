import axios from "axios";
import endPoints from "../../common/external-endpoins";

export async function requestToFetchCoins(coinId = "bitcoin") {
  console.log(endPoints.FETCH_COINS("1m", coinId));
  const response = await axios.get(
    `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${coinId}`
  );
  ////`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${coinId}`
  return response.data;
}
