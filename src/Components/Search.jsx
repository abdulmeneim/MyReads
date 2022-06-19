import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as api from "../BooksAPI"
import Book from './Book'


export default function Search(props) {
    let [allbooks, setSearchBooks] = useState([])
    let [query, setquery] = useState("")
    let setq = (e) => {
        if (e.target.value !== "") {
            console.log(e.target.value.toLowerCase());
            setquery(e.target.value)
        } else {
            console.log(e.target.value.toLowerCase(), "empty");
            setquery("")
            setSearchBooks([])
        }
    }
    let serch = async (e) => {
        if (!(query === "" || query === null)) {

            let res = await api.search(query.trim(), 20)
            if (!res.error) {
                console.log(res);
                setSearchBooks(res)
            }
        }
    }




    let handelChange = props.onchange
    useEffect(() => {
        serch()
    }, [query])
    return (
        <>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            onChange={setq}
                            value={query}
                        />
                    </div>
                </div>
                <div className="search-books-results">

                    <ol className="books-grid">
                        {
                            allbooks.map((book, index) => {
                                let found = props.books.find((mybook, i) => { return mybook.id === book.id })
                                if (found) {
                                    book.shelf = found.shelf
                                }
                                return < Book id={book.id} status={book.shelf ? book.shelf : "none"} book={book} onChangeStauts={handelChange} key={index} title={book.title} link={book.imageLinks?.thumbnail} author={book.authors?.[0]} ></Book>
                            })
                        }

                    </ol>


                </div>
            </div>
        </>
    )
}
