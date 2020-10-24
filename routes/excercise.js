const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const {
    create,
    read,
    list,
    excerciseById
  } = require("../controllers/excercise");

  router.post("/excercise", create); // authCheck, adminCheck,
  router.get("/excercises", list);
  router.get("/excercise/:excerciseId", read);

  router.param("excerciseId", excerciseById);

  module.exports = router;