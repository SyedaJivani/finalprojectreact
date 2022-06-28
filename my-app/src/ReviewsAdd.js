
import React from "react";
import "./ReviewsViews.css";

// import Header from "./Partials/Header/Header";
export default function ReviewsAdd() {
  return (
    <>
      <h1 className = "rew_head">Reviews Add</h1>
      <div>
        <div className="menu-form-parent">
          <div className="mymenu-form">
            <form className="menu-form" method="post">
              <h3>Menu</h3>
              <div>
                <input id="name" type="text" name="name" placeholder="Name" />
              </div>
              <div>
                <input
                  id="message"
                  type="text"
                  name="message"
                  placeholder="message"
                />
              </div>

              <div>
                <input type="submit" name="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
