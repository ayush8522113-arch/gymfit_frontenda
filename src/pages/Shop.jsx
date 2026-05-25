import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

function Shop() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">

          <h1 className="title">
            Shop Collection
          </h1>



          <ProductGrid />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Shop;