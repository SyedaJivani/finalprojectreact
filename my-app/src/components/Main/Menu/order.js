import React, { useState } from "react";


function Order() {
  const [order, setOrder] = useState({
    name: "",
    phone: "",
    date: "",
    menu: "",
  });
  const PostData = (e) => {
    e.preventDefault();
    console.log(order);
    
    

    let formdata = new FormData(e.target);
    const url = "http://localhost:8000/order";
    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formdata),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
       
        // }).catch(function(response){
        //   console.log(response)
      });
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setOrder({ ...order, [name]: value });
  };

  return (
    <>
      <div>
        <div className="menu-form-parent">
          <div className="mymenu-form">
            <form onSubmit={PostData} className="menu-form">
              <h3>Menu</h3>
              <div>
                <input
                  onChange={(e) => handleInputs(e)}
                  id="name"
                  value={order.name}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  onChange={(e) => handleInputs(e)}
                  id="phone"
                  value={order.phone}
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                />
              </div>

              <div>
                <input
                  onChange={(e) => handleInputs(e)}
                  id="date"
                  value={order.date}
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="datepicker"
                />
              </div>
              <div>
                <select
                  onChange={(e) => handleInputs(e)}
                  id="menu"
                  value={order.menu}
                  className="menuselect"
                  name="menu"
                >
                  <optgroup label="DRINKS">
                    <option value="Hibre">Hibre</option>
                    <option value="Majito">Majito</option>
                    <option value="Martini">Martini</option>
                    <option value="Cuba Libre">Cuba Libre</option>
                    <option value="Mocha">Mocha</option>
                  </optgroup>
                  <optgroup label="DESSERTS">
                    <option value="Key Lime Pie">Key Lime Pie</option>
                    <option value="New york Cheese Cake">
                      New york Cheese Cake
                    </option>
                    <option value="Apple Crisp">Apple Crisp</option>
                    <option value="Mixed Berries">Mixed Berries</option>
                    <option value="Plain Cheese Cake">
                      Plain Chesses Cake
                    </option>
                  </optgroup>
                  <optgroup label="MAIN COURSE">
                    <option value="Butter Chicken.">Butter Chicken.</option>
                    <option value="Palak Paneer.">Palak Paneer.</option>
                    <option value="Grilled Chicken with Fresh Cherry Salsa.">
                      Grilled Chicken with Fresh Cherry Salsa.
                    </option>
                    <option value="Bombay Grilled Chutney Sandwich.">
                      Bombay Grilled Chutney Sandwich.
                    </option>
                    <option value="Persian Chicken Joojeh Kebabs.">
                      Persian Chicken Joojeh Kebabs.
                    </option>
                  </optgroup>
                </select>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
