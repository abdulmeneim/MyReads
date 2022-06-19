import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import BookShelf from './BookShelf'


export default function MyReads(props) {
    let books = props.books
    let handelChange = props.onchange
    useEffect(() => {

    }, [])
    return (
        <>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading">
                            {books.map((book, index) =>
                                book.shelf === "currentlyReading" ?
                                    <Book book={book} id={book.id} status={book.shelf} onChangeStauts={handelChange} key={index} title={book.title} link={book.imageLinks.thumbnail} author={book.authors[0]}></Book>
                                    :
                                    ""
                            )}

                        </BookShelf>
                        <BookShelf title="Want to Read">
                            {books.map((book, index) =>
                                book.shelf === "wantToRead" ?
                                    <Book book={book} id={book.id} status={book.shelf} onChangeStauts={handelChange} key={index} title={book.title} link={book.imageLinks.thumbnail} author={book.authors[0]}></Book>
                                    :
                                    ""
                            )}
                        </BookShelf>
                        <BookShelf title="Read">

                            {books.map((book, index) =>
                                book.shelf === "read" ?
                                    <Book book={book} id={book.id} status={book.shelf} onChangeStauts={handelChange} key={index} title={book.title} link={book.imageLinks.thumbnail} author={book.authors[0]}></Book>
                                    :
                                    ""
                            )}

                        </BookShelf>


                    </div>
                </div>
                <div className="open-search">
                    <Link to="/Search">Add a book</Link>
                </div>
            </div>
        </>
    )
}
