import React from 'react'
import './Cartitem.css'

function Cartitem(props) {
    const {item} = props

  return (
    <div className='Cartitem'>
        <p className='class-item'>{item.title}</p>
        <p className='class-price'>{item.price}</p>
        <p className='class-quantity'>{item.total}</p>
        <p className='class-subtotal'>{item.price * item.total}</p>
    </div>
  )
}

export default Cartitem