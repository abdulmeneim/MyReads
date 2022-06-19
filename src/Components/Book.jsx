import { React, useEffect } from 'react'


export default function Book(props) {
    useEffect(() => {
    }, [])
    let Change = (e) => {
        // console.log(e.target.value);
        props.onChangeStauts({ newstatus: e.target.value, title: props.title, id: props.id, book: props.book })
    }
    return (
        <>
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                    `url(${props.link})`,
                            }}
                        ></div>
                        <div className="book-shelf-changer">
                            <select onChange={Change}>
                                <option value="none" disabled>
                                    Move to...
                                </option>
                                <option selected={props.status === "currentlyReading"} value="currentlyReading">Currently Reading</option>
                                <option selected={props.status === "wantToRead"} value="wantToRead">Want to Read</option>
                                <option selected={props.status === "read"} value="read">Read</option>
                                <option selected={props.status === "none"} value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{props.title}</div>
                    <div className="book-authors">{props.author}</div>
                </div>
            </li>
        </>
    )
}
