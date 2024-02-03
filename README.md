<br>
<div align='center'>
  <h1>E-Commerce App Back-end (API)</h1>
</div>
<a name="readme-top"></a>

# 📗 Table of Contents
- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [📚 API Endpoints](#api-endpoints)
  - [User Recommendation Routes](#user-recommendation-routes)
  - [Auth Routes](#auth-routes)
  - [Product Routes](#product-routes)
  - [Product Category Routes](#product-category-routes)
  - [Inventory Routes](#inventory-routes)
  - [Order Routes](#order-routes)
  - [Payment Routes](#payment-routes)
- [👥 Authors](#authors)
- [📈 Project Gallery](#gallery)
- [🔭 Added Features](#added-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)


# 🖥️ "E-Commerce" Back-end API <a name="about-project"></a>

**E-Commerce App Back-end** is the server-side component of our application, providing the necessary API endpoints and database functionality to support the seamless operation of the E-Commerce front-end. This project ensures secure authentication, manages product information, handles user profiles, and facilitates the overall functionality of our revolutionary e-commerce platform.

## ⚙️ Integration with Front-End

This back-end project is designed to seamlessly integrate with its counterpart *front-end project*. The Front-end project interacts with the API endpoints provided by this back-end, creating a complete and functional e-commerce solution.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <br>
  <ul>
    <li><a href="https://github.com/Mhamad-Raad/final-capstone-backend"><img alt="node.js" width="90px" height="35px" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /></a></li>
    <li><a href="https://expressjs.com/"><img alt="express.js" width="110px" height="35px" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /></a></li>
    <li><a href="https://www.mongodb.com/"><img alt="mongodb" width="120px" height="35px" src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" /></a></li>
    <li><a href="https://www.npmjs.com/"><img alt="npm" width="80px" height="35px" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" /></a></li>
    <li><a href="https://www.postman.com/"><img alt="postman" width="130px" height="35px" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" /></a></li>
  </ul>
</details>

#### Key Features <a name="key-features"></a>

- **API Endpoints**: This back-end project provides essential API endpoints for user authentication, product management, shopping cart functionality, and more.

- **Database Integration**: Utilizes MongoDB for efficient data storage and retrieval, ensuring the reliability and scalability of the e-commerce platform.

- **User Authentication**: Implements secure user authentication processes to protect user accounts and sensitive information.

- **Product Management**: Manages product information, categories, and inventory to support a diverse and dynamic range of items in the e-commerce store.

- **Integration with Front-End**: Seamlessly integrates with the front-end project, allowing for a cohesive and feature-rich e-commerce experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO  -->

## 🚀 Live Demo <a name="live-demo"></a>

N/A
<!-- - Explore the live functionality of the API 👉🏽 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

Prerequisites and setup instructions for the project are listed below.

<!-- Prerequisites -->
### Prerequisites <a name="prerequisites"></a>

In order to run this project, you need:
- Computer running MacOS, Linux, or Windows
- Terminal (MacOS/Linux) or Command Line (Windows)
- Git ([Download](https://git-scm.com/downloads))
- Node.js (version 14.15.4 or higher) ([Download](https://nodejs.org/en/download/))
- NPM (version 6.14.10 or higher) ([Download](https://www.npmjs.com/get-npm))
- Postman [Download](https://www.postman.com/downloads/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Setup -->
### Setup <a name="setup"></a>

1. Clone the repository:

```bash
open git bash
git clone https://github.com/MoyasiGinko/ecom-server.git
cd ecom-server
```

2. Install the dependencies:

```
npm install
```

3. Set up your environment variables: Create a `.env` file in the root directory with the following content:

```bash
PORT=3001
```

4. Start the server:

```bash
node server.js
```

5. Open your web browser and navigate to: http://localhost:3001/ to ensure the server is running.

6. Ensure the front-end project is configured to connect to this API. Follow the front-end setup instructions accordingly.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- API ENDPOINTS -->

## 📚 API Endpoints <a name="api-endpoints"></a>

### User Recommendation Routes <a name="user-recommendation-routes"></a>

- **GET /api/v1/analytic/suggestion/user/:userId**

  Retrieve product category suggestions for a given user.

  ```json
  {
    "categories": ["Men", "Women"]
  }
  ```

### Auth Routes <a name="auth-routes"></a>

- **POST /api/v1/auth/login**

  - User login.
  - **Request URL:** http://localhost:3001/api/v1/auth/login
  - **Request Type:** POST
  - **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
    
  - **Sample Response:**
    ```json
    {
      "id": 1,
      "username": null,
      "email": "user@example.com",
      "type": "CUSTOMER",
      "token": "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTcwNTc3NzQwMywiZXhwIjoxNzA2Mzc4NDAwfQ.t4HkcgiwmhdA3wiV8MtofN5y9HMhID2AN45er-sgcPiwRX39QcUISA5wZz1g1MvG",
      "enabled": true,
      "authorities": null,
      "accountNonExpired": true,
      "accountNonLocked": true,
      "credentialsNonExpired": true
    }
    ```

- **POST /api/v1/auth/register**

  - User registration.
  - **Request URL:** http://localhost:3001/api/v1/auth/register
  - **Request Type:** POST
  - **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "password123",
      "type": "CUSTOMER"
    }
    ```
    
  - **Sample Response:**
    ```json
    {
      "id": 7,
      "username": "test",
      "email": "user@example.com",
      "type": "CUSTOMER",
      "token": "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTcwNTc3NzQwMywiZXhwIjoxNzA2Mzc4NDAwfQ.t4HkcgiwmhdA3wiV8MtofN5y9HMhID2AN45er-sgcPiwRX39QcUISA5wZz1g1MvG",
      "enabled": true,
      "authorities": null,
      "accountNonExpired": true,
      "accountNonLocked": true,
      "credentialsNonExpired": true
    }
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PRODUCT ROUTES -->

### Product Routes <a name="product-routes"></a>

- **GET /api/v1/product**

  - Get all products.
  - **Request URL:** http://localhost:3001/api/v1/product
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    [
      {
        "id": 1,
        "name": "test",
        "details": "its leather",
        "brand": "dior",
        "price": 1000.0,
        "category": {"id": 1, "name": "Men"},
        "imageURL": null,
        "vendorId": 2,
        "quantity": 8.0
      },
      {
        "id": 2,
        "name": "genji",
        "details": "its leather",
        "brand": "channel",
        "price": 1000.0,
        "category": {"id": 1, "name": "Men"},
        "imageURL": null,
        "vendorId": 2,
        "quantity": 4.0
      }
    ]
    ```

- **GET /api/v1/product/:id**

  - Get product by ID.
  - **Request URL:** http://localhost:3001/api/v1/product/:id
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {
      "id": 1,
      "name": "test",
      "details": "its leather",
      "brand": "dior",
      "price": 1000.0,
      "category": {"id": 1, "name": "Men"},
      "imageURL": null,
      "vendorId": 2,
      "quantity": 8.0
    }
    ```

- **POST /api/v1/product**

  - Add product.
  - **Request URL:** http://localhost:3001/api/v1/product
  - **Request Type:** POST
  - **Request Body:**
    ```json
    [
      {
        "name": "test",
        "details": "its leather",
        "brand": "channel",
        "price": 1000.0,
        "category": {"id": 1, "name": "Men"},
        "quantity": 20,
        "imageURL": ""
      }
    ]
    ```
    
  - **Sample Response:**
    ```json
    [
      {
        "id": 5,
        "name": "test",
        "details": "its leather",
        "brand": "channel",
        "price": 1000.0,
        "category": {"id": 1, "name": "Men"},
        "imageURL": "",
        "vendorId": 1,
        "quantity": 20.0
      }
    ]
    ```

- **PUT /api/v1/product/:productId**

  - Update or edit a product.
  - **Request URL:** http://localhost:3001/api/v1/product/:productId
  - **Request Type:** PUT
  - **Request Body:**
    ```json
    {
      "name": "Updated Product Name",
      "details": "Updated details",
      "brand": "Updated Brand Name",
      "price": 129.99,
      "category": {"id": 2, "name": "Updated Category Name"},
      "imageURL": "https://example.com/updated-image.jpg",
      "quantity": 15
    }
    ```
    
  - **Sample Response:**
    ```json
    {
      "id": 1,
      "name": "Updated Product Name",
      "details": "Updated details",
      "brand": "Updated Brand Name",
      "price": 129.99,
      "category": {"id": 2, "name": "Updated Category Name"},
      "imageURL": "https://example.com/updated-image.jpg",
      "vendorId": 2,
      "quantity": 15.0
    }
    ```

- **DELETE /api/v1/product/:productId**

  - Delete product by productId.
  - **Request URL:** http://localhost:3001/api/v1/product/:productId
  - **Request Type:** DELETE
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {
      "message": "Product Deleted Successfully"
    }
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PRODUCT CATEGORY ROUTES -->

### Product Category Routes <a name="product-category-routes"></a>

- **POST /api/v1/product-category**

  - Create product category.
  - **Request URL:** http://localhost:3001/api/v1/product-category
  - **Request Type:** POST
  - **Request Body:**
    ```json
    [
      {"name": "Category 1"}
    ]
    ```
    
  - **Sample Response:**
    ```json
    [
      {"id": 8, "name": "Category 1"}
    ]
    ```

- **GET /api/v1/product-category**

  - Get all product categories.
  - **Request URL:** http://localhost:3001/api/v1/product-category
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    [
      {"id": 1, "name": "Men"},
      {"id": 2, "name": "Women"}
    ]
    ```

- **GET /api/v1/product-category/:categoryId**

  - Get product category by ID.
  - **Request URL:** http://localhost:3001/api/v1/product-category/:categoryId
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {"id": 2, "name": "Women"}
    ```

- **PATCH /api/v1/product-category/:categoryId**

  - Update product category.
  - **Request URL:** http://localhost:3001/api/v1/product-category/:categoryId
  - **Request Type:** PATCH
  - **Request Body:**
    ```json
    {"name": "Updated Category Name"}
    ```
    
  - **Sample Response:**
    ```json
    {"id": 6, "name": "Updated Category Name"}
    ```

- **DELETE /api/v1/product-category/:categoryId**

  - Delete product category by categoryId.
  - **Request URL:** http://localhost:3001/api/v1/product-category/:categoryId
  - **Request Type:** DELETE
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {"message": "Category Deleted Successfully"}
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INVENTORY ROUTES -->

<!--
### Inventory Routes <a name="inventory-routes"></a>

- **POST /api/v1/inventory**

  - Create inventory item.
  - **Request URL:** http://localhost:3001/api/v1/inventory
  - **Request Type:** POST
  - **Request Body:**
    ```json
    {
      "productId": 1,
      "productName": "Product Name",
      "quantity": 5
    }
    ```
    
  - **Sample Response:**
    ```json
    {
      "id": 5,
      "vendorId": 1,
      "vendorEmail": "mailto:test@gmail.com",
      "productId": 1,
      "quantity": 5,
      "productName": "Product Name"
    }
    ```

- **GET /api/v1/inventory**

  - Get all inventory items.
  - **Request URL:** http://localhost:3001/api/v1/inventory
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    [
      {
        "id": 1,
        "vendorId": 2,
        "vendorEmail": "mailto:test1@gmail.com",
        "productId": 1,
        "quantity": 5,
        "productName": "pajama"
      },
      {
        "id": 2,
        "vendorId": 2,
        "vendorEmail": "mailto:test1@gmail.com",
        "productId": 2,
        "quantity": 40,
        "productName": "genji"
      }
    ]
    ```

- **GET /api/v1/inventory/:inventoryId**

  - Get inventory item by ID.
  - **Request URL:** http://localhost:3001/api/v1/inventory/:inventoryId
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {
      "id": 1,
      "vendorId": 2,
      "vendorEmail": "mailto:test1@gmail.com",
      "productId": 1,
      "quantity": 5,
      "productName": "pajama"
    }
    ```

- **PUT /api/v1/inventory/:inventoryId**

  - Update inventory item.
  - **Request URL:** http://localhost:3001/api/v1/inventory/:inventoryId
  - **Request Type:** PUT
  - **Request Body:**
    ```json
    {
      "productName": "Updated Product Name",
      "quantity": 8
    }
    ```
    
  - **Sample Response:**
    ```json
    {
      "id": 2,
      "vendorId": 2,
      "vendorEmail": "mailto:test1@gmail.com",
      "productId": 2,
      "quantity": 8,
      "productName": "Updated Product Name"
    }
    ```

- **DELETE /api/v1/inventory/:inventoryId**

  - Delete inventory item by inventoryId.
  - **Request URL:** http://localhost:3001/api/v1/inventory/:inventoryId
  - **Request Type:** DELETE
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {"message": "Inventory Deleted Successfully"}
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->

<!-- ORDER ROUTES -->

### Order Routes <a name="order-routes"></a>

- **POST /api/v1/order**

  - Create an order.
  - **Request URL:** http://localhost:3001/api/v1/order
  - **Request Type:** POST
  - **Request Body:**
    ```json
    {
      "totalPrice": 299.99,
      "productList": [
        {"productId": 1, "quantity": 2, "price": 99.99, "name": "Product 1", "categoryId": 1, "categoryName": "Category 1"},
        {"productId": 2, "quantity": 1, "price": 100.0, "name": "Product 2", "categoryId": 2, "categoryName": "Category 2"}
      ]
    }
    ```
    
  - **Sample Response:**
    ```json
    {
      "id": 2,
      "orderDate": "2024-01-21",
      "status": "ORDERED",
      "customerId": 2,
      "paymentId": null,
      "totalPrice": 299.99,
      "productList": [
        {"quantity": 2, "productQuantity": 10, "productId": 1, "price": 99.99, "name": "Product 1", "categoryId": 1, "categoryName": "Category 1"},
        {"quantity": 1, "productId": 2, "productQuantity": 10, "price": 100.0, "name": "Product 2", "categoryId": 2, "categoryName": "Category 2"}
      ],
      "orderDetails": [
        {"id": 3, "productId": 1, "quantity": 2.0, "price": 99.99, "name": "Product 1", "categoryId": 1, "categoryName": "Category 1"},
        {"id": 4, "productId": 2, "quantity": 1.0, "price": 100.0, "name": "Product 2", "categoryId": 2, "categoryName": "Category 2"}
      ]
    }
    ```

- **GET /api/v1/orders**

  - Get all orders.
  - **Request URL:** http://localhost:3001/api/v1/orders
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    [
      {
        "id": 1,
        "orderDate": "2024-01-20",
        "status": "SHIPPED",
        "customerId": 1,
        "paymentId": 1,
        "totalPrice": 200.0,
        "productList": [
          {"quantity": 2, "productQuantity": 5, "productId": 1, "price": 100.0, "name": "pajama", "categoryId": 1, "categoryName": "Men"}
        ],
        "orderDetails": [
          {"id": 1, "productId": 1, "quantity": 2.0, "price": 100.0, "name": "pajama", "categoryId": 1, "categoryName": "Men"}
        ]
      },
      {
        "id": 2,
        "orderDate": "2024-01-21",
        "status": "ORDERED",
        "customerId": 2,
        "paymentId": null,
        "totalPrice": 299.99,
        "productList": [
          {"quantity": 2, "productQuantity": 10, "productId": 1, "price": 99.99, "name": "Product 1", "categoryId": 1, "categoryName": "Category 1"},
          {"quantity": 1, "productId": 2, "productQuantity": 10, "price": 100.0, "name": "Product 2", "categoryId": 2, "categoryName": "Category 2"}
        ],
        "orderDetails": [
          {"id": 3, "productId": 1, "quantity": 2.0, "price": 99.99, "name": "Product 1", "categoryId": 1, "categoryName": "Category 1"},
          {"id": 4, "productId": 2, "quantity": 1.0, "price": 100.0, "name": "Product 2", "categoryId": 2, "categoryName": "Category 2"}
        ]
      }
    ]
    ```

- **GET /api/v1/orders/:orderId**

  - Get order by ID.
  - **Request URL:** http://localhost:3001/api/v1/orders/:orderId
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {
      "id": 2,
      "orderDate": "2024-01-21",
      "status": "ORDERED",
      "customerId": 2,
      "paymentId": null,
      "totalPrice": 299.99,
      "productList": [
        {"quantity": 2, "productQuantity": 10, "productId": 1, "price": 99.99, "name": "Product 1", "categoryId": 1, "categoryName": "Category 1"},
        {"quantity": 1, "productId": 2, "productQuantity": 10, "price": 100.0, "name": "Product 2", "categoryId": 2, "categoryName": "Category 2"}
      ],
      "orderDetails": [
        {"id": 3, "productId": 1, "quantity": 2.0, "price": 99.99, "name": "Product 1", "categoryId": 1, "categoryName": "Category 1"},
        {"id": 4, "productId": 2, "quantity": 1.0, "price": 100.0, "name": "Product 2", "categoryId": 2, "categoryName": "Category 2"}
      ]
    }
   ```

- **PATCH /api/v1/orders/:orderId**

  - Update order status.
  - **Request URL:** http://localhost:3001/api/v1/orders/:orderId
  - **Request Type:** PATCH
  - **Request Body:**
    ```json
    {"status": "SHIPPED"}
    ```
  - **Sample Response:**
    ```json
    {"message": "Order Status Updated Successfully"}
    ```

- **DELETE /api/v1/orders/:orderId**

  - Delete order by orderId.
  - **Request URL:** http://localhost:3001/api/v1/orders/:orderId
  - **Request Type:** DELETE
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {"message": "Order Deleted Successfully"}
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- VENDOR ROUTES -->

### Vendor Routes <a name="vendor-routes"></a>

- **GET /api/v1/product/vendor/:vendorId**

  - Get all product specified to vendor only.
  - **Request URL:** http://localhost:3001/api/v1/product/vendor/:vendorId
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
	[
	    {
	        "id": 1,
	        "name": "test",
	        "details": "its leather",
	        "brand": "dior",
	        "price": 1000,
	        "category": {
	            "id": 1,
	            "name": "Men"
	        },
	        "imageURL": "https://media.allure.com/photos/655b7fc12b7a01b4af8cd993/master/pass/_best_hair_oil_003.jpg",
	        "vendorId": 2,
	        "quantity": 8
	    },
	    {
	        "id": 2,
	        "name": "genji",
	        "details": "its leather",
	        "brand": "channel",
	        "price": 1000,
	        "category": {
	            "id": 2,
	            "name": "Women"
	        },
	        "imageURL": "https://static01.nyt.com/images/2023/07/13/dining/13food-aspartame2/13food-aspartame2-superJumbo.jpg",
	        "vendorId": 2,
	        "quantity": 4
	    }
	]
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PAYMENT ROUTES -->

### Payment Routes <a name="payment-routes"></a>

- **POST /api/v1/payment**

  - Process payment.
  - **Request URL:** http://localhost:3001/api/v1/payment
  - **Request Type:** POST
  - **Request Body:**
    ```json
    {
      "customerId": 1,
      "orderId": 1,
      "amount": 200.0,
      "paymentMethod": "CREDIT_CARD",
      "cardDetails": {"cardNumber": "1234567812345670", "expiryDate": "12/23", "cvv": "123"}
    }
    ```
    
  - **Sample Response:**
    ```json
    {
      "id": 3,
      "customerId": 1,
      "orderId": 1,
      "amount": 200.0,
      "status": "SUCCESS",
      "paymentMethod": "CREDIT_CARD",
      "cardDetails": {"cardNumber": "1234567812345670", "expiryDate": "12/23", "cvv": "123"}
    }
    ```

- **GET /api/v1/payment/:paymentId**

  - Get payment by ID.
  - **Request URL:** http://localhost:3001/api/v1/payment/:paymentId
  - **Request Type:** GET
  - **Request Body:** N/A
  - **Sample Response:**
    ```json
    {
      "id": 3,
      "customerId": 1,
      "orderId": 1,
      "amount": 200.0,
      "status": "SUCCESS",
      "paymentMethod": "CREDIT_CARD",
      "cardDetails": {"cardNumber": "1234567812345670", "expiryDate": "12/23", "cvv": "123"}
    }
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors (in alphabetical order)<a name="authors"></a>

This project was developed by:

👤 **Moyasi Ginko**
- GitHub: [@MoyasiGinko](https://github.com/MoyasiGinko)
- LinkedIn: [moyasi](https://www.linkedin.com/in/moyasi/)
- Twitter: [@moyasi_ginko](https://twitter.com/moyasi_ginko)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT GALLERY -->

## 📈 Project Gallery<a name="gallery"></a>

The project's gallery is available [here](https://github.com/MoyasiGinko/ecom-server/issues/1)

![Screenshot 2024-01-29 105603](https://github.com/MoyasiGinko/E-commerce-project/assets/108092696/85bb6c3d-00db-4aff-bd88-28f0f0d660c2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ADDED FEATURES -->

## 🔭 Added Features <a name="added-features"></a>

- [ ] **Add user authentication**
- [ ] **Add user authorization**
- [ ] **Add user roles; CUSTOMER, VENDOR, and ADMIN**

- [ ] **Add products**
- [ ] **Add edit product details**
- [ ] **Add delete product**

- [ ] **Add product categories**
- [ ] **Add edit product categories**
- [ ] **Add delete product categories**

- [ ] **Add shopping cart**
- [ ] **Add checkout process**
- [ ] **Add payment processing**
- [ ] **Add PayPal integration**

- [ ] **Add user orders**
- [ ] **Add order tracking**
- [ ] **Add order history**

- [ ] **Add vendor features**
- [ ] **Add vendor product management**
- [ ] **Add vendor order fulfillment**

- [ ] **Add analytics**
- [ ] **Add recommendation engine**

- [ ] **Add front-end integration**
- [ ] **Add responsive design**
- [ ] **Add cross-browser compatibility**
- [ ] **Add progressive web app (PWA) features**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions are what make the open-source community such an amazing place to be a part of. Any contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you found this project interesting and helpful!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgements <a name="acknowledgements"></a>

- [OpenAI](https://beta.openai.com/signup/) for providing the GPT-3 language model.
- [GitHub](https://github.com/) for hosting our version control system.
- [Postman](https://www.postman.com/downloads/) for testing your API endpoints.
- [Express.js](https://expressjs.com/) for building robust and scalable server applications.
- [Node.js](https://nodejs.org/) for the JavaScript runtime environment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
