
const CategoryBook = ({index}) => {
    return(
        <div className="book-container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="number">{index}</div>
                    <div className="image-con">
                        <a href="" className="linktobook">
                            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781728205489_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="" />
                        </a>
                    </div>
                </div>
                <div className="product-info-view col-lg-9">
                    <div className="con-title">
                        <h3 className="titleof-book">
                            <a href="" className="link">If He Had Been with Me</a>
                        </h3>
                    </div>
                    <div className="con-author">
                        <a href="" className="link">by <span>Laura Nowlin</span></a>
                    </div>
                    <div className="con-pricing">
                        <table>
                            <thead className="heading">
                                <tr>
                                    <th className="format">Format</th>
                                    <th className="bookstore">Bookstore.com</th>
                                    <th className="availability">Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="format"> <a href="">Paperback</a> </td>
                                    <td className="bookstore">$18.00</td>
                                    <td className="availability">Available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bottom-btn">
                        <div className="format-variants">
                            <div className="formats">Also available as: <a href="" className="link">eBook</a>, <a href="" className="link">AudioBook</a>
                            </div>
                        </div>
                        <div className="con-btn">
                            <input type="button" value="ADD TO CART" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryBook;