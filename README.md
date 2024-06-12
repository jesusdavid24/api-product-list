# REST API for CRUD app product list

This repository contains a REST API for managing a product list, built using Node.js and Express. 
The API allows for creating, reading, updating, and deleting products.

## Feature

- Built with Node.js and Express: Provides a robust and scalable server-side framework.
- JavaScript: Written in JavaScript for a familiar and widely-used development experience.
- REST API: Follows REST principles for easy integration and use.

## Prerequisites

- [Git](https://git-scm.com/downloads)
-  [Node.js and npm](https://nodejs.org)

## Express Router and Routes

| Route        | HTTP Verb |      Description         |
| -------------| --------- | ------------------------ |
| /healthcheck | GET       | Test for API healthcheck |
| /product     | GET       | Get list of all products |
| /product     | POST      | Creates a new product     |
| /product/:id | PUT       | Updates a product        |
| /product/:id | DELETE    | Deletes a product        |


### Basic example **Create Product** `/product/createProduct  `:

Request Body:
```json
{
  "product_name": "sabanas",
  "color": "blanco",
  "category": "HOME",
  "price": "100",
}
```

Response:

```json
{
    "product_name": "sabanas",
    "color": "blanco",
    "category": "home",
    "price": "100",
    "id": 1
}
```

### Developing

1. Clone the repository: `https://github.com/jesusdavid24/api-product-list.git`

2. cd your-repository

3. Run `npm install` to install server dependencies.

4. Create a `.env` file in the root directory.
 
5. Define `PORT=3001` as enviroment variable in `.env` file.

6. Run `npm run dev` to start the development server.

## Authors 👊

This project was created by [jesusdavid24](https://github.com/jesusdavid24)