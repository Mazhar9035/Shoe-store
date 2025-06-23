// import React from "react";

// const Cart = ({ cart, removeFromCart }) => {
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className="cart-item">
//             <span>
//               {item.name} (x{item.quantity})
//             </span>
//             <span>₹{item.price * item.quantity}</span>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//       <h3>Total: ₹{total}</h3>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import "./Cart.css";

const Cart = ({ cart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <span>{item.name}</span>
              <span>Price: ${item.price}</span>
            </div>
            <div className="cart-actions">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
        ))
      )}
      <hr />
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
