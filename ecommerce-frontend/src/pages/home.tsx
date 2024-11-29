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
        <ProductCard
          productId="asd"
          name="Smart Watch"
          price={4334}
          stock={4332}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/81kq5wkaqAL._SL1500_.jpg"
        />
        <ProductCard
          productId="asdd"
          name="Bag"
          price={4334}
          stock={4332}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/51IbWnBhWyL._AC_QL10_SX245_SY250_FMwebp_.jpg"
        />
      </main>
    </div>
  );
};

export default Header;
