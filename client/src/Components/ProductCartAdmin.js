import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, Form,Button, Col, Row } from "react-bootstrap";
import { deleteProduct, editProduct, getProductId, getProductlist } from '../redux/productAction';
import EditProduct from './EditProduct';
import { getUsers } from '../redux/userAction';
const ProductCartAdmin = ({el}) => {
    const dispatch = useDispatch()
    const handelSubmit=()=>
{
  dispatch(deleteProduct(el._id),
  getProductlist())
}
    return (
        <div>
                  <Card  style={{marginLeft:"30px",marginBottom:"20px",width:"200px"}}>
      {/* <CardMedia
        component="img"
        height="140"
        image={`http://localhost:5000/${el.imageUrl}`}
        alt="green iguana"
      /> */}
      <img src={`http://localhost:5000/${el.imageUrl}`}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {el.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {el.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {el.quantite}
        </Typography>
      </CardContent>
      <CardActions>
   <div style={{display:'flex'}}> 
      
      <EditProduct el={el}/>
      <Button onClick={handelSubmit}>delete</Button>
      </div>


       
      </CardActions>
    
    </Card>
      
        </div>
    )
}

export default ProductCartAdmin
