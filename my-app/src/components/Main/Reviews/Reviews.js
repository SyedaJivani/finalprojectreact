import "./Reviews.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Partials/Header/Header";

const Reviews = () => {
  const [products, getProduct] = useState();
  const getProductData = () => {
    axios
      .get("http://localhost:8000/api/feedback", {})

      .then(function (response) {
        console.log(response.data);
        // handle succes
        getProduct(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    console.log("hello syeda");
    getProductData();
  }, []);
  return (
    <>
      <Header />
      <section className="row banner">
        <div>
          <section className="container">
            <div className="main">
              <h1>Reviews</h1>
            </div>
          </section>
        </div>
      </section>

      <section class="row reviews">
        <div class="container">
          <div class="rmb">
            {products &&
              products.map((data, key) => {
                return (
                  <>
                    <li key={key}></li>

                    <li>
                      <div class="review-box">
                      <h3>{data.name}</h3>
                      <p>{data.message}</p>
                    </div>
                   </li>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
