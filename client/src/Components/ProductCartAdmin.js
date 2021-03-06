import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Swal from "sweetalert2/dist/sweetalert2.js";

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

    return (
        <div>
          <Card  style={{marginLeft:"30px",marginBottom:"20px",width:"208px",height:"313px"}}>
      {/* <CardMedia
        component="img"
        image={`http://localhost:5000/${pizza.avatar}`}
        alt="green iguana"
      /> */}

      <img src={`http://localhost:4000${el.imageUrl}`}
/>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{fontSize:"12px" }}>
           {el.title}
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
      {/* <Button onClick={()=>dispatch(deleteProduct(el._id),
      
  getProductlist())              Swal.fire("Good job!", "post removed!", "success");
}>delete</Button> */}
      </div>

      <Button
            onClick={() => {
              dispatch(deleteProduct(el._id));
              Swal.fire("Good job!", "produit removed!", "success");
            }}
          >
delete          </Button>
       
      </CardActions>
    
    </Card>
      
        </div>
    )
}

export default ProductCartAdmin
