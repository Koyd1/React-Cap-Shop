function RightCartBlock({onClose, onRemove, items = []}) {
    return (
        <div className='overlay'>
            <div className='rightCartBlock'>
                <h2 className='mb-30 d-flex justify-between cu-p'>Корзина
                    <img
                        onClick={onClose}
                        width={30} className='removeBtn cu-p'
                        src='/img/btn-remove.svg'
                        alt='Remove'/>
                </h2>

                {
                    items.length > 0 ? <div>
                            <div className="items">
                                {
                                    items.map(obj => (
                                        <div
                                            key={obj.createdAtId}
                                            className='cartItem d-flex align-center mb-20'>


                                            <div style={{backgroundImage: `url(${obj.imageUrl})`}}
                                                 className="cartItemImg">

                                            </div>
                                            <div className='mr-20 flex'>
                                                <p className='mb-5'>{obj.title}</p>
                                                <b>{obj.price}</b>
                                            </div>
                                            {/* <img
                                                onClick={() => onRemove(obj.data)} // Передача itemId при удалении
                                                className='removeBtn'
                                                src="/img/btn-remove.svg"
                                                alt="Remove"/>*/}

                                            <img
                                                onClick={() => onRemove(obj.id)} // Передача id при удалении
                                                className='removeBtn'
                                                src="/img/btn-remove.svg"
                                                alt="Remove"/>


                                        </div>
                                    ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li><span>Итого:</span>
                                        <div></div>
                                        <b>21498 MDL</b>
                                    </li>
                                    <li><span>Налог 5%:</span>
                                        <div></div>
                                        <b>1074 MDL</b>
                                    </li>
                                </ul>
                                <button className='greenButton'>Оформить заказ <img src="/img/Arrow.svg" alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                        :
                        <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                            <img className='mb-20' width='120' height='120' src="/img/empty-cart.png" alt="empty-cart"/>
                            <h2>Корзина пустая</h2>
                            <p className='opacity-6'>Добавьте хотя бы одну кепку, чтобы сделать заказ.</p>
                            <button onClick={onClose} className='greenButton2'>
                                <img src="/img/Arrow.svg" alt="Arrow"/> Вернуться назад
                            </button>
                        </div>
                }


            </div>
        </div>
    );
}

export default RightCartBlock;