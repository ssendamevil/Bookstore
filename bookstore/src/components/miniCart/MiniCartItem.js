import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const MiniCartItem = ({ item, idx}) => {
    const {userStore} = useContext(Context)
    const [counter, setCounter] = useState(item.quantity);

    const inc = () => {
        setCounter(counter=> counter +1)
    }

    const dec = () => {
        if(counter-1 < 0){
            setCounter(0)
        }else{
            setCounter(counter  => counter - 1)
        }
    }

    const onValueChange = (e) => {
        const value = parseInt(e.target.value)
        if(isNaN(value)){
            setCounter('')
        }else{
            setCounter(value)
        }
        
    }

    const updateItem = async ()=>{
        try{
            const resp = await userStore.updateCartItem(userStore.user.id, idx, counter, 'upd');
            await userStore.getCartBooks(userStore.user.id);
        }catch (e){
            alert(e.response?.data?.message)
        }
    }

    const removeItem = async ()=>{
        try{
            const resp = await userStore.updateCartItem(userStore.user.id, idx, counter, 'rmv');
            await userStore.getCartBooks(userStore.user.id);
        }catch (e){
            alert(e.response?.data?.message)
        }
    }

    return(
        <div className="minicart-item">
            <a href="" className="image">
                <img src={item.book.image[0]} alt="" style={{width: "100%"}} />
            </a>
            <ul className="desc">
                <li className="item"><a href="" className="title">{item.book.name}</a></li>
                <li className="item">
                    {
                        item.book.author?
                        item.book.author.map((author, index) => {
                            return(
                                <a key={index} href="" className="author">
                                    {author.name}
                                    {index+1 !== item.book.author.length?", ":""}
                                </a>
                            );
                        }):
                        ""
                    }
                </li>
                <li className="item type">Harcover</li>
                <li className="item">
                    <span className="new-price">{item.book.price.hardcover}₸</span>
                    {/* <s className="dark-gray">$29.00</s> */}
                </li>
                <li className="item counter">
                    <button onClick={dec} className="dec">-</button>
                    <input type="text" onChange={onValueChange} value={counter} />
                    <button onClick={inc} className="inc">+</button>
                </li>
                <li className="item btns">
                    <div className="later">
                        <input type="button" value='Save for Later' className="later_btn" />
                    </div>
                    <div className="remove">
                        <input onClick={removeItem} type="button" value="Remove" className="remove_btn" />
                    </div>
                </li>
                <li className="item btns">
                    <div className="update">
                        <input onClick={updateItem} type="button" value="Update" className="update_btn" />
                    </div>
                </li>
                <li className="item">
                    <span className="availability">This item is not available for in-store pick up.</span>
                </li>
            </ul>
        </div>
    )
}

export default MiniCartItem;