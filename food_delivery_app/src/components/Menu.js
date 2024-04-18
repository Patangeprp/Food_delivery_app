import React from "react";
import Header from "./navbar/Header";
import './Menu.css';

function Menu(){
    return(
        <>
        <div>
            <header>
                <div className="main1">
                <h1>Find Your Best Food </h1>
                <p>Order And Eat</p>
                <a><button>Check out menu</button></a>
                </div>
            </header>
            <h1 className="menuOrder">ORDER ONLINE ORDER ONLINE ORDER ONLINE</h1>
            <h1 className="menuOrder1">Your Favorite Food</h1>
            <div className="main2">

            </div>
        </div>

        </>  
    )
}
export default Menu;