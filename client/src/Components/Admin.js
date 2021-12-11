import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { getCategorielist } from '../redux/categorieAction'
import { getProduct, getProductlist } from '../redux/productAction'
import AddProduct from './AddProduct'
import AddUser from './AddUser'
import CategorieList from './CategorieList'
import Home from './Home'
import Login from './Login'
import Navbare from './Navbare'
import ProductList from './ProductList'
import ProductListAdmin from './ProductListAdmin'

const Admin = () => {
    const {users,loading} = useSelector(state => state.alluser)
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.allproduct)
    const {categories} = useSelector(state => state.allcategorie)
    useEffect(() => {
        dispatch(getProductlist(),getCategorielist())
          
      }, [])
    return (
        <div>  
            <Navbare/>
<ProductListAdmin product={products}/>
<CategorieList categorie={categories}/>
                </div>
    )
}

export default Admin
