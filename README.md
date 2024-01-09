
# CedricPizzaApi

CedricPizzaApi is an api to simplify the api of "Les pizzas de Cédric" app 
(https://play.google.com/store/apps/details?id=appyness.pizzasdecedric&pcampaignid=web_share)

This api send request to the app api and CedricPizzaApi will return you a simplified response. CedricPizzaApi is an intermediate.






## API Reference

#### Get all distributors

`
  GET /distributors
`
| Parameter | Type     | Description                              |Return value            |
| :-------- | :------- | :----------------------------------------|:-----------------------|
|           |          |                                          |An array of distributors|

````
[
    {
        name:nameDistributor,
        id:idDistributor
    },
    ...
]
````

#### Get pizzas of a distributor

`
  GET /pizzas/id
`

| Parameter | Type     | Description                              |Return value      |
| :-------- | :------- | :----------------------------------------|:-----------------|
| `id`      | `string` | **Required**. Id of distributor to fetch |An array of pizzas|

````
[
    {
        id:idPizza,
        name:namePizza,
        quantity:quantityPizza,
        price:pricePizza,
        ingredients:[ing1, ing2,...]
    },
    ...
]
````


## Development
There will be a lot of changes like app structure and the possibility of the api in the future.
## Tech Stack
Node, Express, SuperAgent

