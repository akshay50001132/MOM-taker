const Mom = require("../model/momModel");

// create a new mom
const create = async (req, res) => {
  try {
    const mom = await Mom.create({
      ...req.body,
      owner: req.user,
    });
    res.status(200).send({
      id: mom._id,
      message: "mom created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error, please try again later" });
  }
};

// return moms created by logged in user
const getSelfMoms = async (req, res) => {
  try {
    const moms = await Mom.find({ owner: req.user });
    res.json({
      moms: [...moms],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error, please try again later" });
  }
};

const getMomById = async (req, res) => {
  try {
    const mom_id = req.params.id;

    const mom = await Mom.findById(mom_id);
    res.json({
      mom,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error, please try again later" });
  }
};

const updateMomById = async (req, res) => {
  try {
    const mom_id = req.params.id;

    const updatedMom = await Mom.findByIdAndUpdate(
      mom_id,
      { ...req.body },
      { new: true }
    );

    res.json({
      mom: updatedMom,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error, please try again later" });
  }
};

module.exports = {
  create,
  getSelfMoms,
  getMomById,
  updateMomById,
};
