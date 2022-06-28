import { menuDb } from "../models/menudb.js";
import { OrdersDB } from "../models/orderModel.js";
import { reviewsDB } from "../models/reviewsdb.js";
// API Controllers
const listMenu = (req, res) => {
  const filters = {};
  if (req.query.category) {
    filters.category = req.query.category;
  }
  menuDb.find(filters).then((userData) => {
    res.send(userData);
  });
};

// UI Controllers
//homeviewznnzzz0
const homeview = (req, res) => {
  menuDb.find().then((userData) => {
    // res.render("views", { userData });
    res.send(userData);
  });
};

//create
const create = (req, res) => {
  const item = new menuDb({
    category: req.body.category,
    menu: req.body.menu,
    price: req.body.price,
  });
  item.save(item).then((data) => {
    res.redirect("/");
  });
};

// edit
const edit = (req, res) => {
  const id = req.params.id;
  menuDb.findByIdAndUpdate(id, req.body).then((userData) => {
    res.render("../views/edit", { userData });
  });
};
//update
const update = (req, res) => {
  menuDb.updateOne(
    { _id: req.params.id },
    {
      $set: {
        category: req.body.category,
        menu: req.body.menu,
        price: req.body.price,
      },
    },
    (err, result) => {
      res.redirect("/");
    }
  );
};
//remove/delete
const remove = (req, res) => {
  menuDb.findByIdAndDelete(req.params.id, function (err, userData) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

// form of order placed
const formSave = (req, res) => {
  const orderlist = new OrdersDB({
    name: req.body.name,
    phone: req.body.phone,
    date: req.body.date,
    menu: req.body.menu,
  });
  orderlist.save(orderlist).then((data) => {
    res.send("form has been submitted");
  });
};

//feedback api save
const feedbackSave = (req, res) => {
  const feedbacklist = new reviewsDB({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });
  feedbacklist.save(feedbacklist).then((data) => {
    res.send("Thanks for ur valuable feedback");
  });
};

//feedback callbacks
const feedbackview = (req, res) => {
  reviewsDB.find().then((userData) => {
    // res.render("views", { userData });
    res.send(userData);
  });
};

//             { $set: { 'menu': req.body.menu,  'price': req.body.price }
//         });
//         console.log(userData)
//     res.render('../views/edit', { userData })
// }

// const update = (req, res) => {
//   const id = req.params.id;
//   menuDb.findByIdAndUpdate(id, req.body).
//       then(userData => {
//           //res.send(data)
//           res.render('../views/edit', { userData })
//       });
// }

// const remove = (req, res) => {
//   const id = req.params.id;
//   menuDb.findByIdAndDelete(id, req.body).
//       then(userData => {
//           //res.send(data)
//           res.render('../views/edit', { userData })
//       });
// }

// const submituser=(req,res)=>{
//     const saveUser = menuDb(req.body)
//     saveUser.save((error,saveUser)=>{
//         if(error)throw error
//         res.send(saveUser)
//         console.log(req.body)

//     })
// }

// const checkid= (req,res)=>{
//         Users.findOne({password: {$eq:req.body.password}});
//         if (Users) {
//           res.status(400).json({
//           message: "this user is already registered",
//           data: {}
//           });
//         };
//         res.status(200).json({
//           message: "login successful",
//           data: Users
//         })

// }

// const create = (req,res) =>{
//     console.log(req.body)
//     dbConnection().then((client) => {
//         const Menu = client.db('myDB').collection('Menu');
//      Menu.insertOne(req.body,(err,result)=>{
//          console.log(result.insertedCount + `document inserted successfully!`)
//        res.redirect('/');
//      });
//   });
// }

// const edit = (req, res) => {
//     console.log(req.params.id);
//     dbConnection().then((client) => {
//         const usersCollection = client.db('myDB').collection("UsersCollection");
//         usersCollection.updateOne(
//             { '_id': new ObjectId(req.params.id) },
//             { $set: { 'productname': req.body.productname, 'model': req.body.model, 'color': req.body.color } },
//             (err, result) => {
//              console.log(result.updatedCount + ' document updated successfully!');
//                 res.redirect('/');
//             });
//     });
// }

// const updateView = async (req, res) => {
//     dbConnection().then(async (client) => {
//         const userData = await client.db('myDB').collection('UsersCollection')
//             .findOne({
//                 _id: new ObjectId(req.params.id),
//             });
//         res.render('../views/edit', { userData })

//     });

// }

// const remove = (req, res) => {
//     console.log(req.params.id);
//     dbConnection().then((client) => {
//         const usersCollection = client.db('myDB').collection("UsersCollection");
//         usersCollection.deleteOne(
//             { '_id': new ObjectId(req.params.id) },

//             (err, result) => {
//                 console.log(result.delete + ' document deleted successfully!');
//                 res.redirect('/');
//             });
//     });
// }

export { homeview, listMenu, create, edit, update, remove, formSave ,feedbackSave,feedbackview};
// export { homeview, updateView, create, edit,remove }
