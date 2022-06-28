import './Feedback.css';
import React, { useState } from "react";

export default function Feedback() {
    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      const PostReview = (e) => {
        e.preventDefault();
        console.log(feedback);

        let feedbackdata = new FormData(e.target);
        const url = "http://localhost:8000/feedback";
        fetch(url, {
          method: "POST",
          body: new URLSearchParams(feedbackdata),
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

    setFeedback({ ...feedback, [name]: value });
  };
  return (
    <div>
      <div class="form">
        <p class="easy">Feedback Form</p>
        <form onSubmit={PostReview}id="basic-form">
          <p>
            <input onChange={(e) => handleInputs(e)} id="name" name="name" value= {feedback.name} minlength="3" type="text" placeholder="Name" />
          </p>
          <p>
            <input onChange={(e) => handleInputs(e)} id="email" type="email" name="email" value = {feedback.email} placeholder="Email" />
          </p>
          <p>
            <input onChange={(e) => handleInputs(e)} id="txtTel" type="tel" name="phone" value = {feedback.phone} placeholder="Phone" />
          </p>
          <p>
            <textarea onChange={(e) => handleInputs(e)} value = {feedback.message}
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              cols="33"
            ></textarea>
          </p>
          <p class="save">
            <input class="submit" type="submit" value="SUBMIT" />
          </p>
        </form>
      </div>
    </div>
  );
}
