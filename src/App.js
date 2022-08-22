import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, {useReducer } from 'react';

//import Components

import Header from './Componnets/Header';
import Navbar from './Componnets/Navbar'
import Content from './Componnets/Content';
import ProductPage from './Componnets/ProductPage';
import Cart from './Componnets/Cart';

import ListclothesMan from './Componnets/ListClothes/ListclothesMan';
import ListclothesWoman from './Componnets/ListClothes/ListclothesWoman'
// import context
import ClothesContext from './Context/ClothesContext';

// import reduser
import AppReduser from './Reduser/AppReduser';

import { Routes, Route, } from "react-router-dom";

function App() {

    const product = [
        {
            type: 'T-Man',
            id: 1,
            title: "  تیشرت مردانه طرح 1",
            fee: 60000,
            img: `https://ups.aopcdn.com/s24748/goods/19185/109u30dd4a200ab84e49b1941ed8c98f779d.jpg`
        },
        {
            type: 'T-Man',
            id: 2,
            title: " تیشرت مردانه طرح 2",
            fee: 75000,
            img: `https://m.media-amazon.com/images/I/819wCzhZopL._AC_SX569._SX._UX._SY._UY_.jpg`
        },
        {
            type: 'T-Man',
            id: 3,
            title: " تیشرت مردانه طرح 3",
            fee: 85000,
            img: `https://m.media-amazon.com/images/I/81h2yu7SFML._AC_UX569_.jpg`
        },
        {
            type: 'T-Man',
            id: 4,
            title: " تیشرت مردانه طرح 4",
            fee: 150000,
            img: `https://m.media-amazon.com/images/I/81VP9gEtFJL._AC_UX569_.jpg`
        },
        {
            type: 'T-Man',
            id: 5,
            title: " تیشرت مردانه طرح 5",
            fee: 220000,
            img: `https://m.media-amazon.com/images/I/81G5V7owZ-L._AC_UY550_.jpg`

        },
        {
            type: 'T-Man',
            id: 6,
            title: " تیشرت مردانه طرح 6",
            fee: 240000,
            img: `https://m.media-amazon.com/images/I/61KD8H0JuBL._AC_SX466._SX._UX._SY._UY_.jpg`
        },
        {
            type: 'T-Man',
            id: 7,
            title: " تیشرت مردانه طرح 7",
            fee: 470000,
            img: `https://m.media-amazon.com/images/I/81lJD6Y9PSL._AC_UY550_.jpg`
        },
        {
            type: 'T-Man',
            id: 8,
            title: " تیشرت مردانه طرح 8",
            fee: 570000,
            img: `https://m.media-amazon.com/images/I/61RuypfM1RL._AC_UX679_.jpg`
        },
        {
            type: 'T-Man',
            id: 9,
            title: " تیشرت مردانه طرح 9 ",
            fee: 530000,
            img: `https://m.media-amazon.com/images/I/61ifhhcyJEL._AC_SX466._SX._UX._SY._UY_.jpg`
        },
        {
            type: 'T-Woman',
            id: 11,
            title: " تیشرت زنانه طرح 1 ",
            fee: 250000,
            img: `https://noracora.com/image_cache/resize/670x890/image/catalog/product/2022-05-12/3e79622d2d3347c22b705205b02be320.jpg`
        },
        {
            type: 'T-Woman',
            id: 12,
            title: " تیشرت زنانه طرح  2",
            fee: 150000,
            img: `https://www.noracora.com/image_cache/resize/670x890/image/catalog/product/2021-05-05/123bf7c692fb6d899ab3c378bb4b7b2c.jpeg`
        },
        {
            type: 'T-Woman',
            id: 13,
            title: " تیشرت زنانه طرح 3 ",
            fee: 90000,
            img: `https://www.noracora.com/image_cache/resize/670x890/image/catalog/product/2021-06-17/435bb6f82478dbb98a75176dea32bcf0.jpg`
        },
        {
            type: 'T-Woman',
            id: 14,
            title: "  تیشرت زنانه طرح 4",
            fee: 120000,
            img: `https://www.noracora.com/image_cache/resize/670x890/image/catalog/product/2022-03-29/56de4873c949a0044b09844f8d197a3a.png`
        },
        {
            type: 'T-Woman',
            id: 15,
            title: " تیشرت زنانه طرح 5 ",
            fee: '190000 ',
            img: `https://www.noracora.com/image_cache/resize/670x890/image/catalog/product/2019-04-03/1-jpg-1554285358385.jpeg`
        },
        {
            type: 'T-Woman',
            id: 16,
            title: " تیشرت زنانه طرح 6",
            fee: 140000,
            img: `https://www.noracora.com/image_cache/resize/670x890/image/catalog/product/2022-03-21/1cc539684c46a0d4877d4d8cd6a968d3.jpg`
        },
        {
            type: 'T-Woman',
            id: 17,
            title: " تیشرت زنانه طرح  7",
            fee: 80000,
            img: `https://www.noracora.com/image_cache/resize/670x890/image/catalog/shopify/wangboyang/09.06/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180906141234.jpg`
        },
        {
            type: 'T-Woman',
            id: 18,
            title: " تیشرت زنانه طرح  8",
            fee: 130000,
            img: `https://www.noracora.com/image_cache/resize/670x890/image/catalog/product/2019-11-29/18-jpg-1575016395645.jpeg`
        },
        {
            type: 'T-Woman',
            id: 19,
            title: " تیشرت زنانه طرح  9",
            fee: 180000,
            img: `https://www.noracora.com/image_cache/resize/670x890/image/catalog/product/2022-02-24/48214b46617fefa36906c7f801d2e257.png`
        },
    ]
    // استخراج آیتم ها
    const Item = () => product.map((item) => <ProductPage item={item} />)

    const [state, dispatch] = useReducer(AppReduser, {
        products: []
    })



    return (
        <ClothesContext.Provider value={{
            state: state,
            product: product,
            products: state.products,
            dispatch 
        }} >
            <div className=" fullpage">
                <Navbar />
                <Header />   
                <Routes >
                    <Route path="/" element={<Content />} />
                    <Route path="/singleproduct/:id" element={<ProductPage />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path='/ClothesMan' element={<ListclothesMan />}></Route>
                    <Route path='/ClothesWoman' element={<ListclothesWoman />}></Route>
                </Routes>
            </div>
        </ClothesContext.Provider>
    );
}

export default App;
