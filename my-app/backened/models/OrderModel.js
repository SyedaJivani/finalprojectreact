import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    phone: {
        type: Number,
    
    },
    // time: {
    //     type: String,
    
    // },
    date: {
          type: Date,
        // default: (new Date()).getTime() 
    
    },
    menu: {
        type: String,
    
    }
});

// The alternative to the export model pattern is the export schema pattern.
const OrdersDB = mongoose.model('Order', orderSchema);

export { OrdersDB }