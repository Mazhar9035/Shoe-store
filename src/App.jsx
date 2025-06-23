// import React, { useState } from "react";
// import ShoeList from "./components/ShoeList";
// import Cart from "./components/Cart";
// import "./App.css";

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (shoe) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((item) => item.id === shoe.id);
//       if (existing) {
//         return prevCart.map((item) =>
//           item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...shoe, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   return (
//     <div className="container">
//       <h1 className="main-heading">Online Shoe Store</h1>
//       <div className="main">
//         <ShoeList addToCart={addToCart} />
//         <Cart cart={cart} removeFromCart={removeFromCart} />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === shoe.id);
      if (exists) {
        return prev.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...shoe, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <ShoeList addToCart={addToCart} />
        <Cart cart={cart} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}

export default App;
