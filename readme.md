# 🛍️ ShoppyGlobe - E-commerce Application

ShoppyGlobe is a modern **E-commerce application** built using **React, Redux, and React Router**. It allows users to **browse products, view product details, add/remove items to/from the cart, and manage cart quantities**.

---

## 🎯 Features
✅ **Product Listing** - Fetch products from an API  
✅ **Product Details Page** - View individual product information  
✅ **Add to Cart** - Add items to the shopping cart  
✅ **Cart Management** - Update or remove cart items  
✅ **Cart Item Count** - Dynamic cart badge in the navigation  
✅ **Search Functionality** - Search for products  
✅ **Redux for State Management** - Manage cart state globally  
✅ **Lazy Loading** - Faster performance using `React.lazy()`  
✅ **Responsive Design** - Works on all devices  
✅ **Animations & Transitions** - Smooth UI interactions  

---

## 🏗️ Tech Stack
- **Frontend:** React, Redux, React Router  
- **State Management:** Redux Toolkit  
- **Styling:** CSS3 with animations & transitions  
- **Icons:** React Icons  
- **API:** DummyJSON API (`https://dummyjson.com/products`)  

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Karthiksai01/Shoppy-globe/tree/main/shoppyglobe
cd ShoppyGlobe

## 📂 Folder Structure

ShoppyGlobe/
│── public/               # Static files
│── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── NotFound.jsx
│   ├── redux/            # Redux store setup
│   │   ├── store.js
│   │   ├── productSlice.js
│   │   ├── cartSlice.js
│   ├── App.js            # Main App component with routes
│   ├── App.css           # Global styles
│── package.json          # Project metadata & dependencies
│── README.md             # Project documentation

#📜 Usage Guide
#🏠 Home Page (/)
# Displays a list of products.
# Users can search for products.
#Clicking  "Add to Cart" adds the item to the cart.
🔍 Product Detail Page (/product/:id)
Shows product details like image, title, description, and price.
Users can add the product to the cart.
#🛒 Cart Page (/cart)
Displays all items added to the cart.
Users can update quantity or remove items.
Shows the total price.