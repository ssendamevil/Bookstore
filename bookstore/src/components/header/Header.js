import Navbar from "../navbar/Navbar";
import SearchBar from "../searchBar/SearchBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../../index";
import {Link} from "react-router-dom";
import {logout} from "../../services/AuthService";
import {useHistory} from 'react-router-dom'
import {uuid} from 'uuidv4'

import './Header.scss'
import heart from '../../resources/svgs/heart.svg'
import userIcon from '../../resources/svgs/user.svg'
import location from '../../resources/svgs/location.svg'
import logo from '../../resources/svgs/logo.svg'
import cart from '../../resources/svgs/shoppingcart.svg'
import {LOGIN_ROUTE, MY_ACCOUNT_ROUTE, ORDER_STATUS_ROUTE, PAYMENT_METHODS_ROUTE, SHOP_ROUTE} from "../../utils/constants";

const Header = observer(() => {
    const {userStore} = useContext(Context)
    const history = useHistory()

    useEffect(()=>{
        const bar = document.querySelector('.my_account'),
            dropdown = document.querySelector('.utility_dropdown_menu'),
            width = window.getComputedStyle(bar).width;
        const w = +width.replace(/[A-z]/g, '') + 70
        dropdown.style.width = `${w}px`;
        dropdown.style.left = `-${(w - +width.replace(/[A-z]/g, '')) / 2}px`
    })

    const click = async () => {
        await userStore.logout()
        history.go(0)
    }

    return(
        <header>
            <div className="utility_bar_container">
                <div className="utility_bar_box">
                    <ul className="utility_storesEvents">
                        <li  className="utility_item_li">
                            <a href="" className="utility_item">
                                <img src={location} alt="" className="utility_icons"/>
                                Stores & Events
                            </a>
                        </li>
                    </ul>
                    <ul className="utility_accWish">
                        <li  className="utility_item_li my_account">
                            <a className="utility_item">
                                <img src={userIcon} alt="" className="utility_icons"/>
                                {userStore.isAuth ? `Hi, ${userStore.user.name}` : "My account"}
                            </a>
                            <div className={ userStore.isAuth ? `utility_dropdown_menu reduced_width` : `utility_dropdown_menu`}>
                                {userStore.isAuth ? <></> : <dd>
                                    <Link to="/login" className="sign_in_btn">
                                        Sign in
                                    </Link>
                                    <Link to="/registration" className="sign_up_btn">Create an Account</Link>
                                </dd>}
                                <a href={MY_ACCOUNT_ROUTE} className="dropdown_item">Manage Account</a>
                                <a href={ORDER_STATUS_ROUTE} className="dropdown_item">Order Status</a>
                                <a href="" className="dropdown_item">Address Book</a>
                                <a href="" className="dropdown_item">My digital library</a>
                                <a href={PAYMENT_METHODS_ROUTE} className="dropdown_item">Payment Methods</a>
                                {userStore.isAuth ? <a onClick={click} className="dropdown_item logout_btn">Sign Out</a> : <></>}
                            </div>
                        </li>
                        <li  className="utility_item_li">
                            <a href="" className="utility_item utility_item_wishlist">
                                <img src={heart} alt="" className="utility_icons"/>
                                Wishlist
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container_sbl">
                <div className="container_logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <SearchBar/>
                <div className="container_shoppingCart">
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="btn">
                        <img src={cart} alt="" />
                    </button>
                </div>
            </div>
            
            <Navbar/>
        </header>
    )
})

export default Header;