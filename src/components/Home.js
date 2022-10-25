import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='Container-fluid mt-3'>
        <div className='row'>
            <div className='col-lg-12 '>
                <h1 className='d-flex P-h'>Product Store</h1>
                <Products />
            </div>
        </div>
       
        </div>
  )
}

export default Home