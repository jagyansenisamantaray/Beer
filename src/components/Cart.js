import React from 'react'

import {  useSelector,useDispatch } from 'react-redux'
import { remove } from '../redux/feature/cartSlice'
const Cart = () => {
    const products=useSelector(state=>state.cart)
    const dispatch=useDispatch();
    const removeToCart=(id)=>{
       dispatch(remove(id))
    }
    const cards=products.map(product =>(
       
        <div class="item-container" key={product.id}>
        
        <div class="main-item">
            <img src={product.image_url} alt="" style={{ width: "100px", height: "130px" }}/>
        </div>
        <h2 class="item-heading">
            {product.name}
        </h2>
        <p class="item-description">
            {product.tagline}
        </p>
        
        <p class="item-price">{product.first_brewed}</p>
        <button className="item-cart-btn" onClick={()=>removeToCart(product.id)}>Remove Item</button>
    </div>
       ))
  return (
    <>
       <div className="row" style={{ display:"flex" }}>
         {cards}
       </div>
    </>
  )
}

export default Cart

