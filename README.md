# 🍽️ YumYum Recipes – Backend

Welcome to the **backend** of **YumYum Recipes**, a feature-rich web application where users can explore, like, and manage their favorite recipes!  
This backend is built with **Node.js**, **Express**, and **MongoDB Atlas**, and it powers a dynamic and secure recipe experience. Deployed live on **Replit** 🚀


---

## ⚙️ Key Features

- 🔐 **JWT Authentication** — Secure login & signup functionality  
- ❤️ **Like Recipes** — Authenticated users can like and view their saved recipes  
- 🧠 **Clean & Modular Code** — Organized folders for routes, models, and middleware  
- 🔗 **CORS-Enabled** — Communicates smoothly with your Vercel-deployed frontend  
- 🌍 **MongoDB Atlas Integration** — Cloud-hosted database for scalability

---

## 🧰 Tech Stack

| Tech             | Use                               |
|------------------|------------------------------------|
| **Node.js**       | Runtime environment               |
| **Express.js**    | Backend web framework             |
| **MongoDB Atlas** | Cloud database                    |
| **Mongoose**      | MongoDB object modeling (ODM)     |
| **JWT**           | Secure user authentication        |
| **dotenv**        | Environment variables             |
| **Replit**        | Hosting the backend server        |

---

## 📁 Folder Structure

```
📦 YumYum_Recipes_Backend
├── 📂 models # Mongoose data schemas
│ └── User.js
│ └── likdRecipe.js
├── 📂 routes # Express route handlers
│ ├── Auth.js
│ └── likedRecipe.js
├── 📂 middleware
| └── authmiddleware.js
├── .env # MongoDB URI and secrets
├── index.js # Entry point of the app
└── package.json

```




