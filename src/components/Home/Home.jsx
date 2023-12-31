import "./Home.scss";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect , useContext} from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Loading from "../Loading/Loading";
import AboutUs from "../About Us/AboutUs";

const Home = () => {
    const { categories , setCategories , products , setProducts } = useContext(Context);
    useEffect(() => {
      getCategories()
      getProduct()
    }, [])

    const getProduct = () => {
        fetchDataFromApi("/api/products?populate=*").then(res => setProducts(res))
    }

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then(res => setCategories(res))
    }
    return (
        <div className="Home">
            <Banner/>
            {/* <AboutUs/> */}
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products products={products} headingText="Popular Products" />
                </div>
            </div>
        </div>
    )
};

export default Home;
