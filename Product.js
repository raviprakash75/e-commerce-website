import React from 'react'
import './Product.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStatevalue } from './StateProvider';
function Product({id,title,image,price,rating}) {
    const [state,dispatch]=useStatevalue();
    const addTobasket=()=>{
        //dispatch the items into data layout
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i)=>(<p><StarBorderIcon className="product_rating_star"/></p>))}
                </div>
            </div>
            <img  src={image}
            alt=""/>
            <button onClick={addTobasket}>Add to basket</button>
        </div>
    )
}
export default Product;
