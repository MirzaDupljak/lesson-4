import React from 'react';
import "./cart-dropdown.style.scss";
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import {Link} from "react-router-dom"
const CartDropdown = () =>{
  const {cartItems}=useContext(CartContext);

return (
  
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
    {cartItems?cartItems.map((data)=>
    (
    <div key={data.id} className="cart-item-container">
      <img src={data.imageUrl} alt={data.name} />
      <div className="item-details ">
      <span className='name'>{data.name}</span>
      <span className='price'>{data.quantity}x${data.price}</span>
      </div>
     
    </div>
    )):(<span>Your cart is empty</span>)}
    </div>
    <Link to="/checkout">
    <button  className='gotocheckout'>GO TO CHECKOUT</button>
    </Link>
  </div>
);
}
export default CartDropdown;