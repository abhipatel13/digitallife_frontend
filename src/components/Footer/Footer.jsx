import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">XYZ Road,XYZ,XYZ 382566</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 079 043034342</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email : store@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">Smart Watches</div>
                    <div className="text">Bluetooth Speakers</div>
                    <div className="text">Wireless Earbuds</div>
                    <div className="text">Home Theatre</div>
                    <div className="text">Projectors</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                    DigitalLife: Your One-Stop Electronics Shop.
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
