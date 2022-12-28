
import { useState, useEffect } from "react";
import { RegisterProduct} from "../components";
import { getAllProducts } from "../services/crud-ws";


const HomePage = () => {

  useEffect(() => {

    getAllProducts().then((data) => {console.log(data);})
  },[])

  return <RegisterProduct />;
};

export default HomePage;



