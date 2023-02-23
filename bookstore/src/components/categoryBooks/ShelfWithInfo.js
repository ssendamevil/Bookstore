import React, { Component } from "react";
import Slider from "react-slick";

import arrow from '../../resources/svgs/arrowdown.svg';
import './ShelfWithInfo.scss';
const arr = [1,1,1,1,1,1,1,1,1,1,];

export default class ShelfWithInfo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,    
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
                <div className="items-con">
                    <div className="pr-ed-info">
                        <h3 className="title">This Month's Selection: Maame</h3>
                        <div className="para">
                            <p className="text">Smart, funny, and deeply affecting, Jessica George's Maame deals with the themes of our time with humor and poignancy: from familial duty and racism, to the complexity of love, and the life-saving power of friendship.</p>
                        </div>
                    </div>
                </div>
                <div className="bookslider">
                    <Slider {...settings}>
                        {arr.map((i, index)=>(
                            <div key={index} className="product_shelf_tile sh-tile">
                                <div className="product_shelf_tile_img_cont">
                                    <div className="product_shelf_img">
                                        <a href="#" className="image_link">
                                            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593655252_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="dsd" className="image shelf-image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product_shelf_info shelf-info">
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