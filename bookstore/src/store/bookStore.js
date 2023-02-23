import {makeAutoObservable} from "mobx";
import {fetchAllBooks, fetchBookById} from '../services/BookService';

export default class BookStore{
    constructor() {
        this._books = []
        this._book = {}
        makeAutoObservable(this)
    }

    setBook(data){
        this._book = data
    }

    get book(){
        return this._book
    }

    setBooks (data){
        this._books = data
    }

    get books(){
        return this._books;
    }

    async getOneBook(id){
        const res = await fetchBookById(id);
        this.setBook(res.data)
    }

    async getAllBooks(){
        const res = await fetchAllBooks();
        this.setBooks(res.data)
    }

}