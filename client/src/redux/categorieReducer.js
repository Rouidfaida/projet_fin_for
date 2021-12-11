import { CATEGORIE_ADD, CATEGORIE_ADD_FAIL, CATEGORIE_ADD_SUCCESS, CATEGORIE_GET, CATEGORIE_GET_FAIL, CATEGORIE_GET_SUCCESS } from "./categorieActionType"


let init={
    categories:[],
    loading:false,
    error:null
}
export const categorieReducer=(state=init,{payload,type})=>{
    switch (type) {
        case CATEGORIE_GET:
            case CATEGORIE_ADD:
            return{
                ...state,loading:true}
              case CATEGORIE_GET_SUCCESS:
                  return{
                      ...state,loading:false,categories:payload       
                               }
                               case CATEGORIE_GET_FAIL:
                                   case CATEGORIE_ADD_FAIL:
                                   return{
                                       ...state,loading:false,error:payload
                                   }
                                   case CATEGORIE_ADD_SUCCESS:
                                       return{
                                        ...state,loading:false,
                                        categories: [...state.categories, payload],
                        
                                                errors:null,
                                       }

            
    
        default:
return state    }
}