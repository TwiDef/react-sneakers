import React from 'react'

import styles from './Card.module.scss'

function Card({ onFavorite, imageUrl, title, price, onPlus }) {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(false)

    const onClickPlus = () => {
        onPlus({ imageUrl, title, price })
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    React.useEffect(() => {

    }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img
                    src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
                    alt="unliked"
                    onClick={onClickFavorite}
                />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneaker" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>

                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
                    alt="plus" />

            </div>
        </div>
    )
}

export default Card;