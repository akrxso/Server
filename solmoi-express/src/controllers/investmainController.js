const investService = require("../services/investmainServices.js");

exports.getAllInvestments = async (req, res) => {
  try {
    const investments = await investService.getAllInvestments();
    res.status(200).json(investments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving investments", error });
  }
};

exports.addInvestment = async (req, res) => {
  try {
    const newInvestment = await investService.addInvestment(req.body);
    res.status(201).json(newInvestment);
  } catch (error) {
    res.status(500).json({ message: "Error adding investment", error });
  }
};
