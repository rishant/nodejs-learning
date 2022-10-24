GET Request: http://localhost:3525/api/products

POST Request: http://localhost:3525/api/products
Body:
{
    "product_name": "Amazon Alexa",
    "retail_price": 4556.99
}

GET Request: http://localhost:3525/api/tutorials
GET Request: http://localhost:3525/api/tutorials?title=[java]

curl -x <REQUEST_METHOD> <RESOURCE_URI> -H <HEADER_PARAMS> -d <REQUEST_BODY>
curl -X PUT http://127.0.0.1:8080/products/3 -H 'Content-Type: application/json' -d '{"product_name":"RECHARGEABLE LED TORCH","retail_price": 40.20}'

