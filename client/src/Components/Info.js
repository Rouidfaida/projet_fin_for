import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { addProductCart, addToCart, handelAddProductCart } from '../redux/cartAction';
import CommandeUser from './CommandeUser';
import Navbare from './Navbare';

const Info = ({match}) => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.allproduct)
    const [quantity, setQuantity] = useState('')
    const {users} = useSelector(state => state.alluser)
// const {productcart} = useSelector(state => state.allcommande)
     
let params = useParams();
let pr =products.find(el=>el._id==params.id)
// const addToCartHandler = () => {
//   dispatch(addToCart(pr._id, quantity));
//   history.push("/commande");
// };
    return (
        <div>
            <Navbare/>
            <h1>{pr.title}</h1>
           
                            {/* <button className="btn cart" onClick={()=>dispatch(addToCart(pr._id))} > buy now</button> */}

{/*           
            //                 <button variant="contained"
            //  onClick={(e) => {
            //     e.preventDefault();
            //     dispatch(handelAddProductCart(pr._id,pr.title,quantity,pr.price))
            //   }}
            // >ajouter au panier</button> */}
              {/* <h2>Price :{pr.price*quantity}</h2> */}
              
            <p>
              Quantity
              <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[...Array(pr.quantityStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {" "}
                    {x + 1}{" "}
                  </option>
                ))}
              </select>
            </p>
              <button onClick={()=>dispatch(addToCart(pr._id))}
>add</button>
        </div>
    )
}

export default Info
