import React from 'react'
import { useState } from "react";

function Menu_table() {
    const [name, setName] = useState("");
  return (
    <>
        <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
    </>
  )
}
export default Menu_table;