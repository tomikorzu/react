import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import MainLayout from "../layouts/MainLayout";

export default function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  async function fetchAPI() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  function addNewProduct(id) {
    const existId = productsSelected.some((product) => {
      return product === id;
    });

    if (existId) return;

    setProductsSelected((prev) => [...prev, id]);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const productsFiltred = products.filter((product) => {
    return product.title.toLowerCase().includes(searchProduct.toLowerCase());
  });

  return (
    <MainLayout action={setSearchProduct} productsCount={productsSelected}>
      <main className="fade-in main-ecommerce">
        <ul className="product-list">
          {productsFiltred.length > 0 ? (
            ""
          ) : (
            <h2 className="fade-in">No products found</h2>
          )}
          {productsFiltred.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.images}
                title={product.title}
                price={product.price}
                discount={product.discountPercentage}
                description={product.description}
                rating={product.rating}
                action={addNewProduct}
              />
            );
          })}
        </ul>
      </main>
    </MainLayout>
  );
}
