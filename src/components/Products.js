import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProduct, STATUS } from '../store/productSlice'

const Products = () => {

  const { data: products, status } = useSelector((state) => state.Product)
  
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct())

  }, [])

  if(status==STATUS.ERROR){
    return <h1 className='text-center'>something went wrong</h1>
  }
  if(status===STATUS.LOADING){
    return <h1 className='text-center'>Loading...</h1>

  }
  // handle add to  cart
  const addtoCart = (product) => {
    dispatch(add(product))
  }
  return (
    <div className='container-fluid'>
      <div className='row'>

        {
          products.map((item, index) => {
            return <>
              {console.log(item)}
              <div className='col-lg-3'>
                <div class="product-card" >
                  <img class="card-img" src={item.image} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description.substring(0, 160)}</p>
                    <p class="card-text">${item.price}</p>
                    <a href="#" class="btn btn-primary" onClick={() => addtoCart(item)}>Add To Cart</a>
                  </div>
                </div>


              </div>

            </>
          })
        }
      </div>
    </div>
  )
}

export default Products