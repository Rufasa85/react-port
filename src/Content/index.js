import React from 'react'
import "./style.css"
import About from '../About';

export default function Content(props) {
    return (
        <main className="Content">
            <section>
               {props.currPage==="About"?<About/>:null}
               {props.currPage==="Portfolio"?<h1>Portfolio</h1>:null}
               {props.currPage==="Contact"?<h1>Contact</h1>:null}
               {props.currPage==="Resume"?<h1>Resume</h1>:null}
            </section>
        </main>
    )
}
