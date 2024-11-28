import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";

const Header = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="as"
          name="Macbook"
          price={4334}
          stock={4332}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SY450_.jpg"
        />
      </main>
    </div>
  );
};

export default Header;
