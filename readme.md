## API Documentation

<a style="font-size: 20px"> 
			<span style="color: blue">GET</span>  /coins
</a>

### Description 

Get all user list by given query parameter, all parameters is optional.
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
| - | - | - | - | - | - |
| currency | Currency | string | query | true

<a style="font-size: 20px; color: black"> Responses </a>

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | - | 
| False | 400 | Validation errors | - 

<hr>

<a style="font-size: 20px"> 
			<span style="color: blue">Get by id</span>  /coins/{coinId}
</a>
<a style="font-size: 20px; color: black"> Description </a>

Get user data by give id, where user id is required.

<a style="font-size: 20px; color: black"> Parameters </a>

| Name | Description | Type | Location | Required
| - | - | - | - |
| coinId | Coin ID | string | param | true

<a style="font-size: 20px; color: black"> Responses </a>

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | - | -
| False | 400 | Validation error | -


