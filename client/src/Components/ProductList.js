import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  getProductlist } from '../redux/productAction'
import Filter from './Filter'
import ProductCard from './ProductCard'
import ProductCartAdmin from './ProductCartAdmin'
import SignUp from './SignUp'

const ProductList = ({product}) => {
    
    const {loading,categorySelected} = useSelector(state => state.allproduct)
  const dispatch = useDispatch()

useEffect(() => {
    dispatch(getProductlist())
      
  }, [])

    return (
        <div style={{display:"flex",flexWrap:"wrap",marginLeft:"200px",marginTop:"50px",marginRight:"150px"}}>

           {product.filter((product) => {
          if (categorySelected !== "all" ) return product.category === categorySelected
          else return true 
        }).map((el,i) => <ProductCard el={el} key={i} />)}
            {/* {
            loading?<h1>loading...</h1>:
            product.map((el,i)=><ProductCard el={el} key={i}/>)
            } */}
          
          
            {/* <button onClick={()=>dispatch(getProduct())}>on</button> */}
        </div>
    )
}

export default ProductList
