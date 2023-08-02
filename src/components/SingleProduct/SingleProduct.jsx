import "./SingleProduct.scss";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaCartPlus,
    FaPinterest,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState , useContext } from "react";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const SingleProduct = () => {
    const [quantity,setQuantity] = useState(1);
    const { id } = useParams();
    const { handleAddToCart , cartItems } = useContext(Context);
    const [showCart,setShowCart] = useState(false);
    const { data } = useFetch(`/api/products/${id}?populate=*`)
    const increment = () =>{
        setQuantity((preState)=> preState + 1)
    }
    const decrement = () =>{
        if(quantity == 1) return quantity;
        setQuantity((preState)=> preState - 1)
    }
    return (
        <>
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={process.env.REACT_APP_DEV_URL + data?.data?.data?.attributes?.img.data[0].attributes.url} />
                    </div>
                    <div className="right">
                        <div className="name">{data?.data.data.attributes.title}</div>
                        <div className="price">₹{data?.data.data.attributes.price}</div>
                        <div className="desc">{data?.data.data.attributes.desc}</div>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={() => {handleAddToCart(data?.data?.data,quantity);setQuantity(1);}}>
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider"></span>
                        <div className="info-item">
                            <span className="text-bold">
                                Category
                                <span>{data?.data.data.attributes?.category.data?.attributes?.title}</span>
                            </span>
                            <span className="text-bold">
                                Share
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedin size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts productData={data?.data}/>
            </div>
        </div>
        {showCart && <Cart setShowCart={setShowCart}/>}
        </>
    )
};

export default SingleProduct;
