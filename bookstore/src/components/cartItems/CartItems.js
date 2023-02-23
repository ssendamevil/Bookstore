import { useContext, useEffect, useState } from 'react';
import './CartItems.scss'
import arrowd from '../../resources/svgs/arrowdown.svg';
import { Context } from '../..';

const CartItems = ({book, index}) => {
    const {userStore} = useContext(Context);
    const [qty, setQty] = useState(book.quantity);

    const updateItem = async (n)=>{
        try{
            setQty(n)
            await userStore.updateCartItem(userStore.user.id, index, n, 'upd');
            await userStore.getCartBooks(userStore.user.id);
        }catch (e){
            alert(e.response?.data?.message)
        }
    }

    const removeItem = async ()=>{
        try{
            await userStore.updateCartItem(userStore.user.id, index, 0, 'rmv').then(async()=>{await userStore.getCartBooks(userStore.user.id);})
        }catch (e){
            alert(e.response?.data?.message)
        }
    }
    

    return(
        <div className="cart-product">
            <div className="title">
                <h4>{book.book.name}</h4>
                <a href="" className="author">by 
                    {
                        book.book.author?
                        book.book.author.map((author, index) => {
                            return(
                                <a key={index} href="" style={{marginLeft: '7px'}} className="ds">{author.name}{index+1 !== book.book.author.length?", ":""}</a>
                            )
                        }):
                        ''
                    }
                </a>
            </div>
            <div className="cart-product-info">
                <div className="cart-product-info-image-holder"> 
                    <div className="image"><a href="" className="image-link"><img src={book.book.image[0]} alt="" /></a></div>
                    <span className="cover">Paperback</span>
                </div>
                <div className="cart-product-info-deliveryMethod">
                    <div className="radio-btn-container">
                        <input type="radio" defaultChecked name={"deliveryMethod"+`${index}`} id="shipItembtn" />
                        <label htmlFor="shipItembtn" className="radio-btn-label">Ship this Item</label>
                    </div>
                    <div className="gift-btn text">
                        <input type="submit" value="Make it a Gift" />
                    </div>
                    <div className="radio-btn-container">
                        <input type="radio" name={"deliveryMethod"+`${index}`} id="pickUpItembtn" />
                        <label htmlFor="pickUpItembtn" className="radio-btn-label">Pick up in Store</label>
                    </div>
                    <div className="findInStore-btn text">
                        <input type="submit" value="Find My Store" />
                    </div>
                    <div className="remove-btn text">
                        <input onClick={removeItem} type="submit" value="Remove" className='remove' />
                        <span>|</span>
                        <input type="submit" value="Save for Later" className='save' />
                    </div>
                </div>
                <div className="cart-product-info-price">
                    <div className="price-details">
                        <div className="price-discounted col-lg-3">
                            {/* <span className="price-retail">{book.book.price.hardcover}₸</span>
                            <span className="price-new">$15.99</span> */}
                            <span className="price-current">{book.book.price.hardcover}₸</span>
                        </div>
                        <div className="price-qty col-lg-5">
                            <div className="dropdown">
                                <button className="current" type='button' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{qty} <img src={arrowd} alt="" /></button>
                                <ul className="select dropdown-menu" id="qty" aria-labelledby="dropdownMenuButton">
                                    <li key={1} onClick={()=>updateItem(1)} className="1 dropdown-item">1</li>
                                    <li key={2} onClick={()=>updateItem(2)} className="2 dropdown-item">2</li>
                                    <li key={3} onClick={()=>updateItem(3)} className="3 dropdown-item">3</li>
                                    <li key={4} onClick={()=>updateItem(4)} className="4 dropdown-item">4</li>
                                    <li key={5} onClick={()=>updateItem(5)} className="5 dropdown-item">5</li>
                                    <li key={6} onClick={()=>updateItem(6)} className="6 dropdown-item">6</li>
                                    <li key={7} onClick={()=>updateItem(7)} className="7 dropdown-item">7</li>
                                    <li key={8} onClick={()=>updateItem(8)} className="8 dropdown-item">8</li>
                                    <li key={9} onClick={()=>updateItem(9)} className="9 dropdown-item">9</li>
                                    <li key={10} onClick={()=>updateItem(10)} className="10+ dropdown-item">10+</li>
                                </ul>
                            </div>
                        </div>
                        <div className="price-total col-lg-3">  
                            <span className="total">{qty*book.book.price.hardcover}₸</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CartItems;