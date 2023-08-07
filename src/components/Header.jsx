function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img src="/img/smallIcon.png" alt="Ups"/>
                <div>
                    <h3 className='text-uppercase'>Cap Shop</h3>
                    <p className='opacity-5'>Магазин лучших кепок</p>
                </div>
            </div>

            <div>
                <ul className='d-flex'>
                    <li onClick={props.onClickCart} className='mr-30'><img src='/img/Cart.svg' alt='Ups'/> <span> 1205 MDL</span>
                    </li>
                    <li>
                        <img src='/img/User.svg' alt='Ups'/>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;