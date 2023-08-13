import Card from "../components/Card";
import React from "react";

function Home({searchValue, setSearchValue, onChangeSearchInput, items, onAddToCart, onAddToFavorite}) {
    return (
        <div className='content p-40 '>
            <div className='d-flex align-center mb-40 justify-between'>
                <h1>{
                    searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кепки'
                }</h1>
                <div className='search d-flex'>
                    <img src='/img/search.svg' alt='Search'/>

                    {searchValue && <img
                        onClick={() => setSearchValue('')}
                        width={30}
                        className='clear cu-p'
                        src="/img/btn-remove.svg"
                        alt="clear"/>}

                    <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' type='text'/>
                </div>
            </div>
            <div className='d-flex flex-wrap'>

                {items
                    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item) => (
                        <Card
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Home;