import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import MainLayout from "../layouts/MainLayout";

export default function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  async function fetchAPI() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const productsFiltred = products.filter((product) => {
    return product.title.toLowerCase().includes(searchProduct.toLowerCase());
  });

  return (
    <MainLayout action={setSearchProduct}>
      <main className="fade-in main-ecommerce">
        <ul className="product-list">
          {productsFiltred.length > 0 ? "" : <h2 className="fade-in">No products found</h2>}
          {productsFiltred.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.images}
                title={product.title}
                price={product.price}
                discount={product.discountPercentage}
                description={product.description}
                rating={product.rating}
              />
            );
          })}
        </ul>
      </main>
    </MainLayout>
  );
}
