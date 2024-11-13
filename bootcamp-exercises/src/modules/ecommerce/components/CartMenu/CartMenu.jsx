import { useState } from "react";
import "./cart-menu.css";

export default function CartMenu({ counter, quitAction }) {
  const [hide, setHide] = useState(false);

  function handleHide() {
    setHide(true);
    setTimeout(() => {
      quitAction(false);
    }, 500);
  }
  return (
    <div className={`cart-menu ${hide ? "hide-cart-menu" : "show-cart-menu"}`}>
      <header>
        <button onClick={handleHide}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3>Cart</h3>
        {counter > 0 ? <span className="cart-counter">{counter}</span> : ""}
      </header>
      <main>
        <ul>
          {/* {products.map((product) => {
            return <ProductPreview key={product.id} />;
          })} */}
        </ul>
      </main>
    </div>
  );
}
