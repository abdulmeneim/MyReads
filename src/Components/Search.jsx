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
            setquery("")
        }
    }
    let serch = async (e) => {
        if (!(query === "" || query === null)) {

            let res = await api.search(query.trim(), 20)
            console.log(res, query, "asdasd");
            if (!res.error) {
                console.log(res);
                setSearchBooks(res)
            }
        }
    }




    let handelChange = props.onchange
    useEffect(() => {
        console.log(allbooks);
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
                                    console.log("found", found);
                                    book.shelf = found.shelf
                                }
                                return < Book id={book.id} status={book.shelf} onChangeStauts={handelChange} key={index} title={book.title} link={book.imageLinks?.thumbnail} author={book.authors?.[0]} ></Book>
                            })
                        }

                    </ol>


                </div>
            </div>
        </>
    )
}
