import React from 'react';
import './Checkout.css';
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal';
import ProductCart from './ProductCart';

function Checkout() {

    const [{basket}] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">

                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="checkout__title">Your Shopping cart is empty</h2>
                            <p>you no items in your basket. Buy one</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="shoppingcartitem">Items in the basket</h2>
                        {
                            basket.map(item => (
                                <ProductCart 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.image}
                                    rating={item.rating} />
                            ))
                        }
                        </div>
                    )
                }
                
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout;