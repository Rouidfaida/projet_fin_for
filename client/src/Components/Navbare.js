import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorielist } from '../redux/categorieAction'
import { filterProduct } from '../redux/productAction'
import { logout } from '../redux/userAction';
import {  Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { GiSpellBook } from 'react-icons/gi';

import { Link } from 'react-router-dom';
import { AiOutlineSearch ,AiOutlineShoppingCart} from 'react-icons/ai';


import Filter from './Filter';

const Navbare = () => {
    const logOut = () => {
        dispatch(logout())
   }  
   const cart = useSelector (state => state.cart);


        // const cartItem = useSelector((state) => state.allcommande)
        const [category, setCategory] = useState('')
        const {cartItem} = cart

        const handleCategory = (e) => {
            setCategory(e.target.value);
            dispatch(filterProduct(e.target.value))
          };
          const dispatch = useDispatch();
          useEffect (() => {
            dispatch(getCategorielist());
          }, [dispatch]);
          // let cart=0
          // shoppingCart.map((el)=>Number(el.quantity)).forEach((el)=>(cart+=el))
          // console.log(cart)
          // const getCartCount = () => {
          //   return cartItem.cartItem.reduce((qty, item) => qty + item.qty, 0);
          // };

    return (
        <div>
            <div style={{backgroundColor:"black",border: "3px  solid",height:"100px"}}>
                <div style={{display:"flex"}}>
                <GiSpellBook style={{marginTop:"20px",width:"50px",height:"50px",color:"orange"}}/>            <div style={{display:"block"}}>
            <h2 style={{fontStyle:'italic',color:"white",fontSize:"20px",marginTop:"20px"}}>libraire en ligne </h2>
            <h6 style={{color:"orange"}}>Facilite ton vie </h6>
            </div>
            <form style={{marginLeft:"300px",marginTop:"40px",height:"20px"}}>
                <input type="text" style={{width:"500px",height:"30px"}} />
                <AiOutlineSearch style={{color:"white",backgroundColor:"orange",height:"28px",marginTop:"-5px",width:'28px'}}/>
            </form>
            <div style={{color:'orange'}}>
              <Link to='/commande'>
              <AiOutlineShoppingCart />
              {cartItem.length > 0 && (<span className="notification">{cartItem.length}</span>)}
            {/* <span style={{color:'white'}} >{cart}</span> */}
                </Link>
                </div>

            <div style={{display:"flex"}}>
                    <Link to='/sign' style={{color:"white"}}>
                        <h6 style={{color:"white",marginTop:"10px",marginLeft:"250px"}}>Sign Up</h6>
                    </Link>
                    <Link to='/login' style={{color:"white"}}>
                        <h6 style={{color:"white",marginTop:"10px",marginLeft:"20px"}}>Login in</h6>
                    </Link>
                    <Link  to="/login"  style={{color:"white",marginTop:"10px",marginLeft:"20px"}} onClick={logOut} >
                  LogOut
                </Link>
                </div>
            </div>
          
                </div>
              
           <Navbar style={{backgroundColor:"#FF940C"}}>
    <Container>
    <NavDropdown title="Categories" id="basic-nav-dropdown" style={{color:"black"}}  name="category" value={category} onChange={handleCategory}>
    {/* <option value="all" >All Products</option>
    <option value="all">All Products</option>

            {categories.categories.map((category) => (
              <option value={ category.name} key={category._id}>
                {category.name}
              </option>
            ))}
          </NavDropdown> */}
             
    <Filter/> 

</NavDropdown>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      {/* <Link  to="/product"  style={{color:"white",marginTop:"10px",marginLeft:"20px"}} >product
</Link> */}
 
    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Navbare
