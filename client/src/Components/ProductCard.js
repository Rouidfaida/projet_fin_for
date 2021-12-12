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

const ProductCard = ({el}) => {
   
  

    return (
        <div >
          <Card  style={{marginLeft:"30px",marginBottom:"20px",width:"200px"}}>
      <CardMedia
        component="img"
        height="140"
        image={el.imageUrl}
        alt="green iguana"
      />
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
  

      <Button size="small">Share</Button>
      <Link   to={`infos/${el._id}`}>
       
<Button>get</Button>

</Link>
</div>
      </CardActions>
    </Card>
   
        </div>
    )
}

export default ProductCard
