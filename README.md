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
- [👥 Authors](#authors)
- [📈 Gallery](#gallery)
- [🔭 Endpoints](#endpoints)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)


# 🖥️ "E-Commerce" Back-end  <a name="about-project"></a>

**E-Commerce App Back-end** is the server-side of an application that revolutionizes the e-commerce industry. It provides API endpoints for user authentication, product management, inventory tracking, order creation, and payment processing. Seamlessly integrate this backend with the front-end for a complete e-commerce solution.

## ⚙️ Integration with Front-End

This backend project seamlessly integrates with its counterpart *front-end project*. The front-end project communicates with these API endpoints to enable features like user authentication, product management, order creation, and payment processing.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <br>
  <ul>
    <a href="https://www.npmjs.com/package/express">
      <img alt="ruby" width="90px"  height="35px" src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
    </a>
    <br>
    <a href="https://www.npmjs.com/package/cors">
      <img alt="ruby" width="110px"  height="35px" src="https://img.shields.io/badge/CORS-563D7C?style=for-the-badge&logo=cors&logoColor=white" />
    </a>
    <br>
    <a href="https://www.npmjs.com/package/body-parser">
      <img alt="ruby" width="130px"  height="35px" src="https://img.shields.io/badge/Body%20Parser-47B881?style=for-the-badge&logo=body&logoColor=white" />
    </a>
    <br>
    <a href="https://www.npmjs.com/package/jsonwebtoken">
      <img alt="ruby" width="150px"  height="35px" src="https://img.shields.io/badge/JSON%20Web%20Tokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
    </a>
    <br>
  </ul>
</details>

#### Key Features <a name="key-features"></a>

- User Authentication: Secure user authentication with JSON Web Tokens (JWT).

- Product Management: API endpoints for adding, updating, and deleting products.

- Inventory Tracking: Track product inventory with dedicated endpoints.

- Order Creation: Create orders with details like total price and product list.

- Payment Processing: API endpoints for handling payments and transactions.

- CORS Support: Cross-Origin Resource Sharing support for secure communication with the front-end.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO  -->

## 🚀 Live Demo <a name="live-demo"></a>

N/A
<!-- - Enjoy the live version of the app 👉🏽 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

Prerequisites and setup instructions for the backend project are listed below.

<!-- Prerequisites -->
### Prerequisites <a name="prerequisites"></a>

In order to run this project you need:
- Computer running MacOS, Linux or Windows
- Terminal (MacOS/Linux) or Command Line (Windows)
- Git ([Download](https://git-scm.com/downloads))
- Node.js (version 14.15.4 or higher) ([Download](https://nodejs.org/en/download/))


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

3. Modify your local environment: Create a `.env` file in the root directory and add the following lines:

```bash
PORT=3001
```

4. Start the server:

```bash
node server.js
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

<!-- KANBAN BOARD -->

## 📈 Project Gallery<a name="gallery"></a>

The project's gallery is available [here](https://github.com/MoyasiGinko/ecom-server/issues/1)

![Screenshot 2024-01-29 105603](https://github.com/MoyasiGinko/E-commerce-project/assets/108092696/85bb6c3d-00db-4aff-bd88-28f0f0d660c2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ENDPOINTS -->

## 🔭 Endpoints <a name="endpoints"></a>

### User Authentication Routes

- `POST /api/v1/auth/login`: User login route.
- `POST /api/v1/auth/register`: User registration route.

### Product Routes

- `GET /api/v1/product`: Retrieve all products.
- `GET /api/v1/product/:id`: Retrieve a specific product by ID.
- `POST /api/v1/product`: Add a new product.
- `PUT /api/v1/product/:productId`: Update a specific product by ID.
- `DELETE /api/v1/product/:productId`: Delete a specific product by ID.
- `GET /api/v1/product/vendor/:vendorId`: Retrieve products by vendor ID.

### Product Category Routes

- `POST /api/v1/product-category`: Add a new product category.
- `GET /api/v1/product-category`: Retrieve all product categories.
- `GET /api/v1/product-category/:categoryId`: Retrieve a specific product category by ID.
- `PATCH /api/v1/product-category/:categoryId`: Update a specific product category by ID.
- `DELETE /api/v1/product-category/:categoryId`: Delete a specific product category by ID.

### Inventory Routes

- `POST /api/v1/inventory`: Add a new inventory item.
- `GET /api/v1/inventory`: Retrieve all inventory items.
- `GET /api/v1/inventory/:inventoryId`: Retrieve a specific inventory item by ID.
- `PUT /api/v1/inventory/:inventoryId`: Update a specific inventory item by ID.
- `DELETE /api/v1/inventory/:inventoryId`: Delete a specific inventory item by ID.

### Order Routes

- `POST /api/v1/order`: Create a new order.
- `GET /api/v1/orders`: Retrieve all orders.
- `GET /api/v1/orders/:orderId`: Retrieve a specific order by ID.

### Payment Routes

- `POST /api/v1/payment`: Process a new payment.
- `GET /api/v1/payments`: Retrieve all payments.

### Other Routes

- `GET /api/v1/analytic/suggestion/user/:userId`: Retrieve user recommendations.
- `GET /api/v1/orders`: Retrieve all orders.
- `GET /api/v1/orders/:orderId`: Retrieve a specific order by ID.
- `GET /api/v1/payments`: Retrieve all payments.

### Static File Serving

Static files from the 'public' directory are served.

### Server Start

The server starts listening on the specified port (either `process.env.PORT` or `3001` by default).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions are welcome! Feel free to open issues or submit pull requests.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you find this project helpful, please consider giving it a ⭐️!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Thanks to everyone who contributes to this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.
