import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import './Checkout.scss'
import ReviewItem from './ReviewItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Checkout = observer(()=> {

    const [firstname, setFirstname] = useState('')

    useEffect(()=>{
        const inputWrappers = document.querySelectorAll('.inputWrapper');
        let inputFields
        inputWrappers.forEach((elem) => {
            inputFields = elem.querySelector('.text-fields');
            if(inputFields.value.length !== 0){
                elem.classList.add('filled')
            }else{
                elem.classList.remove('filled')
            }
        })
    })

    return(
        <div className="checkout container">
            <section className="row">
                <div className="col-lg-8">
                    <section className="mt-s shippingAddress">
                        <div className="shipping-address">
                            <header className="title">
                                <h2 className="heading">1. Shipping Address</h2>
                            </header>
                            <div className="option">
                                <input type="radio" name="add" id="" />
                                <label htmlFor="add">Add a new Payment Method</label>
                            </div>
                            <div className="details">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="inputWrapper">
                                            <input type="text" onChange={(e)=> setFirstname(e.target.value)} value={firstname} name='firstname' className="firstName text-fields" />
                                            <label htmlFor="firstname" className="inputLabel">First Name *</label>
                                        </div>
                                        
                                        <div className="inputWrapper">
                                            <input type="text" name='country' className="country text-fields" />
                                            <label htmlFor="country" className="inputLabel">Country *</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inputWrapper">
                                            <input type="text" name='lastname' className="lastName text-fields" />
                                            <label htmlFor="lastname" className="inputLabel">Last Name *</label>
                                        </div>
                                        
                                        <div className="inputWrapper">
                                            <input type="text" name='company' className="companyName text-fields" />
                                            <label htmlFor="company" className="inputLabel">Company Name (optional)</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="inputWrapper">
                                            <input type="text" name='street' className="streetAddress text-fields" />
                                            <label htmlFor="street" className="inputLabel">Street Address *</label>
                                        </div>
                                        
                                        <div className="inputWrapper">
                                            <input type="text" name='apt' className="aptSuit text-fields" />
                                            <label htmlFor="apt" className="inputLabel">Apt/Suite/Unit(optional)</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inputWrapper">
                                            <input type="text" name='city' className="city text-fields" />
                                            <label htmlFor="city" className="inputLabel">City *</label>
                                        </div>
                                        
                                        <div className="inputWrapper">
                                            <input type="text" name='zipcode' className="zipcode text-fields" />
                                            <label htmlFor="zipcode" className="inputLabel">Zip Code *</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inputWrapper">
                                            <input type="text" name='state' className="state text-fields" />
                                            <label htmlFor="state" className="inputLabel">State</label>
                                        </div>
                                        <div className="inputWrapper">
                                            <input type="text" name='phone' className="phone text-fields" />
                                            <label htmlFor="phone" className="inputLabel">Phone Number *</label>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-s shippingAddress">
                        <div className="shipping-address">
                            <header className="title">
                                <h2 className="heading">2. Shipping Options</h2>
                            </header>
                            <div className="text-medium">
                                <h2 className="text">Items to Be Shipped From Barnes & Noble</h2>
                                <p className="info">Estimated dates and cost based on your shipping address</p>
                            </div>
                            <div className="option">
                                <div className="head">Choose Shipping Speed*</div>
                                <div className="standard">
                                    <input type="radio" defaultChecked name="shipping" id="" />
                                    <label htmlFor="shipping">Standard Shipping (Kazpost.kz): <span>Typically arrives in 3-5 business days</span></label>
                                </div>
                                <div className="express">
                                    <input type="radio" name="shipping" id="" />
                                    <label htmlFor="shipping">Standard Shipping (Kazpost EMS): <span>Typically arrives in 2-3 business days</span></label>
                                </div>
                            </div>
                            <div className="details">
                                <div className="all-shipping-info">
                                    <div className="show-items-header">
                                        Items in This Group (1 item)
                                        <span className="open-icon">
                                            <AddCircleOutlineIcon/>
                                        </span>
                                    </div>
                                    <div className="edit">
                                        <span>Want to change something in this group?</span>
                                        <a href="" className="link_edit">Edit cart</a>
                                    </div>
                                    <div className="show-items">
                                        <ReviewItem/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-s paymentMethods">
                        <div className="shipping-address">
                            <header className="title">
                                <h2 className="heading">2. Payment Methods</h2>
                            </header>
                            <div className="option">
                                <input type="radio" name="add" id="" />
                                <label htmlFor="add">Add a new Payment Method</label>
                            </div>
                            <div className="details">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="inputWrapper">
                                            <input type="text" onChange={(e)=> setFirstname(e.target.value)} value={firstname} name='firstname' className="firstName text-fields" />
                                            <label htmlFor="firstname" className="inputLabel">First Name *</label>
                                        </div>
                                        
                                        <div className="inputWrapper">
                                            <input type="text" name='country' className="country text-fields" />
                                            <label htmlFor="country" className="inputLabel">Country *</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inputWrapper">
                                            <input type="text" name='lastname' className="lastName text-fields" />
                                            <label htmlFor="lastname" className="inputLabel">Last Name *</label>
                                        </div>
                                        
                                        <div className="inputWrapper">
                                            <input type="text" name='company' className="companyName text-fields" />
                                            <label htmlFor="company" className="inputLabel">Company Name (optional)</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="inputWrapper">
                                            <input type="text" name='street' className="streetAddress text-fields" />
                                            <label htmlFor="street" className="inputLabel">Street Address *</label>
                                        </div>
                                        
                                        <div className="inputWrapper">
                                            <input type="text" name='apt' className="aptSuit text-fields" />
                                            <label htmlFor="apt" className="inputLabel">Apt/Suite/Unit(optional)</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inputWrapper">
                                            <input type="text" name='city' className="city text-fields" />
                                            <label htmlFor="city" className="inputLabel">City *</label>
                                        </div>
                                        
                                        <div className="inputWrapper">
                                            <input type="text" name='zipcode' className="zipcode text-fields" />
                                            <label htmlFor="zipcode" className="inputLabel">Zip Code *</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inputWrapper">
                                            <input type="text" name='state' className="state text-fields" />
                                            <label htmlFor="state" className="inputLabel">State</label>
                                        </div>
                                        <div className="inputWrapper">
                                            <input type="text" name='phone' className="phone text-fields" />
                                            <label htmlFor="phone" className="inputLabel">Phone Number *</label>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-lg-4">
                    <div className="cart_summary checkout_summary">
                        <section className="order-summary">
                            <div className="order-summary-bottom">
                                <header className='header'>
                                    <h2>Order Summary</h2>
                                </header>
                                <div className="container-subtotal info-line">
                                    <div className="items">Subtotal (0 items)</div>
                                    <div className="price">
                                        0₸
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
                                        0₸
                                    </div>
                                </div>
                                <div className="checkout-btns">
                                    <a  className="checkout"  >Checkout</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
})

export default Checkout;