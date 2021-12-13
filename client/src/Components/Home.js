import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getCategorielist } from '../redux/categorieAction'
import { getProductlist } from '../redux/productAction'
import { getUsers } from '../redux/userAction'
import Login from './Login'
import ManagerList from './ManagerList'
import Navbare from './Navbare'
import ProductList from './ProductList'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Filter from './Filter'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Home = () => {
  const {products,loading} = useSelector(state => state.allproduct)
  const {users} = useSelector(state => state.alluser)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getProductlist(),getCategorielist())
        
    }, [])
const [search, setSearch] = useState('')
  var d= new Date() ;
  var days = d.getDay();

    return (
        <div style={{backgroundColor:"white"}}>
           <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} >
        <Navbare search={search} setSearch={setSearch}/>
      </Grid>
       
        <Grid style={{marginLeft:"20px"}} item xs={2}>
        <Filter/>
        </Grid>
        <Grid style={{marginLeft:"200px"}} item xs={6}md={10}>
        <ProductList  product={products.filter(el=>el.title.toLowerCase().includes(search.toLowerCase()))}/>
        {days==2?<Navigate to='/blackFriday'/>:<h2>it is lllll</h2>}

        </Grid>
      </Grid>
    </Box>
  
        {/* <img
          className="d-block w-100"
          style={{ height: "300px" }}
          src="https://cdn3.ceresbookshop.com/modules/tmhomeslider/images/1172b6d7faba02f5f5ceb2d8588d049390fca9e0_Bannieres-site-2.png"
          alt="Lg"
        /> */}

{/* <Login/> */}
       </div>
    )
}

export default Home
