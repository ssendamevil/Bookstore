import Header from "../header/Header";
import Footer from "../footer/Footer";
import MiniCart from "../miniCart/MiniCart";
import Modal from "../modalCart/Modal";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import {
  CART_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  ACTIVATE_ROUTE,
  BOOK_ROUTE,
  CATEGORY_ROUTE,
  MY_ACCOUNT_ROUTE,
  ORDER_STATUS_ROUTE,
  PAYMENT_METHODS_ROUTE,
  CHECKOUT_ROUTE
} from '../../utils/constants'
import { MainPage, LoginPage, RegistrationPage, OneBookPage, CartPage, CategoryPage, AccountPage, CheckoutPage } from "../../pages";
import {observer} from "mobx-react-lite";
import {useEffect, useContext} from "react";
import {Context} from "../../index";
import Loader from "../loader/Loader";
import SingleBook from "../singleBook/SingleBook";

const App = observer( () => {
  const {userStore, bookStore} = useContext(Context)

  useEffect(()=>{
    userStore.checkAuth();
  }, [])
  


  if(userStore.isLoading){
    return <><Loader/></>
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path={SHOP_ROUTE}>
              <MainPage/>
            </Route>
            <Route exact path={LOGIN_ROUTE}>
              <LoginPage/>
            </Route>
            <Route exact path={REGISTRATION_ROUTE}>
              <RegistrationPage/>
            </Route>
            <Route exact path={CART_ROUTE}>
              <CartPage/>
            </Route>
            <Route exact path={ACTIVATE_ROUTE}>
              <div>Activate your account</div>
            </Route>
            <Route exact path={BOOK_ROUTE}>
              <SingleBook/>
            </Route>
            <Route exact path={CATEGORY_ROUTE}>
              <CategoryPage/>
            </Route>
            <Route exact path={MY_ACCOUNT_ROUTE}>
              <AccountPage page = {'myaccount'}/>
            </Route>
            <Route exact path={ORDER_STATUS_ROUTE}>
              <AccountPage page = {'order'}/>
            </Route>
            <Route exact path={PAYMENT_METHODS_ROUTE}>
              <AccountPage page = {'payment'}/>
            </Route>
            <Route exact path={CHECKOUT_ROUTE}>
              <CheckoutPage/>
            </Route>
            <Redirect to={SHOP_ROUTE}/>
          </Switch>
        </main>
        <MiniCart/>
        <Footer/>
      </div>
    </Router>
  );
})

export default App;
