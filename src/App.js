import Card from './components/Card'
import Header from "./components/Header";
import RightCartBlock from "./components/RightCartBlock";


const productArr = [
    {title: 'Cap KYUTO Mid Mind', price: 7.999, imageUrl: '/img/product/Cap1.jpg'},
    {title: 'White KYOTO Back Cap', price: 3.999, imageUrl: '/img/product/Cap2.jpg'},
    {title: 'Country Travel STG', price: 15.999, imageUrl: '/img/product/Cap3.jpg'},
    {title: 'Black Trip BN', price: 9.999, imageUrl: '/img/product/Cap4.jpg'},
];

function App() {
    return (
        <div className='wrapper clear'>

            <RightCartBlock/>
            <Header/>

            <div className='content p-40 '>
                <div className='d-flex align-center mb-40 justify-between'>
                    <h1>Все кепки</h1>
                    <div className='search d-flex'>
                        <img src='/img/search.svg' alt='Search'/>
                        <input placeholder='Поиск...' type='text'/>
                    </div>
                </div>
                <div className='d-flex'>
                    {/* Рендер списка товара 01:23*/}
                    {productArr.map((obj) => (
                        <Card title={obj.title}
                              price={obj.price}
                              imageUrl={obj.imageUrl}/>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default App;
