

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  menu: {
        type: String,

    },
    price: {
        type: String,
    
    },
    category: {
      type: String,
  
  }
  });

  
  
    

    


// The alternative to the export model pattern is the export schema pattern.
const menuDb = mongoose.model('Menu', userSchema
);

export { menuDb }
