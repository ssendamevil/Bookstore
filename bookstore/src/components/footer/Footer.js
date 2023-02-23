import './Footer.scss'
import arrowdown from '../../resources/svgs/arrowWhite.svg'

const Footer = () => {
    return(
        <footer className="text-center">
            <div className="container ">

                <section className="newsletter">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline mb-4">
                                    <input type="email" id="form5Example27" className="form-control" placeholder='Enter email...'/>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-4">
                                Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="details">
                    <div className="details_container">
                        <div className="drawer">
                            <div className="drawer_services">
                                <span className='title'>Quick help</span>
                                <a href="" className="item">Help center</a>
                                <a href="" className="item">Shipping & Returns</a>
                                <a href="" className="item">Buy Online, Pick up in Store</a>
                                <a href="" className="item">Order Status</a>
                                <a href="" className="item">Product Recalls</a>
                                <a href="" className="item">Corrections & Updates</a>
                                <a href="" className="item">Gift cards</a>
                            </div>
                            <div className="drawer_services">
                                <span className='title'>About us</span>
                                <a href="" className="item">About Bookstore</a>
                                <a href="" className="item">Careers at Bookstore</a>
                                <a href="" className="item">Bookstore. Inc</a>
                                <a href="" className="item"></a>
                            </div>
                            <div className="drawer_services">
                                <span className='title'>Shop By Category </span>
                                <a href="" className="item">Books</a>
                                <a href="" className="item">Fiction</a>
                                <a href="" className="item">NonFiction</a>
                                <a href="" className="item">Kids</a>
                                <a href="" className="item">Teens & YA</a>
                                <a href="" className="item">eBooks</a>
                                <a href="" className="item">Audiobooks</a>
                                <a href="" className="item">Holiday Gift Guide</a>
                            </div>
                        </div>
                        <div className="drawer2">
                            <div className="find_store">
                                <span className="title">Find a store</span>
                                <form action="">
                                    <input type="text" className="field" placeholder='Store name, location, or ZIP code' />
                                    <button type='submit'><img src={arrowdown} alt="" srcSet="" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            

            
            <div className="text-center" >
                <div className="ft-legal">
                    <ul>
                        <li><a href="" className="item">Terms of Use</a></li>
                        <li><a href="" className="item">Copyright & Trademark</a></li>
                        <li><a href="" className="item">Privacy</a></li>
                        <li><a href="" className="item">Accessibility</a></li>
                        <li><a href="" className="item">Cookie Policy</a></li>
                        <li><a href="" className="item">Sitemap</a></li>
                    </ul>
                </div>
                <div className="copyright">
                    © 2020 Copyright:
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;