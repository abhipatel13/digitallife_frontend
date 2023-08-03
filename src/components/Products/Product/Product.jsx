import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ data, item }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => { navigate(`/product/${item.id}`) }}>
      <div className="thumbnail">
        <img src={ data?.img?.data[0]?.attributes?.url} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title}</span>
        <span className="price">₹{data?.price}</span>
      </div>
    </div>
  )
};

export default Product;
