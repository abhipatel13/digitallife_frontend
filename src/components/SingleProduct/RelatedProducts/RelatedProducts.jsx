import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";
const RelatedProducts = ({productData}) => {
    const category = productData?.data?.attributes?.category?.data?.attributes?.title;
    const id = productData?.data?.id;
    const { data } = useFetch(`/api/products?filters[id][$ne]=${id}&filters[category][title][$eq]=${category}&&populate=*`);
    return (
        <div className="related-products">
         <Products headingText="Related Products" products={data}/>
        </div>
)
};

export default RelatedProducts;
