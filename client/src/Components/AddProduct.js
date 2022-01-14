import axios from "axios";
import { path } from "express/lib/application";
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/productAction";
import { profileUser } from "../redux/userAction";
import Product from "./ProductList";

const AddProduct = () => {
  const { users } = useSelector((state) => state.alluser);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [date_product, setDate_product] = useState("");
  // const [imageUrl, setImageUrl] = useState("")
  // const [quantityStock, setQuantityStock] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const [file, setFile] = useState();
//   const formData = new FormData();
//   if (file) {formData.append("file", file )}
//  console.log(file)
 const [story, setstory] = useState({
  imageUrl: "",
  title: "",
  description: "",
  price: "",
  category: "",
  quantity: "",
  quantityStock: "",
 
});

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(
  //     addProduct({
  //       title,
  //       description,
  //       file,
  //       price,
  //       category,
  //       quantity,
  //       quantityStock,
  //     })
  //   )
  //     setTitle("")
  //     setCategory("")
  //     setDescription("")
  //     setQuantity("")
  //     setPrice("")
  //     setQuantityStock("")
  // };

  // console.log("test"+file)
  // const changeFile=(e)=>{
  //   setFile(e.target.files[0])
  // }
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:3000/product/uploads",
      bodyFormData
    );
    console.log(data);
    setstory({ ...story, imageUrl: data });
  };
  const handleSubmit = () => {
    dispatch(addProduct(story));
    
  };

  return (
    <div>
      <Button onClick={handleShow}>Ajouter </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Ajouter le produit</Modal.Title>
        </Modal.Header>
        <form >

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
                onChange={(e) => {setstory({ ...story, title: e.target.value })}}
              />
            </Col>
          </Form.Group>
      
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              prix
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                placeholder="prix"
                onChange={(e) => {setstory({ ...story, price: e.target.value })
                  }  }
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
                onChange={(e) => {setstory({ ...story, description: e.target.value })}
            }
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
                onChange={(e) => {setstory({ ...story, category: e.target.value })}
              }
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
                placeholder="quantite"
                onChange={(e) => {setstory({ ...story, quantity: e.target.value })}
              }
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
                placeholder="quantite"
                onChange={(e) => {setstory({ ...story, quantityStock: e.target.value })
                  }  }
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
          <input type="file" name="file" onChange={uploadFileHandler}/>

          </Col>
          </Form.Group>
</form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={() => { handleSubmit()}}
>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
