import { useState, useEffect } from "react";
import "./cart-button.css";

export default function CartButton({ productsCount }) {
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    setCounter(productsCount);
  }, [productsCount]);

  return (
    <button className="cartBtn">
      <i className="fa-solid fa-cart-shopping"></i>
      {counter.length > 0 ? <span>{counter.length}</span> : ""}
    </button>
  );
}
