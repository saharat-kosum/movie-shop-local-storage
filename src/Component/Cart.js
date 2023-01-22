import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { DataContext } from '../Context/DataContext';
import Cartitem from './Cartitem';
import PaymentCard from './PaymentCard';

function Cart() {
  const {cartItems,clearData} = useContext(DataContext);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [payment,setPayment] = useState(false);

  useEffect(() => {
    if(cartItems){
      const total = cartItems.reduce((acc, item) => acc + item.price*item.total, 0);
      const totalQuantity = cartItems.reduce((acc, item) => acc + item.total, 0);
      setSubTotal(total);
      setDiscount(totalQuantity > 5 ? 20 : (totalQuantity > 3 ? 10 : 0));
    }
  },[cartItems])

  return (
    <div className='CartContainer'>
      <h1>Your Cart Item</h1>
      <div className="topic">
        <p className='class-item'>ITEM</p>
        <p className='class-price'>PRICE</p>
        <p className='class-quantity'>QUANTITY</p>
        <p className='class-subtotal'>SUBTOTAL</p>
      </div>
      <div>
        {cartItems && cartItems.map(item => <Cartitem key={item.id} item={item}/> )}
      </div>
      <div className="CartbtnContainer">
        <div className="Clear Cartbtn" onClick={clearData}>Clear Cart</div>
        <div className="Buy Cartbtn" onClick={()=>setPayment(true)}>Buy Now</div>
      </div>
      <div className="Summary">
        <div className="subtotal summaryDetail">
          <p>Subtotal:</p>
          <p>{subTotal}</p>
        </div>
        <div className="discount summaryDetail">
          <p>Discount:</p>
          <p>{(discount/100)*subTotal}</p>
        </div>
        <div className="grandtotal summaryDetail">
          <p>Grand total:</p>
          <p>{subTotal-((discount/100)*subTotal)}</p>
        </div>
      </div>
      <PaymentCard open={payment} Close={()=>setPayment(false)}/>
    </div>
  )
}

export default Cart