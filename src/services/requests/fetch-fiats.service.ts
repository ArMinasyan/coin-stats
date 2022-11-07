import axios from "axios";
import endPoints from "../../common/external-endpoins";

export async function requestToFetchFiats(currency: string | null = null) {
  const response = await axios.get(endPoints.FETCH_FIATS);
  if (currency) {
    return response.data.filter((fiat: any) => fiat.name === currency)[0];
  }

  return response.data;
}
