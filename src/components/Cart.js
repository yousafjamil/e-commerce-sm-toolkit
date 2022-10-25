import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
 const product=  useSelector((state)=>state.cart)
const  dispatch=useDispatch()
const  handleRemove=(id)=>{
    dispatch(remove(id))
}
  return (
    <div className='mt-5 container'>
    <div className='row'>
    <div className='col-lg-12 '>
        {product.length<=0?<h4 className='mt-4 text-center'>Your Cart is Empty</h4>:      
        <div className='row'>
            {
                product.map( (item,index)=>{
                    return <>
                    <div className='col-lg-8  cart-item-container'>
                        <img  src={item.image} style={{height:"100px"}} />
                        <span className='mt-5 ml-5'>${item.price}</span>
                        <button className='btn-info cart-btn'>+</button>
                        <button className='btn-info cart-btn'>-</button>
                        <button className='btn-danger cart-btn ' onClick={()=>handleRemove(item.id)}>Remove Item</button>
                    </div>
                    
                    </>
                })
            }
        </div>
    }
    </div>
    
</div>
    </div>
  )
}

export default Cart