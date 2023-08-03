import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const { handleRemoveToCart , handleCartProductQuantity , cartItems } = useContext(Context);
    
    return cartItems?.map((item) => (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{item?.attributes?.title}</span>
                    <MdClose className="close-btn" onClick={()=>{handleRemoveToCart(item)}}/>
                    <div className="quantity-buttons">
                        <span onClick={()=>{handleCartProductQuantity("dec",item)}}>-</span>
                        <span>{item?.attributes?.quantity}</span>
                        <span onClick={()=>{handleCartProductQuantity("inc",item)}}>+</span>
                    </div>
                    <div className="text">
                        <span>{item?.attributes?.quantity}</span>
                        <span>x</span>
                        <span className="highlight">&#8377;{item?.attributes?.price}</span>
                    </div>
                </div>
            </div>
        </div>
    ))
};

export default CartItem;
