import React, {createContext, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import UserStore from './store/userStore';
import BookStore from "./store/bookStore";

import './styles/style.scss'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider
        value={{
            userStore: new UserStore(),
            bookStore: new BookStore()
        }}
    >
        
        <App />
        
    </Context.Provider>
);

