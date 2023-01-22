import React, { useContext, useEffect, useRef, useState } from 'react'
import './MovieCard.css'
import { TbEdit } from 'react-icons/tb';
import { IoEnterOutline } from 'react-icons/io5';
import { DataContext } from '../Context/DataContext';

function MovieCard(props) {
  const [price,setPrice] = useState(100);
  const [isUpdate,setIsUpdate]=useState(false);
  const [amount,setAmount]=useState('');
  const inputRef = useRef(null);
  const {movie} = props;
  const URL = 'https://image.tmdb.org/t/p/original';
  const {addToCart,cartItems} = useContext(DataContext);

  const handleClick = async () =>{
    await setIsUpdate(!isUpdate);
    inputRef.current.focus();
  }

  const newMovie = {
    id:movie.id,
    title:movie.title,
    price:price,
    total:1
  }

  useEffect(()=>{
    const existingItem = cartItems.find(item => item.id === movie.id);
    if(existingItem){
      setAmount(existingItem.total);
    }
  },[cartItems,movie])

  return (
    <div className='CardContainer'>
      <div className="CardImage">
        <img src={URL+movie.poster_path} alt={movie.title} />
      </div>
      <div className="CardDetail">
        <h3>{movie.title}</h3>
        <div className='CardFooter'>
          <div className="priceCon">
            <p>Price : $</p>
            <input className='price' type="number" 
                value={price} required 
                disabled={!isUpdate} 
                ref={inputRef}
                onChange={(e)=>setPrice(e.target.value)}/>
            <button className='EditPrice' onClick={handleClick}>
              {isUpdate? <IoEnterOutline/>:<TbEdit/>}
            </button>
          </div>
          <button className='btn' onClick={()=>addToCart(newMovie)}>Add to cart {amount? `(${amount})`:''}</button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard