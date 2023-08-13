import {Link} from "react-router-dom";
import React from "react";

function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>


            <Link to='/favorite'>
                <div className='d-flex align-center'>

                    <img src="/img/smallIcon.png" alt="Ups"/>

                    <div>
                        <h3 className='text-uppercase'>Cap Shop</h3>
                        <p className='opacity-5'>Магазин лучших кепок</p>
                    </div>
                </div>
            </Link>


            <div>
                <ul className='d-flex'>
                    <li
                        onClick={props.onClickCart}
                        className='mr-30'><img
                        src='/img/Cart.svg' alt='Cart' width={23} height={23}/>
                        <span> 1205 MDL</span>
                    </li>
                    <li className='mr-20 cu-p'>

                        <Link to='/favorites'>
                            <img width={24} height={23} src='/img/favorite-tree.svg' alt='Farorites'/>
                        </Link>


                    </li>
                    <li>
                        <img width={23} height={23} src='/img/User.svg' alt='User'/>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;