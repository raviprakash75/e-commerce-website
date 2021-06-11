import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import {useStatevalue} from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket,user},dispatch]=useStatevalue();
    return (
        <div className="checkout">
            <div className="chechout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wearables/Fireboltt/Fire-Boltt-BEAST_360_1500x300_1.jpg"
                    alt="" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your shopping Basket </h2> 
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    ))}       
                </div>
            </div>
            <div className="checkout_right">
             <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout;
