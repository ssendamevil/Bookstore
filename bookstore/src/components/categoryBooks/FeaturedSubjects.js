
import './FeaturedSubjects.scss';

const FeaturedSubjects = () => {
    const arr = [1,1,1,1,1,1,1,1];
    return(
        <div className="product-shelf">
            <h2 className="section-header">
                Featured Subjects
            </h2>
            <div className="fivecontent">
                <div className="department-product-grid">
                    {arr.map((i, index)=>(
                        <div key={index} className="feature-link-item">
                            <div className="feature-item">
                                <header className="fc-title">
                                    <a href="" className="link">General Fiction</a>
                                </header>
                                <div className="fc-content">
                                    <a href="" className="fc-link">
                                        <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063142350_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedSubjects;