import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Newsletter from './components/Footer/Newsletter/Newsletter'
import Products from './components/Products/Products';
import AppContext from './utils/context'
import { useEffect } from 'react';

function App() {
    return <>
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    </>
}

export default App;
