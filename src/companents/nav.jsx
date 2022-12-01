import React from 'react'
import '../css/header/nav.css'
export default function nav(props) {
  return (
    
<div className=' d-flex  nav justify-content-between container-fluid align-items-center shadow-sm'>
    <div className='w-25 d-flex brand'>
        <img  className='img-fluid mb-2' width="25px"  src={props.data.brand} alt="" />
        <h4 className=' ms-2'>{props.data.brandh2}</h4>
    </div>
    
    <div className='d-flex w-75 nav1'>
<form className='form rounded' action="">
    <input type="text" />
    <i className="fa-solid fa-magnifying-glass"></i>
</form>
<ul className='d-flex ul1 '>
    <li>
   {props.data.li1}
    </li>
    <li>
    {props.data.li2}
    </li>
    <li>
    {props.data.li3}
    </li>
    <li className='text-secondary'>
    {props.data.li4}
    </li>
    <li className='last-li rounded'>
    {props.data.btn}
    </li>
</ul>
    </div>
</div>
  )
}
