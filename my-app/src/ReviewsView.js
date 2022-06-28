import React from "react";
import "./ReviewsViews.css";

export default function ReviewsView() {
  return (
    <div>
      <body>
        <h1 className = "rew_head"> Reviews View</h1>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </body>
    </div>
  );
}
