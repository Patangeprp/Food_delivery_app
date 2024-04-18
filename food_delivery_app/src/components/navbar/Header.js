import React from'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <nav class="navbar navbar-expand-lg ">
        <img src='https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg' className='logo'></img>
        <h1 className='logo1'>Instafood</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="/menu">Menu</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="/service">Service</Link>
            </li>
            <div className='searchBar'>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button> */}
            </div>
            <div>
            <a className='cart'><i class="fa-solid fa-cart-shopping"></i></a>
            <div className='count'></div>
            </div>
          </ul>
        </div>
      </nav>
    )
}
export default Header;