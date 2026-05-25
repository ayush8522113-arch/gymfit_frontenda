import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

import "../css/ProductGrid.css";

import { fetchProducts }
  from "../services/productService";

function ProductGrid() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadProducts = async () => {

      try {

        const data = await fetchProducts();

        setProducts(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    loadProducts();

  }, []);

  if (loading) {

    return (
      <h2 className="loading">
        Loading Products...
      </h2>
    );

  }

  return (
    <section className="product-grid section">

      <div className="container">

        <div className="section-header">

          <div>

            <h2 className="title">
              Featured Collection
            </h2>

            <p className="subtitle">
              Best-selling gym outfits &
              activewear
            </p>

          </div>

        </div>

        <div className="grid">

          {products.map((product) => (

            <ProductCard
              key={product._id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductGrid;