import { useEffect, useState } from "react";

import CartButton from "../components/CartButton";

export default function Ecommerce() {
  const [products, setProducts] = useState([]);

  async function fetchAPI() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Ecommerce</h1>
      {/* <ProductCard /> */}
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
      <CartButton />
    </>
  );
}
