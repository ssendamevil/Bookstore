import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './Navbar.scss'
import star from '../../resources/svgs/star.svg';
import arrow from '../../resources/svgs/arrowdown.svg'
import { CATEGORY_ROUTE } from '../../utils/constants';

const Navbar = () => {
    return(
        <div className="navbar_container">
            <div className="navbar_box">
                <ul className="navbar_nav_list">
                    <li className="nav_item">
                        <a href="#" className="nav_item_link">Books</a>
                        <DropdownMenu/>
                    </li>
                    <li className="nav_item">
                        <a href="#" className="nav_item_link">AudioBooks</a>
                        <DropdownMenu/>
                    </li>
                    <li className="nav_item">
                        <a href="#" className="nav_item_link">eBooks</a>
                        <DropdownMenu/>
                    </li>
                    <li className="nav_item">
                        <a href="#" className="nav_item_link">Music & Movies</a>
                        <DropdownMenu/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel controls={false} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/topnav-promopod-images/2022/Books/PROD-25524_Jan23_OMP_Flyout_01-01.jpg'
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/topnav-promopod-images/2022/Books/PROD-25650_RUSH_PostHoliday_Flyout_12-26.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/audiobooks/TopNavPromoPod/2022/PROD-24888_Audiobooks_Flyout_2_10-24.jpg'
            alt="Third slide"
          />
  
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

function DropdownMenu(){
    return(
        <div className="nav_item_dropdown">
            <div className="nav_dropdown_menu row">
                <div className="col_md_9">
                    <div className="row menu_box">
                        <div className="col_md_12 section_heading">
                            <a href="" className="heading">Books
                            <img src={arrow} alt="" />
                            </a>
                        </div>
                        <div className="col_md_3 section">
                            <div className="single_item">
                                <div className="child_header">
                                    <span className="sub_heading">
                                    <img src={star} alt="" />
                                    Bestsellers
                                    </span>
                                </div>
                                <dd>
                                    <a href={CATEGORY_ROUTE} className="single_item_link">EBook Top 100</a>
                                    <a href="" className="single_item_link">Indie Top 100</a>
                                    <a href="" className="single_item_link">NY Times Bestsellers</a>
                                    <a href="" className="single_item_link">All Bestsellers</a>
                                </dd>
                            </div>
                        </div>
                        <div className="col_md_3 section">
                            <div className="single_item">
                                <div className="child_header">
                                    <span className="sub_heading fiction_heading">Top subjects</span>
                                </div>
                                <dd>
                                    <a href="" className="single_item_link">Biography</a>
                                    <a href="" className="single_item_link">Cookbooks, Food & Wine</a>
                                    <a href="" className="single_item_link">General Fiction</a>
                                    <a href="" className="single_item_link">Historical Fiction</a>
                                    <a href="" className="single_item_link">History</a>
                                    <a href="" className="single_item_link">Horror</a>
                                    <a href="" className="single_item_link">Manga</a>
                                    <a href="" className="single_item_link">Mystery & Crime</a>
                                    <a href="" className="single_item_link">Religion</a>
                                    <a href="" className="single_item_link">Romance</a>
                                    <a href="" className="single_item_link">Sci-Fi & Fantasy</a>
                                    <a href="" className="single_item_link">See All Subjects</a>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col_md_3 ad_panel">
                    <ControlledCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;