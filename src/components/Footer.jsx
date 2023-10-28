import React from "react";
import { FaLinkedin, FaSquareXTwitter, FaGithub, FaCodepen, FaFreeCodeCamp } from "react-icons/fa6";
import { SiStartrek } from "react-icons/si";

function Footer() {
    return(
        <footer>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/michaeljudelarocca" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.twitter.com/mikejudelarocca" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                <a href="https://github.com/MichaelLarocca" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://codepen.io/Michael_Larocca" target="_blank" rel="noopener noreferrer"><FaCodepen /></a>
                <a href="https://www.freecodecamp.org/news/author/michael-larocca/" target="_blank" rel="noopener noreferrer"><FaFreeCodeCamp /></a>
                <a href="https://selftaughttxg.com/" target="_blank" rel="noopener noreferrer"><SiStartrek /></a>
            </div>
        </footer>
    )
}

export default Footer;