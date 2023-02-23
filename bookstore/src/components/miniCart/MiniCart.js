import './MiniCart.scss'
import { paypal, p, visa } from "../../resources/svgs"; 
import MiniCartItem from './MiniCartItem';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useContext, useEffect, useState, useRef} from "react";
import cart from '../../resources/svgs/shoppingcart.svg'

const MiniCart = observer(() => {
    const {userStore} = useContext(Context);

    useEffect(()=>{
        userStore.getCartBooks(userStore.user.id);
    }, []);


    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Shopping Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="minicart-items-list">
                    {   userStore.cartItems.length > 0?
                        userStore.cartItems.map((book, index) => {
                            return <MiniCartItem key={index} item = {book} idx={index}/>
                        }): 
                        <div className='empty'> 
                            <div className="icon"><img src={cart} alt="" /></div>
                            <h4 className="warn">There are currently no items in your shopping cart.</h4>
                        </div>
                    }
                </div>
            </div>
            <div className="offcanvas-footer">
                <div className="order-total-container">
                    <div className="order-total-title">
                        <span className="title">Order total</span>
                        <span className="total-price">
                            {userStore.cartItems.length === 0? <>$0.00</>: <>$13.00</>}
                        </span>
                    </div>
                    <form action="">
                        <input type="button" value="Checkout" className="checkout" />
                        <span className="or">or Checkout With</span>
                        <div className="orpayment">
                            <button type="submit" className="paypal">
                                <img className="p1" src={p} alt="paypal1" />
                                <img className="p2" src={paypal} alt="paypal2" />
                            </button>
                            <button type="submit" className="visa">
                                <img src={visa} alt="visa" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
})

export default MiniCart;