import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const Navbar = () => {
 const item= useSelector((state)=>state.cart)
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <Link class="navbar-brand" to="/">E Commerce Store</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
     
      <li class="nav-item text-white">
        <Link to={'/cart'}>
        Cart {item.length}
        </Link>
        
      </li>
   
    </ul>
   
  </div>
</nav>
    </div>
  )
}

export default Navbar