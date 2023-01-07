import React, { useState } from "react";
import "./Header.css";

const Header = () =>{

    //Change background header
    window.addEventListener("scroll", () =>{
        const header = document.querySelector(".header");
        if(window.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    // Toggle Menu 
    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")


    return(
        <header className="header">
            <nav className="nav container">
              <a href="index.html" className="nav__logo">Agustin.</a>

              <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                 <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i class="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i class="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i class="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#projects" onClick={()=>setActiveNav("#projects")} className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                            <i class="uil uil-scenery nav__icon"></i>Projects 
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i class="uil uil-message nav__icon"></i>Contact 
                        </a>
                    </li>
                 </ul>

                 <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
              </div>
              <div  className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
                 <i class="uil uil-apps"></i>
              </div>
            </nav>
        </header>
    )
}

export default Header;