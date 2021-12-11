import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/productAction'
import { profileUser } from '../redux/userAction'
import Product from './ProductList'

const AddProduct = () => {
    const {users} = useSelector(state => state.alluser)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
const [category, setCategory] = useState('')
const [quantity, setQuantity] = useState('')
const [date_product, setDate_product] = useState('')
const [quantityStock, setQuantityStock] = useState('')
const dispatch = useDispatch()
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [file, setFile] = useState(); 

const handleSubmit=(e)=>{
    e.preventDefault()
dispatch(addProduct({title,description,file,price,category,quantity,quantityStock}))}
const formData = new FormData();
   if (file) {formData.append("file", file )}
  console.log("test"+file)
    return (
        <div>
             <Button  onClick={handleShow}>Ajouter </Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title> Ajouter le produit</Modal.Title>
</Modal.Header>
<Form
style={{ marginLeft: "10px", marginTop: "10px" }}
onSubmit={handleSubmit}
action="/ProductPost"
enctype="multipart/form-data"
>
<Form.Group
as={Row}
className="mb-3"
controlId="formPlaintextPassword"
>
<Form.Label column sm="2">
 name
</Form.Label>
<Col sm="10">
 <input
   type="text"
   value={title}
   placeholder="name"
   onChange={(e) => setTitle(e.target.value)}
 />
</Col>
</Form.Group>
<Form.Group
as={Row}
className="mb-3"
controlId="formPlaintextPassword"
>
 <Form.Label column sm="2">
 image
</Form.Label>
<Col sm="10">
 {/* <input
   type="text"
   value={imageUrl}
   placeholder="name"
   onChange={(e) => setImageUrl(e.target.value)}
 /> */}
               <input type="file" name="imageUrl" onChange={(e) => setFile(e.target.value)}/>

</Col>
</Form.Group>
<Form.Group
as={Row}
className="mb-3"
controlId="formPlaintextPassword"
>
<Form.Label column sm="2">
 price
</Form.Label>
<Col sm="10">
 <input
   type="text"
   value={price}
   placeholder="price"
   onChange={(e) => setPrice(e.target.value)}
 />
</Col>
</Form.Group>

<Form.Group
as={Row}
className="mb-3"
controlId="formPlaintextPassword"
>
<Form.Label column sm="2">
 description
</Form.Label>
<Col sm="10">
 <input
   type="text"
   value={description}
   placeholder="price"
   onChange={(e) => setDescription(e.target.value)}
 />
</Col>
</Form.Group>
<Form.Group
as={Row}
className="mb-3"
controlId="formPlaintextPassword"
>
<Form.Label column sm="2">
 categorie
</Form.Label>
<Col sm="10">
 <input
   type="text"
   value={category}
   placeholder="price"
   onChange={(e) => setCategory(e.target.value)}
 />
</Col>
</Form.Group>
<Form.Group
as={Row}
className="mb-3"
controlId="formPlaintextPassword"
>
<Form.Label column sm="2">
 quantite
</Form.Label>
<Col sm="10">
 <input
   type="text"
   value={quantity}
   placeholder="quatite"
   onChange={(e) => setQuantity(e.target.value)}
 />
</Col>
</Form.Group>

<Form.Group
as={Row}
className="mb-3"
controlId="formPlaintextPassword"
>
<Form.Label column sm="2">
 quantite en stock
</Form.Label>
<Col sm="10">
 <input
   type="text"
   value={quantityStock}
   placeholder="quatite"
   onChange={(e) => setQuantityStock(e.target.value)}
 />
</Col>
</Form.Group>

</Form>

<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
Close
</Button>
<Button
variant="primary"
onClick={handleSubmit}
>
Save
</Button>
</Modal.Footer>
</Modal>
</div>
    )
}

export default AddProduct
