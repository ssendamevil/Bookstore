import { useState, useTransition, useMemo, useRef } from 'react';
import data from './data';

import './SearchBar.scss';
import arrowd from '../../resources/svgs/arrowdown.svg';
import search from '../../resources/svgs/search.svg';
import { useEffect } from 'react';

const SearchBar = () => {
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef()
    const [searchTxt, setSearchTxt] = useState('')
    const [result, setResult] = useState([])
    const [isPending, startTransition] = useTransition()
    const [dropdownItem, setDropdownItem] = useState('All')

    const onValueChange = (e) => {
        startTransition(() => {
            setSearchTxt (e.target.value)
            const searchResults = data.filter(item => item.name.toLowerCase().includes(searchTxt.toLowerCase()))
            if(e.target.value === ""){
                setResult([])
            }else{
                setResult(searchResults)
            }
        
        })
    }

    const onClickToDropdown = () => {
        setDropdown(!dropdown)
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(!dropdownRef.current.contains(e.target) ){
                
                if(e.target.getAttribute('data-link') === 'drpi'){
                    setDropdownItem(e.target.innerText);
                }
                setDropdown(false)
            }
        };
        document.body.addEventListener('click', handleOutsideClick);

        return() => document.body.removeEventListener('click', handleOutsideClick)
    },[])

    return(
        <div className="search_container">
            <form action="#" className="search_form">
                <div className="search_box_dropdown">
                    <a ref={dropdownRef} onClick={() => onClickToDropdown()} href="#" className="search_dropdown_btn">
                        {dropdownItem}
                        <img src={arrowd} alt="" className='search_dropdown_btn_arrow'/>
                    </a>
                    <div className={`search_dropdown_menu ${dropdown ? 'active': null}`}>
                        <a href="#" data-link="drpi" className={`search_dropdown_item ${dropdownItem === 'All' ? "search_dropdown_item_active": "null"}`}>All</a>
                        <a href="#" data-link="drpi" className={`search_dropdown_item ${dropdownItem === 'Books' ? "search_dropdown_item_active": "null"}`}>Books</a>
                        <a href="#" data-link="drpi" className={`search_dropdown_item ${dropdownItem === "Audiobooks" ? "search_dropdown_item_active": "null"}`}>Audiobooks</a>
                        <a href="#" data-link="drpi" className={`search_dropdown_item ${dropdownItem === "eBooks" ? "search_dropdown_item_active": "null"}`}>eBooks</a>
                        <a href="#" data-link="drpi" className={`search_dropdown_item ${dropdownItem === "Kids" ? "search_dropdown_item_active": "null"}`}>Kids</a>
                        <a href="#" data-link="drpi" className={`search_dropdown_item ${dropdownItem === "Teens & YA" ? "search_dropdown_item_active": "null"}`}>Teens & YA</a>
                        <a href="#" data-link="drpi" className={`search_dropdown_item ${dropdownItem === "Music" ? "search_dropdown_item_active": "null"}`}>Music</a>
                    </div>
                </div>
                <div className="search_box_input">
                    <div className="search_input_field_con">
                        <input value={searchTxt} onChange={onValueChange} type="text" className="search_input_field" placeholder="Search by Title, Author, Keyword or ISBN"/>
                    </div>
                        
                    {result.length !== 0 && (
                        <div className="search_input_result">
                            {isPending? <a href="#" className="result_item disabled"><span className="result_item_label">Searching...</span></a>:
                            result.map((res, i) => (
                                <a href="#" key={res._id} className={`result_item ${ i === 0 ? 'first_result': null}`}>
                                    <span className="result_item_label">{res.name}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="search_box_btn">
                    <button className="search_btn" type="button">
                        <img src={search} alt="" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;