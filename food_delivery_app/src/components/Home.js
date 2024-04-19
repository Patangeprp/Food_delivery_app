import React from 'react'
import Header from './navbar/Header';
import { Link } from 'react-router-dom';
import './Home.css'
import delivery from '../assets/delivery.jpg'
import alltime from '../assets/alltime.png'
import easytoorder from '../assets/easytoorder.jpeg'


function Home(){
    return(
        <div className='main'>
        <div className='container'>
            <div className='aside1'>
                <h1 className='heading'>The Fastest Food Delivery At Your <span className='door'>Door Step</span></h1>
                <p className='discription'>Welcome to <span className='logo1'>Instafood</span>, your ultimate destination for convenient and delicious food delivery right to your doorstep!</p>
                <button className='order'>Order Now</button>
                <div style={{display:'flex'}}>
                    <div className='customers'>
                        <p style={{color:'orange',fontSize:'50px',fontWeight:'bold'}}>20k+</p>
                        <p style={{marginTop:'-20px',fontSize:'20px',fontWeight:'bold'}}>Happy customers</p>
                    </div>
                    <div className='rating'>
                        <p style={{color:'orange',fontSize:'50px',fontWeight:'bold'}}>4.5<i class="fa-solid fa-star"></i></p>
                        <p style={{marginTop:'-20px',fontSize:'20px',fontWeight:'bold'}}>Overall Rating</p>
                    </div>
                </div>
            </div>
            <div className='aside2'>
                {/* <img className='delivery' src={delivery}></img> */}
                <div className='top'></div>
                <div className='right'></div>
            </div>
        </div>
        <div className='container2'>
            <div className='easyToOrder'>
                <img src={easytoorder}></img>
                <p>Easy to order</p>
                <span> Browse, customize, and complete your order in just a few taps for a hassle-free experience. Enjoy convenience and satisfaction with every click</span>
                </div>
            <div className='easyToOrder'>
                <img src='https://previews.123rf.com/images/seita/seita1705/seita170500011/78674775-delivery-man-riding-scooter-with-text-fast-delivery-vector.jpg'></img>
                <p>Fastest Delivery</p>
                <span>Experience lightning-fast delivery, ensuring your food arrives fresh and piping hot. Our dedicated delivery team works tirelessly to bring your order to you in record time.</span>
                </div>
            <div className='easyToOrder'> 
            <img src={alltime}></img>
            <p>24/7 Service</p>
            <span>Our dedicated support team is available round-the-clock to assist you with any inquiries or concerns. Whether you have questions about your order or need assistance with the app, we're here to help.</span>
            </div>
            <div className='easyToOrder'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwAKRGIIxwpzYtlNSbt5GyD6mUGmKL5KAUQ&s'></img>
                <p>Exclusive offers</p>
                <span>Unlock exclusive deals and discounts on your favorite dishes. Whether it's a weekday lunch or a weekend treat, enjoy great savings on every order.
                </span>
                </div>
        </div>
        </div>
        
    
    )
}
export default Home;
