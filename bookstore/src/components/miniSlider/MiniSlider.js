import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import arrow from '../../resources/svgs/arrowdown.svg';
import './MiniSlider.scss';
import black from '../../resources/img/black.jpg'



export default class MiniSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const {books} = this.props

    return (
      <section className="books_section mini-slider">
        <div className="mini-slider-wrappper">
        <Slider {...settings}>
                <div className="product_shelf_tile">
                    <div className="product_shelf_tile_img_cont">
                        <div className="product_shelf_img">
                            <a href='' className="image_link">
                                <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/31/255810_PCL_3_New-in-YA_01-31.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="dsd" className="image" />
                            </a>
                        </div>
                    </div>
                    <div className="product_shelf_text">
                        <ul>
                            <li className="slogan">
                                Love & Lore
                                <br/>
                                We have what you desire in our Exclusive Edition of Lore Olympus Volume 5
                            </li>
                            <li className="link">
                                <a href="" className="">
                                    Shop now
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product_shelf_tile">
                    <div className="product_shelf_tile_img_cont">
                        <div className="product_shelf_img">
                            <a href='' className="image_link">
                                <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/BNApp/PromoCarousel/2023/01/25854_PCL_1_OMP_02-01.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="dsd" className="image" />
                            </a>
                        </div>
                    </div>
                    <div className="product_shelf_text">
                        <ul>
                            <li className="slogan">
                                Love & Lore
                                <br/>
                                We have what you desire in our Exclusive Edition of Lore Olympus Volume 5
                            </li>
                            <li className="link">
                                <a href="" className="">
                                    Shop now
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product_shelf_tile">
                    <div className="product_shelf_tile_img_cont">
                        <div className="product_shelf_img">
                            <a href='' className="image_link">
                                <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/14/26131_PCL_1_Lore-Olympus-Vol-5_02-13.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="dsd" className="image" />
                            </a>
                        </div>
                    </div>
                    <div className="product_shelf_text">
                        <ul>
                            <li className="slogan">
                                Love & Lore
                                <br/>
                                We have what you desire in our Exclusive Edition of Lore Olympus Volume 5
                            </li>
                            <li className="link">
                                <a href="" className="">
                                    Shop now
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product_shelf_tile">
                    <div className="product_shelf_tile_img_cont">
                        <div className="product_shelf_img">
                            <a href='' className="image_link">
                                <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/10/25808_PCL_BOTY_01-10.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="dsd" className="image" />
                            </a>
                        </div>
                    </div>
                    <div className="product_shelf_text">
                        <ul>
                            <li className="slogan">
                                Love & Lore
                                <br/>
                                We have what you desire in our Exclusive Edition of Lore Olympus Volume 5
                            </li>
                            <li className="link">
                                <a href="" className="">
                                    Shop now
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </Slider>
        </div>
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