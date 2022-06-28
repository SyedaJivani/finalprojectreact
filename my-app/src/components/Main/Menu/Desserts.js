import axios from 'axios';
import React, {useEffect , useState} from "react";

const Desserts= () => {
	const [products, getProduct] =  useState()
const getProductData = () =>{
	axios.get("http://localhost:8000/api/menu", {
		params: {
			category: "Desserts"}})
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



	return(
		<>
		<div className="desserts">
						<div className="desserts-menu">
							<div className="desserts-menu-items">
								<p>Desserts</p>
								<ul>
								{products &&products.map((data,key)=>{
				return(
				<>
					<li  key = {key}></li>
					<li><img src="Images/drinks-menu.png" alt="desserts"/>{data.menu}..................................................{data.price}</li>
									</>
			)
		})}
								</ul>	
							</div>
						</div>
						<img src="Images/desserts.png" alt="desserts"/>
					</div>
				
					
		</>
		
	)
}
export default Desserts;