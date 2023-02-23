import {makeAutoObservable} from "mobx";
import {addBookToCart, checkAuth, getCartBooks, login, logout, registration, updateCart} from "../services/AuthService";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._isLoading = false
        this._cartItems = []
        makeAutoObservable(this)
    }
    setCartItems(cartItems){
        this._cartItems = cartItems
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    setIsLoading(bool){
        this._isLoading = bool
    }

    get cartItems(){
        return this._cartItems
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }

    get isLoading(){
        return this._isLoading
    }

    async login(email, password){
        const res = await login(email, password)
        localStorage.setItem('token', res.data.accessToken);
        this.setIsAuth(true)
        this.setUser(res.data.user)
    }

    async registration(email, password, name, surname){
        const res = await registration(email, password, name, surname)
        localStorage.setItem('token', res.data.accessToken);
        this.setIsAuth(true)
        this.setUser(res.data.user)
    }

    async logout(){
        try{
            const res = await logout();
            localStorage.removeItem('token');
            this.setUser({})
            this.setIsAuth(false)
        }catch (e) {
            alert(e.response?.data?.message)
        }
    }

    async checkAuth(){
        this.setIsLoading(true);
        try{
            const res = await checkAuth()
            localStorage.setItem('token', res.data.accessToken)
            this.setUser(res.data.user)
            this.setIsAuth(true)
        }catch (e) {
            if (e.res?.data?.status === 401){
                await logout();
                localStorage.removeItem('token');
                this.setUser({})
                this.setIsAuth(false)
            }
        }
        this.setIsLoading(false)
    }

    async getCartBooks(userId){
        try {
            const res = await getCartBooks(userId)
            this.setCartItems(res.data)
        }catch (e) {
            alert(e.res?.data?.message)
        }
    }

    async updateCartItem(userId, idx , qnt, key){
        try{
            let res;
            if(qnt<=0 && key === 'upd'){
                res = await updateCart(userId, idx, qnt, 'rmv')
            }else{
                res = await updateCart(userId, idx, qnt, key)
            }
            this.setCartItems(res.data)
            return res
        }catch (e) {
            alert(e.res?.data?.message)
        }
    }

    async addToCart(bookId, userId){
        try {
            const res = await addBookToCart(userId, bookId)
            this.setCartItems(res.data)
            return res
        }catch (e) {
            alert(e.res?.data?.message)
        }
    }
}