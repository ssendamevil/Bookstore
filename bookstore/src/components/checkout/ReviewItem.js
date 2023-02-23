
const ReviewItem = () => {
    return(
        <section className="review_item">
            <div className="product-tile-container">
                <div className="row">
                    <div className="col-lg-2">
                        <a href="" className="img-link">
                            <img src="https://prodimage.images-bn.com/pimages/9781250304469_p0_v1_s90x140.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-6 con-bookinfo">
                                <div className="book-title">
                                    <a href="" className="book-link">The Maidens</a>
                                </div>
                                <div className="book-author">
                                    <span className="author">by <a href="" className="link">Alex Michaelides</a></span>
                                </div>
                                <div className="book-cover">
                                    Paperback
                                </div>
                            </div>
                            <div className="col-lg-6 con-pqt">
                                <div className="price pqt">
                                    <span>7990 t</span>
                                </div>
                                <div className="qty pqt">
                                    <span>Qty: 2</span>
                                </div>
                                <div className="pqt total">
                                    <span>15980 t</span>
                                </div>
                            </div>
                        </div>
                        <div className="row ptt">
                            <div className="arrivalDate">Estimated Arrival Date: <span className="date">Friday, February 24</span> </div>
                            <div className="advice">Want it by Thursday, February 23? Change shipping speed to Expedited Shipping and then place your order.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewItem;