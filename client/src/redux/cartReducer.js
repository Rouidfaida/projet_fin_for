
   
import { ADD_ITEM, ADD_ITEM_FAIL, ADD_ITEM_SUCCESS, ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_CART_FAIL, ADD_PRODUCT_TO_CART_SUCCESS, DELETE_ITEM } from "./cartActionType"

let initial={
    commande:null,
    // error:null,
    // loading:false,
    // token:localStorage.getItem('token'),
    // isAuth:false,
    // shoppingCart:null
    cartItem:[]

    
}
export const commandeReducer=(state=initial,{payload,type})=>{
    switch (type) {
            case ADD_PRODUCT_TO_CART:
              
            return{...state,loading:true
            }
                case ADD_PRODUCT_TO_CART_FAIL:
                   
                return{
                    ...state,error:payload,loading:false    
                          }
                          case ADD_PRODUCT_TO_CART_SUCCESS:

                              return{

                                ...state,commande:payload
                              }
            // case ADD_ITEM:
            //   return {
            //    state, shoppingCart: [...state.shoppingCart, payload],
            //  } 
                                        

                                
                                case DELETE_ITEM :
            
                                    return {...state , cartItem :state.cartItem.filter((x) => x.id !== payload)}

                                case ADD_ITEM:
                                  const item = payload
                      
                                  const existItem = state.cartItem.find((x) => x.product === item.product)
                                  if(existItem){
                                      return {
                                          ...state,
                                          cartItem: state.cartItem.map((x)=> x.product === existItem.product?item:x)
                                      }
                                  }else {
                                      return{
                                          ...state,
                                          cartItem: [...state.cartItem,item]
                                      }
                                  }
                          default:
                            return state
                             }                     
}
