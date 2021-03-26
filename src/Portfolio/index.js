import react, {useState} from 'react'
import PortfolioCard from "../PortfolioCard";
import codeNamesImg from "../images/codenames.png"
import fishTanksImg from "../images/fishtanks.png"
import weddingImg from "../images/wedding.png"
import manateeNpmImg from "../images/manatee-npm.png"
import manateeApiImg from "../images/manatee-api.png"
import cssImg from "../images/css.png"
import "./style.css";

export default function Portfolio() {
    const [projects] = useState([
        {
            name:"Codenames",
            github:"https://github.com/Rufasa85/react-codenames",
            deploy:"https://rufasa85.github.io/react-codenames/",
            img:codeNamesImg
        },
        {
            name:"fishtank",
            github:"https://github.com/Rufasa85/jsonauthfront",
            deploy:"https://nov2020fishfront.herokuapp.com/",
            img:fishTanksImg
        },
        {
            name:"Wedding",
            github:"https://github.com/Rufasa85/joeAndArra",
            deploy:"http://www.arraandjoe.com/",
            img:weddingImg
        },
        {
            name:"Manatee Jokes NPM package",
            github:"https://github.com/Rufasa85/manatee-joke-generator",
            deploy:"https://www.npmjs.com/package/manatee-joke-generator",
            img:manateeNpmImg
        },
        {
            name:"Manatee Jokes API",
            github:"https://github.com/Rufasa85/manatee-jokes-api",
            deploy:"https://manateejokesapi.herokuapp.com/",
            img:manateeApiImg
        },
        {
            name:"CSS Snippets",
            github:"https://github.com/Rufasa85/css-snippets",
            deploy:"https://rufasa85.github.io/css-snippets/",
            img:cssImg
        },
    ])
    return (
        <div className="Portfolio">
            <h1>Projects</h1>
            <div className="cardBox">
            {projects.map((thing,i)=><PortfolioCard key={i} data={thing}/>)}

            </div>
        </div>
    )
}
