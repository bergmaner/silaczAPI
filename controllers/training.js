const Training = require("../models/training");

exports.list = async (req, res) =>{
  res.json(await Training.find({}).sort({ createdAt: -1 }).exec());
}

  exports.read = (req, res) => {
    return res.json(req.training);
  };

exports.create = async (req, res) => {
  try {
    res.json(await new Training(req.body).save());
  } catch (err) {
    res.status(400).send("Training created failed :(");
  }
};

exports.trainingById = (req, res, next, id) => {
  Training.findById(id).exec((err, training) => {
    if (err || !training) {
      return res.status(400).json({
        error: "Training does not exist",
      });
    }
    req.training = training;
    next();
  });
};
