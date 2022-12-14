## API Documentation

All response have this structure:
``` 
{
  statusCode: number;
  success: boolean;
  data: any;
  message: string;
  validationError: {
      property: string;
      message: string;
  } | {};
}
```
#

<a style="font-size: 20px"> 
			<span style="color: blue">GET</span>  /coins
</a>

### Description 

Currency must be start with fiat, and can be any currency, available 
currencies are "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", 
"EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", 
"KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", 
"SGD", "THB", "TRY", "ZAR", "USD", "AMD", "IRR", "NGN", "SAR", "PKR", 
"HTG", "TWD", "PAB", "LKR", "UAH", "PEN", "MAD", "BOB", "AOA", "MDL", 
"SDG", "COP", "CRC", "DOP", "BDT", "GEL", "ETB".

Currency can be also coinId, for example bitcoin, ethereum

### Parameters 


| Name | Description | Type | Location | Required 
| - | - | - | - | - |
| currency | Currency | string | query | true 

### Responses

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | - | 
| False | 400 | Validation errors | - 

<hr>

<a style="font-size: 20px"> 
			<span style="color: blue">Get by id</span>  /coins/{coinId}
</a>

### Description

Get coin data by give coinId, where coinId id is required.

### Parameters

| Name | Description | Type | Location | Required
| - | - | - | - | - |
| coinId | Coin ID | string | param | true

### Responses 

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | - | -
| False | 400 | Validation error | -


