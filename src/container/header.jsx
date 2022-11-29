import React, { Component } from 'react'
import '../css/header/header.css'
import Nav from '../companents/nav'
import Footer from '../companents/footer'
import Dashbord from '../companents/dashbord'

var obj={
brand:"../logo512.png",
brandh2:"TailStack",
search:"https://tinfis.uz/img/sm-search.svg",
li1:"features",
li2:"pricing",
li3:"sign in",
li4:"or",
btn:"Login",
}
var obj1={
    li1:"Admin",
    li2:"Enterprise",
    li3:"Staff",
    li4:"CRM",
    li5:"Mini",
    li6:"Fixed",
    li7:"UI COMPONENTS",
    li8:"Buttons",
    li9:"Alerts",
    li10:"Avatars",
    li11:"Modals",
}
var obj2={
  p:"",
  span:"",
  a:"",
  p1:"",
  p2:"",
  p3:"",
  p4:"",
  p5:"",
  p6:"",
  p7:"",
  p8:"",
  p9:"",
  p10:"",
  p11:"",
  p12:"",
  p13:"",
  
}
export default class header extends Component {
  render() {
    return (
      <div>
        <Nav data={obj}/>
        <div className='d-flex'> 
        <Footer name={obj1}/> 
         <Dashbord/></div>
       
        
      </div>
    )
  }
}
