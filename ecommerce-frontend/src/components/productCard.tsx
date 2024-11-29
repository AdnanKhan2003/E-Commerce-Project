import { FaPlus } from "react-icons/fa";

type ProductsProps = {
    productId: string;
    photo: string;
    name: string;
    price: number;
    stock: number;
    handler: () => void;
};

const server = "jsjsjj";

const ProductCard = ({productId, price, name, photo, stock, handler}: ProductsProps) => {
  // temporary line of code which should be removed once we use 'productId' and 'stock' variable
  console.log(productId, stock);
  
  return (
    <div className="product-card">
        <img src={photo} alt={name} />
        <p>{name}</p>
        <span>₹{price}</span>

        <div>
            <button onClick={() => handler()}>
                <FaPlus/>
            </button>
        </div>
    </div>
  )
}

export default ProductCard;