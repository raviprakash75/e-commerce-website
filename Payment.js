import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStatevalue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import './Payment.css';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import axios from './axios';
import {db} from './firebase';
function Payment() {

    const [{ basket, user }, dispatch] = useStatevalue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const [disabled, setDisabled] = useState(true);


    const history = useHistory();

    React.useEffect(() => {
        // generate special strpie secret to charge....user

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret)

        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {

        // all fancy stripe related ...

        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db
              .collection('user')
              .doc(user?.uid)
              .collection('Orders')
              .doc(paymentIntent.id)
              .set({
                  basket:basket,
                  amount:paymentIntent.amount,
                  created:paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/Orders')
        })
    }

    const handleChange = async (event) => {
        // display error as user types any errorin card details....
        setDisabled(event.empty);
        setError(event.error ? event.error.massage : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout({<Link to="/checkout">{basket?.length} item
                    </Link>})
                </h1>


                {/* payments section -delivery__address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>react road</p>
                        <p>js city,amazon</p>
                    </div>
                </div>


                {/*  review item */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment_item">
                        {basket.map(item => (
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


                {/*   payments method  */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe related works*/}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>order Total:{value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing||disabled||succeeded}>
                                    <span>
                                        {processing?<p>Processing</p>:<p>Buy Now</p>}
                                    </span>
                                </button>
                            </div>
                        
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;