import { useEffect, useState } from 'react';
import {Link, Redirect} from "react-router-dom";

import './RegisterForm.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {ACTIVATE_ROUTE, SHOP_ROUTE} from "../../utils/constants";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {useContext} from "react";

const RegisterForm = observer( () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [confPass, setConfPass] = useState('');
    const {userStore} = useContext(Context);
    const history = useHistory();

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
            await userStore.registration(email, pass, fname, lname);
            if (!userStore.user.isActivated){
                history.push(ACTIVATE_ROUTE)
            }else {
                history.go(0)
            }
        }catch (e) {
            alert(e.response?.data?.message)
        }
    }

    return(
        <div className="register_container">
            <div className="box_register">
                <h3 className="header">Create an Account</h3>
                <div className="box_signin">
                    <div className="recom">
                        Fill in the fields below to create a BookStore.com account.
                    </div>
                    <div className="signin">
                        If you already have an account, please
                        <Link to="/login" className="link">Sign in</Link>
                    </div>
                </div>
                <div className="register_form">
                    <div className="box_fname input_box">
                        <input onChange={(e) => setFname(e.target.value)} value={fname} type="text" name="firstName" id="first_name" className='input_fname input'/>
                        <label htmlFor="first_name" className='label_fname'>First Name</label>
                    </div>
                    <div className="box_lname input_box">
                        <input onChange={(e) => setLname(e.target.value)} value={lname} type="text" name="lastName" id="last_name" className='input_lname input'/>
                        <label htmlFor="last_name" className='label_lname'>Last Name</label>
                    </div>
                    <div className="box_email input_box">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email_input" className="input_email input" />
                        <label htmlFor="email_input" className="label_email">Email address</label>
                    </div>
                    <div className="box_password input_box">
                        <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" name="password" id="pass_input" className="input_password input" />
                        <label htmlFor="pass_input" className="label_password">Password</label>
                    </div>
                    <div className="box_password_check">
                        <ul className="checklist">
                            <li className="list">
                                <div className="icon">
                                    {pass.length >= 8? <CheckCircleIcon/>: <HighlightOffIcon style={{color: "red"}}/> }
                                </div>
                                <div className="text">Be between 8-15 characters</div>
                            </li>
                            <li className="list">
                                <div className="icon">
                                    {(/[A-Z]/).test(pass) ? <CheckCircleIcon/>: <HighlightOffIcon style={{color: "red"}}/> }
                                </div>
                                <div className="text">Contain at least one capital letter</div>
                            </li>
                            <li className="list">
                                <div className="icon">
                                    {(/\d/).test(pass)? <CheckCircleIcon/>: <HighlightOffIcon style={{color: "red"}}/> }
                                </div>
                                <div className="text">Contain at least one number</div>
                            </li>
                            <li className="list">
                                <div className="icon">
                                    {pass !== fname && pass.length !== 0 && fname.length !== 0? <CheckCircleIcon/>: <HighlightOffIcon style={{color: "red"}}/> }
                                </div>
                                <div className="text">Be different from your username</div>
                            </li>
                        </ul>
                    </div>
                    <div className={`box_confpassword input_box ${pass !== '' && confPass !== '' && confPass !== pass? "error": ""}`}>
                        <input onChange={(e) => setConfPass(e.target.value)} value={confPass} type="password" name="confPassword" id="confpass_input" className="input_confpassword input" />
                        <label htmlFor="confpass_input" className="label_confpassword">Confirm Password</label>
                    </div>
                    <div className="box_submit">
                        <button onClick={click} className="register_btn">Create Account</button>
                    </div>
                    <div className="box_policy">
                        <span className="text">By signing in you are agreeing to our Terms of Use and our Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default RegisterForm;