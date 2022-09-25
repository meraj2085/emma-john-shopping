import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({handleAddToCart, product}) => {
     // const {handleAddToCart, product} = props;
     const {id, name, img, price, seller, ratings} = product;

     return (
          <div className='product'>
               <img src={img} alt="" />
               <div className='product-info'>
                    <p className='product-Name'>{name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings} stars</small></p>
               </div>
               <button onClick={()=>{handleAddToCart(product)}} className='btn-cart'>
                    <p>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
               </button>
          </div>
     );
};

export default Product;