import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ImageSlider from "./ImageSlider";
import slider from './slider'

import './SingleBook.scss'
import {bookchek, lorry} from '../../resources/svgs'
import StarIcon from '@mui/icons-material/Star';
import {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {fetchBookById} from "../../services/BookService";
import {Context} from "../../index";
import Modal from "../modalCart/Modal";

const SingleBook = () => {
    const {userStore, bookStore} = useContext(Context)
    const {sliding} = slider();
    const {id} = useParams();

    useEffect(()=>{
        async function fetchData(){
            try{
                const res = await bookStore.getOneBook(id);
            }catch (e){
                alert(e.response?.data?.message)
            }
        }
        fetchData();
        sliding();
    },[])

    const addtocart = async () => {
        if(userStore.isAuth){
            await userStore.addToCart(bookStore.book._id, userStore.user.id);
            await userStore.getCartBooks(userStore.user.id);
        }else{
            localStorage.setItem('cart', bookStore.book._id)
        }
    }


    return(
        <div className="single-book-container">
            <section className="single-book-box">
                <div className="productDetail">
                    <ImageSlider images={bookStore.book.image} />
                    <div className="product-details">
                        <div className="header">
                            <h1 className="title">{bookStore.book.name}</h1>
                            <span className="author">by 
                                
                                {
                                    bookStore.book.author?
                                    bookStore.book.author.map((author, index) => {
                                        return(
                                            <a key={index} href="" style={{marginLeft: '7px'}} className="ds">{author.name}{index+1 !== bookStore.book.author.length?", ":""}</a>
                                        );
                                    }):
                                    ""
                                }
                                
                            </span>
                            <div className="review_stars">
                                <StarIcon style={{color:  '#ffb500', width: "20px"}} />
                                <StarIcon style={{color:  '#ffb500', width: "20px"}} />
                                <StarIcon style={{color:  '#ffb500', width: "20px"}} />
                                <StarIcon style={{color:  '#ffb500', width: "20px"}} />
                                <StarIcon style={{color:  '#ffb500', width: "20px"}} />
                            </div>
                        </div>
                        <div className="box-cover">
                            <h2 className="cover">Paperback</h2>
                        </div>
                        <div className="box-price">
                            <span className="price">{bookStore.book.price?bookStore.book.price.hardcover: 0} ₸</span>
                        </div>
                        <div className="box-formats">
                            <div className="format_price_container">
                                {bookStore.book.price? 
                                    parseInt(bookStore.book.price.paperback)===0 || !bookStore.book.price.paperback?
                                    <></> : 
                                    <div className="price_cont">
                                        <a href="" className="link">
                                            <span className="format">Paperback</span>
                                            <span className="price">{bookStore.book.price? bookStore.book.price.paperback : 0} ₸</span>
                                        </a>
                                    </div>
                                : <></>}
                                {bookStore.book.price? 
                                    parseInt(bookStore.book.price.eBook)===0 || !bookStore.book.price.eBook?
                                    <></> : 
                                    <div className="price_cont">
                                        <a href="" className="link">
                                            <span className="format">eBook</span>
                                            <span className="price">{bookStore.book.price? bookStore.book.price.ebook : 0} ₸</span>
                                        </a>
                                    </div>
                                : <></>}
                                {bookStore.book.price? 
                                    parseInt(bookStore.book.price.hardcover)===0 ?
                                    <></> : 
                                    <div className="price_cont">
                                        <a href="" className="link active">
                                            <span className="format">Harcover</span>
                                            <span className="price">{bookStore.book.price? bookStore.book.price.hardcover : 0} ₸</span>
                                        </a>
                                    </div>
                                : <></>}
                                {bookStore.book.price? 
                                    parseInt(bookStore.book.price.audiobook)===0 || !bookStore.book.price.audiobook?
                                    <></> : 
                                    <div className="price_cont">
                                        <a href="" className="link ">
                                            <span className="format">AudioBook</span>
                                            <span className="price">{bookStore.book.price? bookStore.book.price.audiobook : 0} ₸</span>
                                        </a>
                                    </div>
                                : <></>}
                            </div>
                        </div>
                        <div className="shipping">
                            <form action="">
                                <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="ship"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="ship" control={<Radio />} label="Ship This Item — Qualifies for Free Shipping " />
                                        <FormControlLabel value="pick" control={<Radio />} label="Buy Online, Pick up in Store" />
                                </RadioGroup>
                            </form>
                        </div>
                        <div className="box-buy-btn">
                            <input onClick={addtocart} type="button" value="ADD TO CART" className='addtocart' data-bs-toggle="modal" data-bs-target="#exampleModal" />
                        </div>
                        <div className="availablity">
                            <img src={lorry} alt="" />
                            <span className="info">Available for Pre-Order. This item will be available on September 5, 2023</span>
                        </div>
                        <div className="ad">
                            <img src={bookchek} alt="" />
                            <span className="adtext">Reserve Now, Pay in Store</span>
                        </div>
                    </div>
                </div>
                <section className="overview">
                    <div className="content">
                        <div className="content-title-box">
                            <h4 className="title">Overview</h4>
                        </div>
                        <div className="content-text">
                            <div className="content-text-part">
                                <p>
                                    {bookStore.book.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="prodtabs">
                    <div className="prodtabs-tabs">
                        <ul className="tabs">
                            <li className="tab tab1 ">
                                <a  className="btnn">Product Details</a>
                            </li>
                            <li className="tab tab2">
                                <a  className="btnn">About the Author</a>
                            </li>
                        </ul>
                    </div>
                    <div className="prodtabs-det-box">
                        <div className="prodtabs-det">
                            <div className="det-box">
                                <div className="productDets">
                                    <h2 className="title">Product Details</h2>
                                    <table className="plain">
                                        <tbody>
                                            <tr>
                                                <th>ISBN-13:</th>
                                                <td>{bookStore.book.details?bookStore.book.details.ISBN: <></>}</td>
                                            </tr>
                                            <tr>
                                                <th>Publisher:</th>
                                                <td><a href="#" className="link">{bookStore.book.details?bookStore.book.details.publisher: <></>}</a></td>
                                            </tr>
                                            <tr>
                                                <th>Publication date:</th>
                                                <td>{bookStore.book.details?bookStore.book.details.publication_date: <></>}</td>
                                            </tr>
                                            <tr>
                                                <th>Pages:</th>
                                                <td>{bookStore.book.details?bookStore.book.details.pages: <></>}</td>
                                            </tr>
                                            <tr>
                                                <th>Sales rank:</th>
                                                <td>{bookStore.book.details?bookStore.book.details.sales_rank: <></>}</td>
                                            </tr>
                                            <tr>
                                                <th>Product dimensions:</th>
                                                <td>{bookStore.book.details?bookStore.book.details.product_dimensions.w+"×"+bookStore.book.details.product_dimensions.h+"×"+bookStore.book.details.product_dimensions.d: <></>}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="productDets">
                                    <h2 className="title">About the Author</h2>
                                    <div className="authordesc">
                                        <div>
                                            Laura Dave is the #1 New York Times bestselling author of The Last Thing He Told Me, Eight Hundred Grapes, and other novels. Her books have been published in thirty-eight countries and have been chosen by Reese Witherspoon’s Book Club, Book of the Month Club, and the Richard and Judy Book Club. The Last Thing He Told Me was chosen as the Goodreads Mystery & Thriller of the Year for 2021. It is soon to be a limited series on Apple TV+, cocreated by Laura. She resides in Santa Monica, California.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <script src="./slideProduct.js"></script>
            <Modal book={bookStore.book}/>
        </div>
    )
}

export default SingleBook;