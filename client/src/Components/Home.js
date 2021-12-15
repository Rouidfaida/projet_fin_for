import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCategorielist } from "../redux/categorieAction";
import { getProductlist } from "../redux/productAction";
import { getUsers } from "../redux/userAction";
import Login from "./Login";
import ManagerList from "./ManagerList";
import Navbare from "./Navbare";
import ProductList from "./ProductList";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Filter from "./Filter";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Home = () => {
  const { products, loading } = useSelector((state) => state.allproduct);
  console.log(products);
  const { users } = useSelector((state) => state.alluser);

  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getProductlist(),getCategorielist())

  //   }, [])
  const [search, setSearch] = useState("");
  var d = new Date();
  var days = d.getDay();

  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbare search={search} setSearch={setSearch} />

      <div className="col-md-4">
        <Filter />
      </div>
      <div style={{ marginLeft: "130px" }} className="col-md-12">
        <ProductList
          product={products.filter((el) =>
            el.title.toLowerCase().includes(search.toLowerCase())
          )}
        />
        {days == 4 ? <Navigate to="/blackFriday" /> : <></>}
      </div>
    </div>
  );
};

export default Home;
