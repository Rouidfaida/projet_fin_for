import axios from "axios";
import { ADD_ITEM, ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_CART_FAIL, ADD_PRODUCT_TO_CART_SUCCESS, DELETE_ITEM } from "./cartActionType";

export const addProductsCart = (newcommande) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_TO_CART });
    let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    }
  };
    try {
      const res = await axios.post("/commande/newCommande",newcommande,config);
      
      dispatch({
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_TO_CART_FAIL,
        payload: error.response.data,
      });
    }
  };
  
//   export const handelAddProductCart=(id,title,quantity,price)=>{
//     return{
//         type:ADD_ITEM,
//         payload:{id,title,quantity,price}
//     }
// }
export const handelDelete=(id)=>{
  return{
      type:DELETE_ITEM,
      payload:id
  }
}
export const addToCart = (id,qty) =>async(dispatch,getState)=> {
  const res = await axios.get(`/product/getProductById/${id}`)
  dispatch({
      type: ADD_ITEM,
      payload:{
          product: res.data._id,
          title: res.data.title,
          price: res.data.price,
          qty
      }
  })
  localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem))

}