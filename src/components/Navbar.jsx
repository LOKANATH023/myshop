import React from 'react'
import '../styles/navbar.css'

function Navbar({setShow,size}) {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>E Commerce</span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span><i class="fa-sharp fa-solid fa-cart-plus"></i></span>
                <span>{size}</span></div>
        </div>
    </nav>
  )
}

export default Navbar