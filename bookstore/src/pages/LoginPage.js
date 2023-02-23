import LoginForm from "../components/loginForm/LoginForm";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/constants";
import {checkAuth} from "../services/AuthService";
import {Context} from "../index";

const LoginPage = observer( () => {
    const history = useHistory()
    const {userStore} = useContext(Context)

    return(
        <>
            <LoginForm/>
        </>
    )
})

export default LoginPage;