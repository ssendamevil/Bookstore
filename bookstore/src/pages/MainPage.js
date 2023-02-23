import BigSlider from "../components/bigSlider/BigSlider";
import BookList from "../components/booklist/BookList";
import IconsList from "../components/IconsList/IconsList";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {fetchAllBooks} from "../services/BookService";
import {Context} from "../index";
import RecomendationPanel from "../components/recomendationPanel/RecomendationPanel";
import MiniSlider from "../components/miniSlider/MiniSlider";


const MainPage = observer(() => {
    const {bookStore} = useContext(Context)
    const [books, setBooks] = useState([])

    useEffect(()=> {
        fetchAllBooks().then(r => { 
            setBooks(r.data)
            bookStore.setBooks(r.data)
        })
    },[])

    return(
        <>
            <BigSlider/>
            <IconsList/>
            <BookList books={books} />
            <RecomendationPanel/>
            <MiniSlider/>
        </>
    )
})

export default MainPage;