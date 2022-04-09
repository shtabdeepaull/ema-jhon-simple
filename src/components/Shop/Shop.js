import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import {addToDb, getStoredCart, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useState([]);
  

   useEffect(()=>{
       const storedCart = getStoredCart();
       for(const id in storedCart){
           const addedProduct = products.find(product=>product.id === id);
           if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity =quantity;

           }
       }

   },[])

   const handleAddToCart =(product)=> {
    //    console.log(product);
    //    cart.push(product);

    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
    // removeFromDb(product.id);
   }

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   products.map(product => <Products key={product.id}
                   product={product}
                   handleAddToCart={handleAddToCart}
                   ></Products>)
               }
               
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                   <Link to='/orders'>
                       <button>Review Orders</button>
                   </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;