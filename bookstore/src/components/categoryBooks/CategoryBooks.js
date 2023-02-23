
import CategoryBookList from '../categoryBookList/CategoryBookList';
import BookShelf from './BookShelf';
import './CategoryBooks.scss';
import FeaturedSubjects from './FeaturedSubjects';
import ShelfWithInfo from './ShelfWithInfo';

const CategoryBooks = ()=> {
    return (
        <div className="main_content">
            <header className="header">
                <h1 className="title">Fiction Books</h1>
                <p className="info">Browse a variety of fiction genres including general fiction, literature, romance and many more.</p>
            </header>
            <div className="container container-content">
                <div className="content">
                    <div className="left-navbar">
                        <section>
                            <div className="sidebar">
                                <div className="sidebar-section">
                                    <span className="section-header">BROWSE FICTION</span>
                                    <ul className="lists">
                                        <li className="item"><a href="">Bestsellers</a></li>
                                        <li className="item"><a href="">New Releases</a></li>
                                        <li className="item"><a href="">Coming Soon</a></li>
                                        <li className="item"><a href="">Fiction Audiobooks</a></li>
                                        <li className="item"><a href="">Fiction eBooks</a></li>
                                        <li className="item"><a href="">Fiction Home</a></li>
                                    </ul>
                                </div>
                                <div className="sidebar-section">
                                    <span className="section-header">BROWSE FICTION</span>
                                    <ul className="lists">
                                        <li className="item"><a href="">Bestsellers</a></li>
                                        <li className="item"><a href="">New Releases</a></li>
                                        <li className="item"><a href="">Coming Soon</a></li>
                                        <li className="item"><a href="">Fiction Audiobooks</a></li>
                                        <li className="item"><a href="">Fiction eBooks</a></li>
                                        <li className="item"><a href="">Fiction Home</a></li>
                                    </ul>
                                </div>
                                <div className="sidebar-section">
                                    <span className="section-header">BROWSE FICTION</span>
                                    <ul className="lists">
                                        <li className="item"><a href="">Bestsellers</a></li>
                                        <li className="item"><a href="">New Releases</a></li>
                                        <li className="item"><a href="">Coming Soon</a></li>
                                        <li className="item"><a href="">Fiction Audiobooks</a></li>
                                        <li className="item"><a href="">Fiction eBooks</a></li>
                                        <li className="item"><a href="">Fiction Home</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="product-view-section">
                        <div className="category-content">
                            <div className="special-section product-shelf">
                                <h2 className="section-header">Special Sections</h2>
                                <div className="fivecontent">
                                    <a href="" className="se-link">
                                        <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Romance-hover.jpg" alt="" />
                                        <p className="se-name">Romance</p>
                                    </a>
                                    <a href="" className="se-link">
                                        <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Sci_Fi-1-hover.jpg" alt="" />
                                        <p className="se-name">Science Fiction & Fantasy</p>
                                    </a>
                                    <a href="" className="se-link">
                                        <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Manga.jpg" alt="" />
                                        <p className="se-name">Manga</p>
                                    </a>
                                    <a href="" className="se-link">
                                        <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Horror-hover.jpg" alt="" />
                                        <p className="se-name">Horror</p>
                                    </a>
                                    <a href="" className="se-link">
                                        <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Mystery-hover.jpg" alt="" />
                                        <p className="se-name">Mystery</p>
                                    </a>
                                </div>
                            </div>
                            <BookShelf/>
                            <FeaturedSubjects/>
                            <BookShelf/>
                            <ShelfWithInfo/>
                            <BookShelf/>
                            {/* <CategoryBookList/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CategoryBooks;