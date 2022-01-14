import React, { useEffect, useState } from 'react'
import { Button,Table,thead } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addProductsCart, handelAddProductCart, handelDelete } from '../redux/cartAction';
import Navbare from './Navbare';
import './Commande.css';
import { RiDeleteBin5Line } from 'react-icons/ri';

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
<Table striped bordered hover variant="white" style={{width:"800px",marginTop:"50px", marginLeft:"400px"}}>
          <thead>
            <tr>
              <td >
                <h4>ARTICLE</h4>
              </td>
              <td >
                <h4>Titre</h4>
              </td>
              <td >
                <h4>QUANTITÉ</h4>
              </td>
              <td >
                <h4>PRIX UNITAIRE</h4>
              </td>
              <td >
                <h4>SOUS-TOTAL</h4>
              </td>
              <td></td>
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
                  </td>
                  <td>
                    <h5>{el.title}</h5>
                  
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
                <td> 
                 <RiDeleteBin5Line
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(handelDelete(el.id));
                      }}
                   style={{color:"red",fontSize:"40px"}} />
                      
                  </td>
              </tr>
            ))}
            <tr >
              {cartItems
                .map((el) => Number(el.price) * Number(el.qty))
                .forEach((sousTotal) => (total += sousTotal))}
               <td  colSpan={4}  >
                <h4>TOTAL:</h4>
              </td>
          
            
              <td>
                <h4>{`${total} DT`}</h4>
              </td>
              <td></td>
            </tr>
          </tbody>
        
        </Table>
        
      )}
        <Button 
            onClick={(e) => {
              e.preventDefault();
              dispatch(addProductsCart({ commande }));
            }}
          >
            confirmer
          </Button>
    </div>


    )
}

export default CommandeUser
