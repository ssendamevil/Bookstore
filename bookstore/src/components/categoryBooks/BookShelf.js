import React, { Component } from "react";
import Slider from "react-slick";

import arrow from '../../resources/svgs/arrowdown.svg';
const arr = [1,1,1,1,1,1,1,1,1,1,];

export default class BookShelf extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,    
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };


    return (
        <div className="product-shelf">
            <h2 className="section-header">
                Bookseller Favorites
                <a href="" className="link">See all</a>
            </h2>
            <div className="fivecontent">
                <Slider {...settings}>
                    {arr.map((i, index)=>(
                        <div key={index} className="product_shelf_tile">
                            <div className="product_shelf_tile_img_cont">
                                <div className="product_shelf_img">
                                    <a href="#" className="image_link">
                                        <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593655252_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="dsd" className="image" />
                                    </a>
                                </div>
                            </div>
                            <div className="product_shelf_info">
                                <div className="title">
                                    <a href="" className="linktobook"> Someone Else's Shoes</a>
                                </div>
                                <div className="author">
                                    <a href="" className="linktoauthor">by <span>Jojo Moyes</span></a>
                                </div>  
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
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