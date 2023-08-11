import React, { useContext } from 'react'
import { GameContext } from '../context/games-context';
import Product from '../components/Product';

const Favorites = () => {


  const { favoriteCartList } = useContext(GameContext);
  
  return (
    
    
  <div className='favorite-product' >
    {favoriteCartList.map((item, index) =>  (<div key={item.id}>
      <Product item={item} index={index} / >
      </div>))}
  </div>
  
  )
}

export default Favorites