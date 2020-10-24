const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const {
    create,
    read,
    list,
    trainingById
  } = require("../controllers/training");

  router.post("/training", create); // authCheck, adminCheck,
  router.get("/trainings", list);
  router.get("/training/:trainingId", read);

  router.param("trainingId", trainingById);

  module.exports = router;