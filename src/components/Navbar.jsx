import React, { Component } from 'react'
import "./Navbar.css";
import Log from "./ezgif-5-00d2b53670.webp";
import Lg from '../comps/Header/logopng2-3-1.png';

class Navbar extends Component {

  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked }); 
  }

  render() {

    return (
      <>
        <nav>
          <img src={Lg} alt="" className='logo' />

          <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><a href="http://logowithweb.com/landing-page1">Home</a></li>
              <li><a href="https://logowithweb.com/services/">Services</a></li>
              <li><a href="https://logowithweb.com/about/">About Us</a></li>
              <li><a href="https://logowithweb.com/portifolio/">Portfolio</a></li>
              <li><a href="https://logowithweb.com/price/">Packages</a></li>
              <li><a href="https://logowithweb.com/contact/">Contact Us</a></li>

            </ul>
          </div>

          <div id="mobile" onClick={this.handleclick}>
            <i id='bar' className={this.state.clicked ? "bx bx-x" : "bx bx-menu"}></i>
            {/* <i class='bx bx-x'></i> */}
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar