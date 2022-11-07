export default {
  FETCH_FIATS: `https://api.coinstats.app/public/v1/fiats`,
  FETCH_COINS: (period = "1m", coinId = "ethereum") => {
    return `https://api.coinstats.app/public/v1/charts?period=${period}&coinId=${coinId}`;
  },
};
