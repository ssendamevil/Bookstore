import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import arrow from '../../resources/svgs/arrowdown.svg';
import './BookList.scss'
import black from '../../resources/img/black.jpg'



export default class BookList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const {books} = this.props

    return (
      <section className="books_section">
        <div className="books_section_header">
          <h2 className="header">New This January</h2>
          <a href="" className="all_link">See all</a>
          <div className="clear"></div>
        </div>
        <Slider {...settings}>
        {
          books.map((book, index)=>{
            return(
              <div key={index} className="product_shelf_tile">
                  <div className="product_shelf_tile_img_cont">
                      <div className="product_shelf_img">
                          <a href={`book/${book._id}`} className="image_link">
                              <img src={book.image[0]} alt="dsd" className="image" />
                          </a>
                      </div>
                  </div>
              </div>
            )
          })
        }
        </Slider>
      </section>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img 
      src={arrow}
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={arrow}
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}