function Card () {
    return (
        <div className='card'>
        <div className='favorite'>
            <img src="/img/Hearth-prod.svg" alt=""/>
        </div>
        <img width={133} height={112} src='/img/Product/Cap1.jpg' alt='Cap'/>
        <h5>Cap KYOTO Mid Mind</h5>
        <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column '>
                <span>Цена</span>
                <b>12.999 MDL</b>
            </div>

            <button className='button'>
                <img width={11} height={11} src='/img/Vector.svg' alt='Plus'/>
            </button>
        </div>
    </div>
    );
}
export default Card;
