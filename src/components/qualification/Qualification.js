import React, { useState } from "react";
import "./Qualification.css";


const Qualification = () =>{
 
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }


    return(
        <section className="qualification section">
          <h3 className="section__title">Qualification</h3>
          <span className="section__subtitle">My personal journey</span>

          <div className="qualification__container container">
              <div className="qualification__tabs">
                 <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                 onClick={()=>toggleTab(1)}
                 >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                 </div>
                 <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                 onClick={()=>toggleTab(2)}
                 >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                 </div>
              </div>

              <div className="qualification__sections">
                 <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Tecnico Universitario en Programacion</h3>
                            <span className="qualification__subtitle">UTN - Facultad regional tucuman</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Finalized
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Desarrollador Full Stack</h3>
                            <span className="qualification__subtitle">Bootcamo SoyHenry - Academy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Finalized
                            </div>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Desarrollador Full Stack</h3>
                            <span className="qualification__subtitle">Nucba - Academy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                 
                 </div>

                 <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">E-Commerce development</h3>
                            <span className="qualification__subtitle">Drugstor - Argentina</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">E-commerce Technical Support</h3>
                            <span className="qualification__subtitle">Drugstor - Argentina</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">E-Commerce web development</h3>
                            <span className="qualification__subtitle">Colibri - Argentina</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                 </div>
              </div>
          </div>
        </section>
    )
}

export default Qualification;