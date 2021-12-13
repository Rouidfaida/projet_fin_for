import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addProductsCart, handelAddProductCart, handelDelete } from '../redux/cartAction';
import Navbare from './Navbare';

const CommandeUser = (id) => {
   
    const {products} = useSelector(state => state.allproduct)
    const {cartItem} = useSelector((state) => state.cart);
    const [qty, setQty] = useState(products.quantity)

    const dispatch = useDispatch();
    let commande = cartItem;

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
      <h3>{prod.title}</h3>
            <h2>prix unitaire :{prod.price}</h2> 
        
            <h2>prix :{prod.price*qty}</h2> 
          <select className="cartitem__select" onChange={e => setQty(e.target.value)}>
            <option value="1" value="1" >1</option>
            <option value="2" value="2">2</option>
            <option value="3" value="3">3</option>
            <option value="4" value="4">4</option>
          </select>
          {/* <p>
              Quantity
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(qty).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {" "}
                    {x + 1}{" "}
                  </option>
                ))}
              </select>
            </p> */}
          <Button
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(handelDelete(prod.id));
                      }}
                    >
                      supprimer
                    </Button>
        </div>
        ))}
        
          <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>({cartItem.length * qty})produit</p>
          <p style={{display:"flex", marginLeft:"7rem"}}><h6>Total = </h6>{cartItem.reduce((a,c) => a + parseInt(c.price) * qty, 0 )}Dt</p>
        </div>
        <div>
        <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addProductsCart({ commande }));
            }}
          >
            confirmer
          </Button>        </div>
      </div>
        </div>
    )
}

export default CommandeUser
