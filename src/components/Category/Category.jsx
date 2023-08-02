import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";

const Category = () => {
    const { id } = useParams(); 
    const { data }  = useFetch(`/api/categories/${id}?populate=products&populate=products.img`);
    return (
        <>       
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    { data?.data?.data?.attributes?.title }
                </div>
                <div className="product-container">
                    <Products products={data?.data?.data?.attributes?.products} innerPage={true} />
                </div>
            </div>
        </div>
        </>
    )
};

export default Category;
