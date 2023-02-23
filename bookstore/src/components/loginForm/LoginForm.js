import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE, ACTIVATE_ROUTE} from "../../utils/constants";

import './LoginForm.scss'


const LoginForm = observer( () => {
    const {userStore} = useContext(Context)
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        const inputWrappers = document.querySelectorAll('.input_box');
        let inputFields
        inputWrappers.forEach((elem) => {
            inputFields = elem.querySelector('.input');
            if(inputFields.value.length !== 0){
                elem.classList.add('filled')
            }else{
                elem.classList.remove('filled')
            }
        })
    })

    if(userStore.isAuth){
        history.push(SHOP_ROUTE)
    }

    const click = async () => {
        try{
            await userStore.login(email, pass);
            await userStore.getCartBooks(userStore.user.id);
            history.push(SHOP_ROUTE)
        }catch (e) {
            setError(e.response?.data?.message);
        }
    }

    return(
        <div className="login_container">
            <div className="login_box">
                <h3 className="header">Sign in or Create an Account</h3>
                <div className="login_form">
                    <div style={{color: "red", fontStyle: 'Lato', fontSize: "13px"}}>
                        {error}
                    </div>
                    <div className="email_box input_box" >
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email_input" className="email_input input" />
                        <label htmlFor="email_input" className="email_label">Email address</label>
                    </div>
                    <div className="password_box input_box">
                        <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" name="password" id="pass_input" className="password_input input" />
                        <label htmlFor="pass_input" className="password_label">Password</label>
                    </div>
                    <div className="check_forgot_box">
                        <div className="check_box">
                            <input type="checkbox" name="check" id="check_input" className="check_input" />
                            <label htmlFor="check_input" className="check_input">Remember me</label>
                        </div>
                        <div className="forgot_box">
                            <a href="#" className="fp_link">Forgot your password?</a>
                        </div>
                    </div>
                    <div className="submit_box">
                        <button onClick={click} className="login_btn"> Login </button>
                    </div>
                    <div className="register_box">
                        <Link to="/registration" className="register_btn">Create an Account</Link>
                    </div>
                    <div className="policy_box">
                        <span className="text">By signing in you are agreeing to our Terms of Use and our Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default LoginForm;