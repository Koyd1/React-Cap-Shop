import React, {useEffect, useState} from "react";
import Card from './components/Card'
import Header from "./components/Header";
import RightCartBlock from "./components/RightCartBlock";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cardOpened, setCardOpened] = useState(false);

    useEffect(() => {
        return () => {
            fetch('https://64d09505ff953154bb791d1b.mockapi.io/items').then(res => {
                return res.json();
            }).then(json => setItems(json))
        };
    }, []);

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }

    return (
        <div className='wrapper clear'>

            {cardOpened && <RightCartBlock
                items={cartItems}
                onClose={() => setCardOpened(false)}/>}

            <Header onClickCart={() => setCardOpened(true)}/>

            <div className='content p-40 '>
                <div className='d-flex align-center mb-40 justify-between'>
                    <h1>Все кепки</h1>
                    <div className='search d-flex'>
                        <img src='/img/search.svg' alt='Search'/>
                        <input placeholder='Поиск...' type='text'/>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>

                    {items.map((item) => (
                        <Card title={item.title}
                              price={item.price}
                              imageUrl={item.imageUrl}
                              onFavorite={() => console.log('Favorite')}
                              onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default App;
