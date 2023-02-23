import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '../..';
import CartItems from '../cartItems/CartItems';

import cart from '../../resources/svgs/shoppingcart.svg'
import './Cart.scss';
import { CHECKOUT_ROUTE } from '../../utils/constants';

const Cart = observer(() => {
    const {userStore} = useContext(Context);
    let total = 0;
    useEffect(()=>{
        userStore.getCartBooks(userStore.user.id);
    }, [])

    return(
        <div className="cart_container container">
            <section className="cart_content">
                <div className="cart_items_container">
                    <section className="cart_content_inner">
                        <em className="emphasis">
                            <div className="cart-header">
                                <div className="title">My Shopping Cart</div>
                            </div>
                            <div className="cart-product-container">
                                <header className="hat">
                                    <h2>({userStore.cartItems.length}) Items from Bookstore</h2>
                                </header>
                                {userStore.cartItems.length > 0?
                                    userStore.cartItems.map((book, index)=>(
                                        <CartItems book={book} key={index} index={index}/>
                                    ))
                                    :
                                    <></>
                                }
                            </div>
                        </em>
                        {userStore.cartItems.length === 0? 
                            <div className='empty'> 
                                <div className="icon"><img src={cart} alt="" /></div>
                                <h4 className="warn">There are currently no items in your shopping cart.</h4>
                            </div>
                            : 
                            <></>}
                    </section>
                </div>
                <div className="cart_summary">
                    <section className="order-summary">
                        <div className="order-summary-bottom">
                            <header className='header'>
                                <h2>Order Summary</h2>
                            </header>
                            {userStore.cartItems.length > 0? 
                                userStore.cartItems.map((book)=>{
                                    total += parseInt(book.book.price.hardcover)*book.quantity
                                }): <></>
                            }
                            <div className="container-subtotal info-line">
                                <div className="items">Subtotal ({userStore.cartItems.length} items)</div>
                                <div className="price">
                                    {total}₸
                                </div>
                            </div>
                            <div className="container-shipping info-line">
                                <div className="items">Estimated Shipping</div>
                                <div className="price">Free</div>
                            </div>
                            <div className="container-tax info-line">
                                <div className="items">Estimated Tax</div>
                                <div className="price">$0.00</div>
                            </div>
                            <div className="container-total info-line">
                                <div className="items">Order total:</div>
                                <div className="price">
                                    {total}₸
                                </div>
                            </div>
                            <div className="checkout-btns">
                                <a href={CHECKOUT_ROUTE} className="checkout"  >Checkout</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
})

export default Cart;