import React from 'react'
import './CheckoutProduct.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStatevalue } from './StateProvider';
function CheckoutProduct({ id, title, price, rating, image, hideButton }) {
    const [{ basket }, dispatch] = useStatevalue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProdcut_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarBorderIcon className="checkoutProduct_rating_star" /></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;
