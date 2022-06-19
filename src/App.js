import "./App.css";
import { useState, useEffect } from "react";
import * as api from "./BooksAPI"
import { Route, Routes } from "react-router-dom";
import MyReads from "./Components/MyReads";
import Search from "./Components/Search";
function App() {
  let [books, setBooks] = useState([
    // { id: "noID", title: "The Hobbit", authors: ["J.R.R. Tolkien"], shelf: "read", subtitle: "", categories: [], imageLinks: { thumbnail: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api" } },
    // { id: "noID", title: "Oh, the Places You'll Go!", authors: ["Seuss"], shelf: "read", subtitle: "", categories: [], imageLinks: { thumbnail: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api" } },
    // { id: "noID", title: "The Adventures of Tom Sawyer", authors: ["Mark Twain"], shelf: "wantToRead", subtitle: "", categories: [], imageLinks: { thumbnail: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api" } },
    // { id: "noID", title: "1776", authors: ["David McCullough"], shelf: "wantToRead", subtitle: "wantToRead", categories: [], imageLinks: { thumbnail: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api" } },
    // { id: "noID", title: "Harry Potter and the Sorcerer's Stone", authors: ["J.K. Rowling"], shelf: "wantToRead", subtitle: "", categories: [], imageLinks: { thumbnail: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api" } },
    // { id: "noID", title: "To Kill a Mockingbird", authors: ["Harper Lee"], shelf: "currentlyReading", subtitle: "", categories: [], imageLinks: { thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" } },
    // { id: "noID", title: "Ender's Game", authors: ["Orson Scott Card"], shelf: "currentlyReading", subtitle: "", categories: [], imageLinks: { thumbnail: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api" } },


  ]);
  let getallbooks = async () => {
    let apiBooks = await api.getAll()
    console.log(apiBooks);
    setBooks([...apiBooks])
    return apiBooks
  }
  let handelChange = async (data) => {
    // let theBook = books.find((book) => book.title === data.title)
    // theBook.shelf = data.newstatus
    // setBooks([...books])
    console.log(data);
    await api.update({ id: data.id }, data.newstatus)
    getallbooks()
  }
  useEffect(() => {
    getallbooks()
  }, [])
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MyReads onchange={handelChange} books={books}></MyReads>} ></Route>
        <Route path="/search" element={<Search onchange={handelChange} books={books}></Search>} ></Route>

      </Routes>
    </div>
  );
}

export default App;