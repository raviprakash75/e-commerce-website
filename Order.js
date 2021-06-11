import React from 'react'
import './Order.css'
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
    return (
        <div className="order">
            <h2>Oreder</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mm")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map(item => {
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                />

            })}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className="order_total">order Total:{value}</h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order;
