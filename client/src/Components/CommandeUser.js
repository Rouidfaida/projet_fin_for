import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addProductsCart, handelAddProductCart, handelDelete } from '../redux/cartAction';
import Navbare from './Navbare';

const CommandeUser = () => {
   
    const {products} = useSelector(state => state.allproduct)
    const {cartItem} = useSelector((state) => state.cart);
    const [qty, setQty] = useState(0)

    const dispatch = useDispatch();

    return (
        <div>        
                <Navbare/>


                {cartItem.map((prod) => (<div className="cartitem">
                {/* <p>
            Status:
            <span id="stock_status">
              {prod.quantityStock > 0 ? "In Stock"  : "Out of Stock"}
            </span>
          </p> */}
            <p>{prod.title}</p>
          <p className="cartitem__price">{prod.price}Dt</p>
          <select className="cartitem__select" onChange={e => setQty(e.target.value)}>
            <option value="1" value="1" >1</option>
            <option value="2" value="2">2</option>
            <option value="3" value="3">3</option>
            <option value="4" value="4">4</option>
          </select>
        </div>))}
        </div>
    )
}

export default CommandeUser
