//Navbar.jsx

import React from "react";
import {Link, Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const styles = {
    nav : {
        fontFamily:"this_is_font_name",
        fontSize : "20px",
        margin: "auto",
        textAlign : "center",


    }
}


function Navbar(){
    return(
        <div>
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark text-white "}  >
                <div className = {"container-fluid"} >
                    <ul className = {"navbar-nav" } style = {styles.nav}>
                        <li className = {"nav-item" }>
                            <Link to={"/main"} className = {"nav-link active" }>Main</Link>
                            {/*<li className = {"nav-link active" }>Main</Link>*/}
                        </li>
                        <li className = {"nav-item " }>
                            <Link to={"/list"} className = {"nav-link active " }>List</Link>
                        </li>
                        <li className = {"nav-item " }>
                            <Link to={"/write"} className = {"nav-link active " }>Write</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>

    )
}


export default Navbar;