import styles from './Card.module.scss';
import {useState} from "react";

function Card({onFavorite, onPlus, imageUrl, price, title}) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);


    const handleClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded)
    }

    const handleClickFavorite = () => {
        onFavorite({title, imageUrl, price});
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={handleClickFavorite} src={isFavorite ? "/img/IsFavorite.svg" : "/img/Favorite.svg"}
                     alt="hearth"/>
            </div>
            <img width={133} height={112} style={{marginLeft: 30}} src={imageUrl} alt='Cap'/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Цена</span>
                    <b>{price} MDL</b>
                </div>

                <img className={styles.plus} onClick={handleClickPlus}
                     src={isAdded ? '/img/btn-plus-green.svg' : '/img/btn-plus-gray.svg'} alt='Plus'/>

            </div>
        </div>
    );
}

export default Card;
