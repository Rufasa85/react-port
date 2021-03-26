import React from 'react'
import resumePdf from "../images/joerehfuss.pdf"
import "./style.css"

export default function Resume() {
    return (
        <div className="Resume">
            <h1>Resume</h1>
            <a href={resumePdf} download>Download My Resume</a>
            <br/>
            <h3>Top Skills</h3>
            <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Teaching</li>
                <li>Manatee Puns</li>
            </ul>
        </div>
    )
}
