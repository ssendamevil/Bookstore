import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './BigSlider.scss'

function BigSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="bigslider_container">
        <Carousel interval={60000} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <a href="" className="carousel-item_link to_right">
                    <img
                    className="d-block w-100"
                    src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/14/25817_Quote_A1_Questions_02-14.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel_quote_container">
                            <div className="carousel_quote_brow"></div>
                            <div className="carousel_quote_text " >
                            “Part boarding school drama, part forensic whodunit... a true literary mystery—haunting and hard to put down.”
                            </div>
                            <div className="carousel_quote_source">
                                - Jennifer Egan, author of The Candy House
                            </div>
                        </div>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="" className="carousel-item_link">
                    <img
                    className="d-block w-100"
                    src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/03/25556_A1_BanditQueens_01-03.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel_quote_container">
                            <div className="carousel_quote_brow">Our New Book Club Pick</div>
                            <div className="carousel_quote_text">“A hilarious romp about serious things ...twisty, compulsive, bold, surprising, moving.”</div>
                            <div className="carousel_quote_source">
                                Elizabeth McCracken, 
                                <br/>
                                author of <i>The Souvenir Museum</i>
                            </div>
                        </div>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="" className="carousel-item_link">
                    <img
                    className="d-block w-100"
                    src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/03/25556_A2_NightWhereverWeGo_01-03.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel_quote_container">
                            <div className="carousel_quote_brow">Discover Debut Author: Tracey Rose Peyton</div>
                            <div className="carousel_quote_text">“A tale of epic survival, a song of collective resilience...”</div>
                            <div className="carousel_quote_source">
                                Rachel Heng, author of 
                                <i>Suicide Club</i>
                            </div>
                        </div>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="" className="carousel-item_link to_right">
                    <img
                    className="d-block w-100"
                    src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/07/25816_Quote_A2_A_Day_Fallen_Night_02-07.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel_quote_container">
                            <div className="carousel_quote_brow"></div>
                            <div className="carousel_quote_text">“Get lost in this enchanting epic prequel to The Priory of the Orange Tree, filled with dragons, magic and lore.”</div>
                            <div className="carousel_quote_source">
                                
                            </div>
                        </div>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default BigSlider;