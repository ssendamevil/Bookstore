import MyAccount from "../myAccount/MyAccount";
import Orders from "../orders/Orders";
import Payment from "../payment/Payment";

import './Account.scss'

const Account = ({page}) => {
    return (
        <div className="account container">
            <header className="header">
                <h1 className="heading">My Account</h1>
            </header>
            <div className="row">
                <div className="account-settings-sidebar col-lg-2">
                    <section>
                        <div className="sidebar">
                            <div className="sidebar-section">
                                <ul className="lists">
                                    <li className="item active"><a href="">My Account</a></li>
                                    <li className="item"><a href="">Order History</a></li>
                                    <li className="item"><a href="">Account Settings</a></li>
                                    <li className="item"><a href="">Payment Methods</a></li>
                                    <li className="item"><a href="">Address Book</a></li>
                                    <li className="item"><a href="">Wishlists</a></li>
                                    <li className="item"><a href="">My Digital Library</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="account-settings-main col-lg-10">
                    <div className="content">
                        {
                            {
                                'myaccount': <MyAccount/>,
                                'order': <Orders/>,
                                'payment': <Payment/>
                            }[page]
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;