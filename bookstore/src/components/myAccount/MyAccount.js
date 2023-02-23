
import { useContext } from 'react';
import { Context } from '../..';
import './MyAccount.scss'

const MyAccount = () => {
    const {userStore} = useContext(Context)
    return(
        <div className="myaccount-container">
            <div className="row">
                <div className="col-lg-6">
                    <section className="account-module">
                        <div className="outer-box p-3">
                            <header className="module-header">
                                <h2 className="heading">Account Settings</h2>
                            </header>
                            <section className="inner-text">
                                <div className="accountDetails">
                                    <p><span className="bold-text">Full Name: {userStore.user.name + " " + userStore.user.surname}</span></p>
                                    <p><span className="bold-text">Email Address: {userStore.user.email}</span></p>
                                    <p><span className="bold-text">Content Settings:</span></p>
                                    <p><span className="bold-text">Instant Purchase Settings: Active</span></p>
                                </div>
                                <div className="btn w-100 p-0">
                                    <a href="" className="btn-link w-100 p-3">Manage Account Settings</a>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="account-module">
                        <div className="outer-box p-3">
                            <header className="module-header">
                                <h2 className="heading">Order History</h2>
                            </header>
                            <section className="inner-text">
                                <div className="accountDetails">
                                    <p><span className="bold-text">Recent Order(s)</span></p>
                                    <p><span className="bold-text">We could not find any recent orders.</span></p>
                                    {/* <p><span className="bold-text">Content Settings:</span></p>
                                    <p><span className="bold-text">Instant Purchase Settings:</span></p> */}
                                </div>
                                <div className="btn w-100 p-0">
                                    <a href="" className="btn-link w-100 p-3">See All Orders</a>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <div className="col-lg-6">
                    <section className="account-module">
                        <div className="outer-box p-3">
                            <header className="module-header">
                                <h2 className="heading">Payment Methods</h2>
                            </header>
                            <section className="inner-text">
                                <div className="accountDetails">
                                    <p><span className="bold-text">Recent Order(s)</span></p>
                                    <p><span className="bold-text">We could not find any recent orders.</span></p>
                                    {/* <p><span className="bold-text">Content Settings:</span></p>
                                    <p><span className="bold-text">Instant Purchase Settings:</span></p> */}
                                </div>
                                <div className="btn w-100 p-0">
                                    <a href="" className="btn-link w-100 p-3">Manage Payment Methods</a>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;