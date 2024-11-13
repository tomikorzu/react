import { useState, useEffect } from "react";
import "./cart-button.css";
import CartMenu from "../CartMenu/CartMenu";

export default function CartButton({ productsCount }) {
  const [counter, setCounter] = useState([]);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setCounter(productsCount);
  }, [productsCount]);

  return (
    <>
      <button className="cartBtn" onClick={() => setMenu(true)}>
        <i className="fa-solid fa-cart-shopping"></i>
        {counter.length > 0 ? <span>{counter.length}</span> : ""}
      </button>
      {menu && <CartMenu counter={counter.length} quitAction={setMenu} />}
    </>
  );
}
