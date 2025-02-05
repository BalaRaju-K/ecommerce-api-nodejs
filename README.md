# 🛍️ E-Commerce API (Node.js & MySQL)
##  Overview
This is a backend API for an E-Commerce website, built using Node.js, Express.js, Sequelize, and MySQL. It supports user authentication, role-based access control (Admin, Staff, Vendor, Buyer), product management, and secure API endpoints.

## 📌 Features
✅ User Roles: Admin, Staff, Vendor, Buyer<br>
✅ Authentication & Authorization: JWT-based secure login<br>
✅ CRUD Operations: Manage users and products<br>
✅ Role-Based Access: Different permissions for Admin, Staff, Vendors & Buyers<br>
✅ Database: MySQL with Sequelize ORM<br>
✅ Secure Passwords: Hashed using bcrypt.js<br>
✅ Middleware: Authentication & Authorization<br>

## 🛠️ Tech Stack
Backend: Node.js, Express.js<br>
Database: MySQL, Sequelize ORM<br>
Authentication: JWT (JSON Web Token)<br>
Security: bcrypt.js (password hashing)<br>
Tools: Postman for API testing<br>

## 📦 Installation & Setup

1 Install Dependencies
npm install

2 Configure Database (MySQL)
Create a .env file in the root directory and add:

DB_NAME=ecommerce_db<br>
DB_USER=root<br>
DB_PASS=yourpassword<br>
DB_HOST=localhost<br>
DB_DIALECT=mysql<br>
JWT_SECRET=your_secret_key<br>

3 Run Database Migrations
node server.js

4 Start the Server
npm start
API will be live at http://localhost:5000 

## 🔥 API Endpoints
Authentication<br>
Method	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Endpoint	           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description<br>
POST	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/api/auth/register	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register a new user (Admin/Vendor/Buyer)<br>
POST	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/api/auth/login	     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login and get JWT token<br>

Admin APIs<br>
Method	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Endpoint	            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description<br>
GET	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/api/admin/users	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View all registered users<br>
POST	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/api/products	        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a new product<br>
GET	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/api/products	        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View all products<br>
GET	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/api/products/:id	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View a single product<br>
PUT	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/api/products/:id	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update a product<br>
DELETE	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/api/products/:id	   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Delete a product<br>

## 📝 Postman Collection  
You can test all APIs using **Postman**.  
[🔗 Download Postman Collection](https://github.com/BalaRaju-K/ecommerce-api-nodejs/blob/main/E-commerce%20API.postman_collection.json)

## 👨‍💻 Author
Developed by [Bala Raju]

## 📜 License
This project is licensed under the MIT License.
