import axios from 'axios';
import React, { useState } from 'react'
import { Modal,Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { editProduct, getProductlist } from '../redux/productAction';

const EditProduct = ({el}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//     const [title, setTitle] = useState(el.title)
//     const [description, setDescription] = useState(el.description)
//     const [category, setCategory] = useState(el.category)
// const [price, setPrice] = useState(el.price)   
// const [quantite, setQuantite] = useState(el.quantity)
// const [imageUrl, setImageUrl] = useState(el.imageUrl)
// const [quantityStock, setquantityStock] = useState(el.quantityStock)
// const [file, setFile] = useState(); 

const dispatch = useDispatch()
const [storyedited, setstoryedited] = useState({});

const uploadFileHandler = async (e) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("file", file);
  const { data } = await axios.post(
      "http://localhost:3000/product/uploads",
    bodyFormData
  );
  console.log(data);
  setstoryedited({ ...storyedited, imageUrl: data });
};


const handleSubmit = () => {
  dispatch(editProduct( el._id, storyedited ));}
// const handleSubmit=(e)=>{
//     e.preventDefault()
//     dispatch(editProduct(el._id,title,description,category,price,{imageUrl:data},quantite,quantityStock))
//     dispatch(getProductlist())
//     setTitle('')
//     setDescription('')
//     setCategory('')
//     setPrice('')
//     setQuantite('')
//     setImageUrl('')
//     setquantityStock('')
// }
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
              titre
            </Form.Label>
            <Col sm="10">
            <input
                type="text"
                placeholder="titre"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    title: e.target.value,
                  });
                }}
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
                type="file"
                name='file'
                onChange={uploadFileHandler}
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
                placeholder="price"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    price: e.target.value,
                  });
                }}
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
                placeholder="description"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    description: e.target.value,
                  });
                }}
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
                placeholder="categorie"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    category: e.target.value,
                  });
                }}
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
                placeholder="quantitie"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    quantity: e.target.value,
                  });
                }}
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
                placeholder="quantitie en stock"
                onChange={(e) => {
                  setstoryedited({
                    ...storyedited,
                    quantityStock: e.target.value,
                  });
                }}
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