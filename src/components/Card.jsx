function Card(props) {
    console.log(props);
    return (
        <div className='card'>
            <div className='favorite'>
                <img src="/img/Hearth-prod.svg" alt=""/>
            </div>
            <img width={133} height={112} style={{marginLeft: 15}} src={props.imageUrl} alt='Cap'/>
            <h5>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Цена</span>
                    <b>{props.price} MDL</b>
                </div>

                <button className='button'>
                    <img width={11} height={11} src='/img/Vector.svg' alt='Plus'/>
                </button>
            </div>
        </div>
    );
}

export default Card;
