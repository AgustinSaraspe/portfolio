import React from "react";

const Info = () =>{
    return(
       <div className="about__info grid">
          <div className="about__box">
          <i class='bx bx-award about__icon'></i>

            <h3 className="about__tittle">Experience</h3>
            <span className="about__subtitle">2 years working</span>
          </div>
          <div className="about__box">
          <i class='bx bx-briefcase-alt-2 about__icon'></i>

            <h3 className="about__tittle">Completed</h3>
            <span className="about__subtitle">10 + Projects</span>
          </div>
         
       </div>
    )
}
export default Info;