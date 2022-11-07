import { query } from "express-validator";

const availableFiatCurrency: string[] = [
  "AUD",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "PLN",
  "RON",
  "RUB",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "ZAR",
  "USD",
  "AMD",
  "IRR",
  "NGN",
  "SAR",
  "PKR",
  "HTG",
  "TWD",
  "PAB",
  "LKR",
  "UAH",
  "PEN",
  "MAD",
  "BOB",
  "AOA",
  "MDL",
  "SDG",
  "COP",
  "CRC",
  "DOP",
  "BDT",
  "GEL",
  "ETB",
];
const coinValidator = [
  query("currency")
    .not()
    .isEmpty()
    .custom((value) => {
      if (
        !(
          value?.startsWith("fiat") &&
          availableFiatCurrency.includes(value?.slice(4))
        )
      ) {
        throw new Error("Invalid fiat value");
      }

      return true;
    }),
];

export { coinValidator };
