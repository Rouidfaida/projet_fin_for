import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addProductsCart, handelAddProductCart, handelDelete } from '../redux/cartAction';
import Navbare from './Navbare';
import './Commande.css'
const CommandeUser = (id) => {
   
    const {products} = useSelector(state => state.allproduct)
    const {cartItems} = useSelector((state) => state.cart);
    console.log(cartItems)
    const [qty, setQty] = useState(0)
    const dispatch = useDispatch();
    let commande = cartItems;
let total=0
    return (
        <div>        
                <Navbare/>
                {cartItems.length === 0 ? (
        <h5>votre panier est vide</h5>
      ) : (
        <table>
          <thead>
            <tr>
              <td style={{ width: "720px" }}>
                <h4>ARTICLE</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>QUANTITÉ</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>PRIX UNITAIRE</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>SOUS-TOTAL</h4>
              </td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((el) => (
              <tr>
                {" "}
                <td style={{ display: "flex", textAlign: "left" }}>
                  <img
                    style={{ width: "120px", height: "120px" }}
                    className=""
                    src={el.imageUrl}
                    alt=""
                  />
                  <div>
                    <p className="title">{el.title}</p>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(handelDelete(el.id));
                      }}
                    >
                      supprimer
                    </Button>
                  </div>
                </td>
                <td>
                  {" "}
                  <p>{Number(el.qty)}</p>
                
               
                </td>
                <td>
                  {" "}
                  <p>{Number(el.price)}</p>
                </td>
                <td>
                  <p>{Number(el.price) * Number(el.qty)}</p>
                </td>
              </tr>
            ))}
            <tr>
              {cartItems
                .map((el) => Number(el.price) * Number(el.qty))
                .forEach((sousTotal) => (total += sousTotal))}
              <td></td>
              <td></td>
              <td>
                <h4>TOTAL:</h4>
              </td>
              <td>
                <h4>{`${total} DT`}</h4>
              </td>
            </tr>
          </tbody>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addProductsCart({ commande }));
            }}
          >
            confirmer
          </Button>
        </table>
      )}
    </div>


    )
}

export default CommandeUser
