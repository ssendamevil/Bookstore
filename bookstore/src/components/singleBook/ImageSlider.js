import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import './ImageSlider.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {observer} from "mobx-react-lite";

const ImageSlider = observer(({images}) => {
    const [state, setState] = useState({
    nav1: null,
    nav2: null
    });

    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
    setState({
        nav1: slider1.current,
        nav2: slider2.current
    });
    }, []);

    const {
    nav1,
    nav2
    } = state;
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        nextArrow: <ArrowDown/>,
        prevArrow: <ArrowUp/>
    }
    return(
        <div className="product-image">
            <div className="first_slider">
                <Slider
                    asNavFor={nav1}
                    ref={slider => (slider2.current = slider)}
                    {...settings2}
                >
                    {
                    images?.map((image)=>{
                        return (
                            <div className="slider-item">
                                <img src={image} alt="" />
                            </div>
                        )
                    })
                    }
                    <div className="slider-item">
                        <img src={images} alt="" />
                    </div>
                </Slider>
            </div>
            <div className="second_slider">
                <Slider
                    asNavFor={nav2}
                    ref={slider => (slider1.current = slider)}
                    {...settings1}
                >
                    {
                        images?.map((image)=>{
                            return (    
                                <div className="slider-item">
                                    <img src={image} alt="" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div> 
    )
})

const ArrowDown = (props) => {
    const { className, style, onClick } = props;
    return(
        <div className="arrowDown">
            <ArrowBackIosIcon 
            className={className}
            style={{ ...style, display: "block", transform: "rotate(-90deg)", color: "black" }}
            onClick={onClick}
            />
        </div>
    )
}

const ArrowUp = (props) => {
    const { className, style, onClick } = props;
    return(
        <div className="arrowUp">
            <ArrowBackIosIcon 
            className={className}
            style={{ ...style, display: "block", transform: "rotate(90deg)", color: "black" }}
            onClick={onClick}
            />
        </div>
    )
}


export default ImageSlider;