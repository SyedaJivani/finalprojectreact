import express from "express";
import {
  homeview,
  listMenu,
  create,
  edit,
  update,
  remove,
  formSave,
  feedbackSave,
  feedbackview
} from "../controller/controller.js";

// import {homeview, updateView, create, edit, remove} from '../controller/controller.js'

const router = express.Router();

// API of menu Routes
router.get("/api/menu", listMenu);



//HTML Routes
router.get("/", homeview);
router.get("/add", (req, res) => {
  res.render("../views/add.ejs");
});
router.post("/users", create);
router.get("/update/:id", edit);
router.post("/update/:id", update);
router.get("/delete/:id", remove);

//route for order form

router.post("/order", formSave);

//route for feedback form post
router.post("/feedback", feedbackSave);


// API of feedback Routes
router.get("/api/feedback", feedbackview);

// router.get('/productform', (req, res) => {
//   res.send("this is category page")
// });

// Add view route
// router.post('/add',create);
// router.get('/update/:id', updateView);

// router.post('/update/:id',edit);
// router.get('/delete/:id', remove);

export { router };
