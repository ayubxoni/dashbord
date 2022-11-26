import React, { Component } from 'react'
import '../css/header/header.css'
import Nav from '../companents/nav'
import Footer from '../companents/footer'
import Dashbord from '../companents/dashbord'
export default class header extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className='d-flex'>
            <Footer/>
          <Dashbord/>
        </div>
      </div>
    )
  }
}
