import React from "react";
import "./Projects.css";
import work1 from "../../assets/Ecommerce.jpg"
import work2 from "../../assets/piDogs.jpg"
import work3 from "../../assets/candyShop2.jpg"
import work4 from "../../assets/blogOctubreRosa.jpg"


const Projects = ()=>{
    return(
        <div className="container__projects" id="projects">
            <div className="container_cards section">
               <div className="card">
                  <img className="img_card" src={work1}/>
                  <div className="card__data">
                    <h3 className="card_title">E-Commerce C#</h3>
                    <p className="text_card">Programacion de un sistema interno de control de stock, manejo de reportes, caja, clientes, usuarios,ventas, etc. Desarrollado en el lenguaje C# para su funcionamiento, SQL Server para su base de datos y para su interfaz grafica se utilizo los formularios de C#.</p>
                    <a href="https://github.com/AgustinSaraspe/SISTEMA_PUNTO_DE_VENTAS" className="button">View project</a>
                  </div>
               </div>
               <div className="card">
                  <img className="img_card" src={work2}/>
                  <div className="card__data">
                    <h3 className="card_title">App Dogs</h3>
                    <p className="text_card">Development of SPA using React for the Front End, and Redux as stage management. It cosumes data from an API through a Back End depeloped in NodeJS using Express.</p>
                    <a href="https://github.com/AgustinSaraspe/Dogs-PI" className="button">View project</a>
                  </div>
               </div>
               <div className="card">
                  <img className="img_card" src={work3}/>
                  <div className="card__data">
                    <h3 className="card_title">E-Commerce Candy Shop</h3>
                    <p className="text_card">Tienda online basada en la venta de golosinas por mayor. El usuario puede loguearse, comprar, llevar un registro de sus compras, dejar su review del producto, etc.</p>
                    <a className="button">View project</a>
                  </div>
               </div>
               <div className="card">
                  <img className="img_card" src={work4}/>
                  <div className="card__data">
                    <h3 className="card_title">Blog Octubre Rosa</h3>
                    <p className="text_card">Blog de concientizacion sobre el cancer de mama. Es una Single-page application(SPA), desarrollada con HTML, CSS y javaScript para agregar fucionalidades. </p>
                    <a href="https://github.com/AgustinSaraspe/Blog-octubre-rosa" className="button">View project</a>
                  </div>
               </div>
            </div>
            
        </div>
    )
}

export default Projects;