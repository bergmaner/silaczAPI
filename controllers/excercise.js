const Excercise = require("../models/excercise");

exports.list = async (req, res) =>
  res.json(await Excercise.find({}).sort({ createdAt: -1 }).exec());

  exports.read = (req, res) => {
    return res.json(req.excercise);
  };

exports.excerciseById = (req, res, next, id) => {
  Excercise.findById(id).exec((err, excercise) => {
    if (err || !excercise) {
      return res.status(400).json({
        error: "Excercise does not exist",
      });
    }
    req.excercise = excercise;
    next();
  });
};

exports.create = async (req, res) => {
  try {
    res.json(await new Excercise(req.body).save());
  } catch (err) {
    res.status(400).send("Excercise created failed :(");
  }
};
