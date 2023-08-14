import React, {useEffect, useState} from "react";
import RightCartBlock from "./components/RightCartBlock";
import axios from "axios";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    // const [favorite, setFavorite] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cardOpened, setCardOpened] = useState(false);


    useEffect(() => {
        axios.get('https://64d09505ff953154bb791d1b.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        axios.get('https://64d09505ff953154bb791d1b.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        })


    }, []);


    const onAddToCart = (obj) => {
        axios.post('https://64d09505ff953154bb791d1b.mockapi.io/cart', obj).then(response => {
            setCartItems(prev => [...prev, response.data]);
        })
    }


    const onAddToFavorite = (obj) => {
        axios.post('https://64d894885f9bf5b879ce5b94.mockapi.io/favorite', obj).then(res => {
        })
        setCartItems(prev => [...prev, obj]);
        console.log('favorite')
    }


    const onRemoveItem = (id) => {
        console.log(id);
        axios.delete(`https://64d09505ff953154bb791d1b.mockapi.io/cart/${id}`).then(() => {
            setCartItems(prev => prev.filter(item => item.id !== id));
        })
    }


    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }


    return (
        <div className='wrapper clear'>

            {cardOpened && <RightCartBlock
                items={cartItems}
                onClose={() => setCardOpened(false)} onRemove={onRemoveItem}/>}


            <Header onClickCart={() => setCardOpened(true)}/>


            <Routes>
                <Route
                    path="/" exact element={
                    <Home
                        items={items}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                    />
                }
                ></Route>
                <Route path="/favorites" exact element={<Favorites/>}></Route>
            </Routes>


        </div>
    );
}

export default App;
