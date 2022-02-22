// Modelo
const Task = require("../Models/Task");

exports.index = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 0, message: "Hubo un error" });
  }
};

exports.create = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.json({
      status: 1,
      message: "Tarea añadida",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 0, message: "Hubo un error" });
  }
};

exports.show = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
exports.update = async (req, res) => {
  try {
    res.json("fdf");
  } catch (error) {
    console.log(error);
  }
};
exports.destroy = async (req, res) => {
  try {
    res.json("fdf");
  } catch (error) {
    console.log(error);
  }
};
