import React from "react";
import '../App.css';
import { Link } from "react-router-dom";



function Menu() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "20%";
      }
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    return (
        < div >
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <h3>Menu</h3>
                <a href="#">Category 1</a>
                <hr></hr>
                <a href="#">Category 2</a>
                <hr></hr>
                <a href="#">Category 3</a>
                <hr></hr>
                <a href="#">Category 4</a>
                <hr></hr>
                <a href="#">Category 5</a>
                <hr></hr>
                <a href="#">Category 6</a>
                <hr></hr>
                <a href="#">Category 7</a>
                <hr></hr>
                <a href="#">Category 8</a>
                <hr></hr>
                <a href="#">Category 9</a>
                <hr></hr>
            </div>
            <span  className="menu" onClick={openNav}>&#9776;</span>
        </div >
    );
}
export default Menu;