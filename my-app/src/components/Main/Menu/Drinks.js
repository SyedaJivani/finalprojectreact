import axios from "axios";
import React, { useEffect, useState } from "react";

const Drinks = () => {
  const [products, getProduct] = useState();
  const getProductData = () => {
    axios
      .get("http://localhost:8000/api/menu", {
		params: {
			category: "Drinks"
		}
	  })

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
      <div className="drinks">
        <img src="Images/Drinks.png" alt="drinks" />
        <div className="drinks-menu">
          <div className="drinks-menu-items">
            <p>Drinks</p>
            <ul>
              {products &&
                products.map((data, key) => {
                  return (
                    <>
                      <li key={key}></li>
                      <li>
                        <img src="Images/drinks-menu.png" alt="drinks" />
                        {data.menu}
                        ...........................................................
                        {data.price}
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Drinks;
