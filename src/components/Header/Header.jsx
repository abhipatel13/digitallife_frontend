import "./Header.scss";
import { Context } from "../../utils/context";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const { cartItems , cartCount } = useContext(Context);
    const nav = useNavigate();
    const handleScroll = () => {
        const offSet = window.scrollY;
        if (offSet > 0) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => {nav('/')}}>Home</li>
                        <li>About</li>
                        <li onClick={() => {nav('/category/1')}}>Category</li>
                    </ul>
                    <div className="center" onClick={() => {nav('/')}}>DigitalLife.</div>
                <div className="right">
                        <TbSearch onClick={()=>{setShowSearch(true)}} />
                        <AiOutlineHeart />
                        <div className="cart-icon" onClick={()=>{setShowCart(true)}}>
                            <CgShoppingCart />
                            <span>{cartCount > 0 ? cartCount : 0}</span>
                        </div>
                    </div>
                </div>
        </header>
            {showCart && <Cart setShowCart={setShowCart} cartItems={cartItems}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
        </>
    )
};

export default Header;
