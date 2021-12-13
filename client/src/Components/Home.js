import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorielist } from '../redux/categorieAction'
import { getProductlist } from '../redux/productAction'
import { getUsers } from '../redux/userAction'
import Login from './Login'
import ManagerList from './ManagerList'
import Navbare from './Navbare'
import ProductList from './ProductList'
// import ProductCard from './ProductCard'


const Home = () => {
  const {products,loading} = useSelector(state => state.allproduct)
  const {users} = useSelector(state => state.alluser)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getProductlist(),getCategorielist())
        
    }, [])
    return (
        <div>
           <Navbare/>

        <img
          className="d-block w-100"
          style={{ height: "300px" }}
          src="https://cdn3.ceresbookshop.com/modules/tmhomeslider/images/1172b6d7faba02f5f5ceb2d8588d049390fca9e0_Bannieres-site-2.png"
          alt="Lg"
        />
<ProductList product={products}/> 
{/* <Login/> */}
       </div>
    )
}

export default Home
