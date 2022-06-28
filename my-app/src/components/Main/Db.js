import axios from 'axios';
import React, {useEffect , useState} from "react";

const Db = () => {
const [products, getProduct] =  useState()
const getProductData = () =>{
		axios.get('http://localhost:8000/')
  .then(function (response) {
    console.log(response.data)
	// handle success
    getProduct(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
	}
useEffect(()=>{
	console.log("hello syeda");
	getProductData();
},[]);
    return (
      <>
	  <h1>table</h1>
	  <table>
		{products &&products.map((data,key)=>{
			return(
				<>
				<tr key = {key}> </tr>
				<td>Menu : {data.menu}</td>
				<td>Price : {data.price}</td>
				
				
				</>
			)
		})}
	
	  </table>
	  </>
	  );
	}
	
	export default Db;
