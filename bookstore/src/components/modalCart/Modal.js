import {Link} from "react-router-dom"
import {CART_ROUTE} from "../../utils/constants";
import './Modal.scss'


const Modal = ({book}) => {
    return(
        <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Your order qualifies for Free Standard Shipping </h5>
                    <div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="tumbnail">
                        <img src={book.image? book.image[0]:''} alt="" />
                    </div>
                    <div className="desc">
                        <div className="info_box">
                            <span className="info">Item Successfully Added To Your Cart</span>
                        </div>
                        <div className="price_title">
                            <h3 className="title">
                                {book.name}
                            </h3>
                            <div className="price">{book.price?book.price.hardcover:0}₸</div>
                        </div>
                        <div className="author">
                            <span className="authorName">By 
                                {
                                    book.author?
                                    book.author.map((author, index) => {
                                        return(
                                            <a key={index} href="" style={{marginLeft: '7px'}}  className="link">{author.name}{index+1 !== book.author.length?", ":""}</a>
                                        );
                                    }):
                                    ""
                                }
                            </span>
                        </div>
                        <div className="format_price_qty">
                            <div className="format">Hardcover</div>
                            <span className="line">|</span>
                            <div className="price">{book.price?book.price.hardcover:0}₸</div>
                            <span className="line">|</span>
                            <div className="quantity">Qty: 1</div>
                        </div>
                        <div className="btns">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
                            <a href={`http://localhost:3000`+ CART_ROUTE} type="button" className="btn btn-primary">View Shopping Cart</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;