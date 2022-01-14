import React, { useState } from 'react'
import { Modal,Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { editProduct, getProductlist } from '../redux/productAction';

const EditProduct = ({el}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState(el.title)
    const [description, setDescription] = useState(el.description)
    const [category, setCategory] = useState(el.category)
const [price, setPrice] = useState(el.price)   
const [quantite, setQuantite] = useState(el.quantity)
const [imageUrl, setImageUrl] = useState(el.imageUrl)
const [quantityStock, setquantityStock] = useState(el.quantityStock)

const dispatch = useDispatch()

const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(editProduct(el._id,title,description,category,price,quantite,imageUrl,quantityStock))
    dispatch(getProductlist())
    setTitle('')
    setDescription('')
    setCategory('')
    setPrice('')
    setQuantite('')
    setImageUrl('')
    setquantityStock('')
}
    return (
        <div>
                <Button  onClick={handleShow}>update</Button>

             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Modifier le produit</Modal.Title>
        </Modal.Header>
        <Form
          style={{ marginLeft: "10px", marginTop: "10px" }}
          onSubmit={handleSubmit}
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
              <input
                type="text"
                value={imageUrl}
                placeholder="name"
                onChange={(e) => setImageUrl(e.target.value)}
              />
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
                value={quantite}
                placeholder="quatite"
                onChange={(e) => setQuantite(e.target.value)}
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
                onChange={(e) => setquantityStock(e.target.value)}
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

export default EditProduct