import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ products, innerPage, headingText }) => {
    return (
        <div className="product-container">
            {!innerPage && <div className="sec-heading">
                {headingText}
            </div>}
            <div className="products">
                {
                    products?.data?.data ? products?.data?.data?.map((item, key) => (
                        <Product item={item} data={item.attributes} />
                    )) : products?.data && products?.data?.map((item, key) => (
                        <Product item={item} data={item.attributes} />
                    ))
                }
            </div>
        </div>
    )
};

export default Products;
