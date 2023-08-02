import { createContext  , useEffect, useState } from "react";
export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories,setCategories] = useState();
    const [products,setProducts] = useState();
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartSubTotal,setCartSubTotal] = useState(0);

    useEffect(()=>{
      let subTotal = 0;
      let cartCount = 0;
      cartItems.map((item)=> 
        {subTotal += item.attributes.quantity * item.attributes.price;
          cartCount += 1
        }
      
        );
      setCartSubTotal(subTotal);
      setCartCount(cartCount)
      console.log(subTotal);
    },[cartItems])
    const handleAddToCart = (product,quantity) =>{
      let item = [...cartItems];
      const index = item.findIndex(p => p.id === product.id);
      if(index !== -1)
      {
        item[index].attributes.quantity += quantity;
      }
      else{
         product.attributes.quantity = quantity;
         item = [...item,product];
      }
      setCartItems(item);
    } 

    const handleRemoveToCart = (product) =>{
      let item = [...cartItems];
      const filteredItem = item.filter(p => p.id !== product.id);
      setCartItems(filteredItem); 
    }

    const handleCartProductQuantity = (type,product)=>{
       let item = [...cartItems];
       const index = item.findIndex(p => p.id === product.id);
       console.log(product)
       if(type === "inc")
       {
         item[index].attributes.quantity += 1;
       }
       else{
         if(product.attributes.quantity === 1) return;
         item[index].attributes.quantity -= 1;
       }
       setCartItems(item)
    }
    return (
        <Context.Provider value={{
          categories,
          setCategories,
          products,
          setProducts,
          cartItems,
          setCartItems,
          cartCount,
          setCartCount,
          cartSubTotal,
          setCartSubTotal,
          handleAddToCart,
          handleRemoveToCart,
          handleCartProductQuantity
        }}>
            {children}
        </Context.Provider>
    )
} 

export default AppContext;