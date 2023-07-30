import Card from './components/Card'
import Header from "./components/Header";
import RightCartBlock from "./components/RightCartBlock";
function App() {
  return (
      <div className='wrapper clear'>

    <RightCartBlock/>
    <Header/>

          <div className='content p-40 '>
              <div className='d-flex align-center mb-40 justify-between'>
              <h1 >Все кепки</h1>
                  <div className='search d-flex'>
                      <img src='/img/search.svg' alt='Search'/>
                      <input placeholder='Поиск...' type='text'/>
                  </div>
              </div>
            <div className='d-flex'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
            </div>
          </div>
      </div>
  );
}

export default App;
