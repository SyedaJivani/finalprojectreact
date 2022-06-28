import axios from 'axios';
import React, {useEffect , useState} from "react";

const Maincourse= () => {
	const [products, getProduct] =  useState()
const getProductData = () =>{
	axios.get("http://localhost:8000/api/menu", {
		params: {
			category: "Maincourse"}})
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
		<div className="main-course">
						<img className="main-course-img" src="Images/main-course.png" alt="maincourse"/>
						<div className="main-course-menu">
							<div className="main-course-items">
								<p>Main course</p>
								<ul>
                                {products &&products.map((data,key)=>{
				        return(
				            <>
					                <li  key = {key}></li>
									<li><img src="Images/drinks-menu.png" alt="maincourse"/>{data.menu}.................................................{data.price}</li>
														
				</>
			)
		})}
								</ul>
							</div>
						</div>
					</div>
					
		</>
	)
}
export default Maincourse;