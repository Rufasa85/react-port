import React from 'react'
import "./style.css"
import Nav from '../Nav';

export default function Header({currPage,setCurrPage}) {
    return (
        <header className="Header">
            <h1>Joe Rehfuss</h1>
            <Nav currPage={currPage} setCurrPage={setCurrPage}/>
        </header>
    )
}
