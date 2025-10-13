import React from 'react';
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({title, items, itemsArray, path, idpath}) => {
  const { pathname } = useLocation();
  
  
  const isHome = pathname === '/';
  const finalItems = isHome  ? items : Infinity;

  return (
    <div className="item__lista">
              <div className="item-list__header item-list__headerr ">
                  <h2>{title} populares</h2>
                  {isHome ? (<Link to={path} className="main__link">Mostrar mais</Link>) : <></>}
                  
              </div>

        <div className="item-list__container">
            
           {itemsArray.filter(
            (currentValue, index) => index < finalItems).map((currObj, index) => (
            
            <SingleItem idpath={idpath} 
            {...currObj} 
            key={`${title}-${index}`} 
         
           />))}


        </div>
              
    </div>
              

 )
  
}

export default ItemList
//rafce