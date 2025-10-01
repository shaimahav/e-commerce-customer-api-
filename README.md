# 🛒 E-commerce Customer API

A **RESTful backend API** for an **e-commerce platform**, built using
**Node.js, Express, and MongoDB**.\
This API provides secure authentication, product management, and
protected routes for customer operations.

------------------------------------------------------------------------

## 🔧 Features

-   🔐 **User Authentication** with JWT\
-   📦 **Product CRUD operations** (Create, Read, Update, Delete)\
-   🛡 **Protected Routes** (accessible only to authenticated users)\
-   🗄 **MongoDB Integration** using Mongoose\
-   🌍 RESTful API design

------------------------------------------------------------------------

## 🚀 Tech Stack

-   **Node.js**\
-   **Express.js**\
-   **MongoDB**\
-   **Mongoose**\
-   **JWT (JSON Web Token)**\
-   **dotenv**

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

``` bash
git clone https://github.com/Mizba-Hub/e-commerce-customer-api.git
cd e-commerce-customer-api
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a config file at `config/config.env` and add the following:

``` env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

### 4️⃣ Start the Server

``` bash
npm start
```

------------------------------------------------------------------------


## 📡 API Endpoints

### 🔑 Authentication

-   `POST /api/v1/auth/register` → Register a new user\
-   `POST /api/v1/auth/login` → Login and get token

### 📦 Products

-   `GET /api/v1/products` → Get all products\
-   `GET /api/v1/products/:id` → Get single product\
-   `POST /api/v1/products` → Create product (protected)\
-   `PUT /api/v1/products/:id` → Update product (protected)\
-   `DELETE /api/v1/products/:id` → Delete product (protected)

------------------------------------------------------------------------

## 🧪 Testing

Use **Postman** or **Insomnia** to test the endpoints.\
Make sure to include the `Authorization: Bearer <token>` header for
protected routes.

------------------------------------------------------------------------

