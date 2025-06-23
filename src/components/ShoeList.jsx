// import React from "react";
// import ShoeCard from "./ShoeCard";

// const shoes = [
//   { id: 1, name: "Nike Air", price: 150, image: "/images/nike-air.jpg" },
//   {
//     id: 2,
//     name: "Adidas Ultra Boost",
//     price: 120,
//     image: "/images/adidas-boost.jpg",
//   },
//   { id: 3, name: "Puma Rider", price: 100, image: "/images/puma-rider.jpg" },
// ];

// const ShoeList = ({ addToCart }) => {
//   return (
//     <div className="shoe-list">
//       <h2>Available Shoes</h2>
//       {shoes.map((shoe) => (
//         <ShoeCard key={shoe.id} shoe={shoe} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };

// export default ShoeList;

import React from "react";
import "./ShoeList.css";

const products = [
  {
    id: 1,
    name: "Nike Classic Sneaker",
    price: 75,
    image: "/image7.jpg",
  },
  {
    id: 2,
    name: "Nike Running Shoes",
    price: 80,
    image: "/image2.avif",
  },
  {
    id: 3,
    name: "Nike Running Shoes",
    price: 80,
    image: "/image3.jpeg",
  },
  {
    id: 4,
    name: "Nike Running Shoes",
    price: 80,
    image: "/image4.webp",
  },
  {
    id: 5,
    name: "Nike classic Shoes",
    price: 80,
    image: " /image1.webp",
  },
  {
    id: 6,
    name: "Nike classic Shoes",
    price: 80,
    image: "/image6.jpeg",
  },
];

const ShoeList = ({ addToCart }) => (
  <div className="product-list">
    <h2>Available Shoes</h2>
    <div className="product-grid">
      {products.map((shoe) => (
        <div key={shoe.id} className="product-card">
          <img src={shoe.image} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>${shoe.price}</p>
          <button onClick={() => addToCart(shoe)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

export default ShoeList;
