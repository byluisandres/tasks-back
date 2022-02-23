// Modelo
const Task = require("../Models/Task");

// Obtener todas las tareas
exports.index = async (req, res) => {
  try {
    const tasks = await Task.find({ done: false }).sort();
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 0, message: "Hubo un error" });
  }
};
// Obtener todas las tareas hechas
exports.done = async (req, res) => {
  try {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 0, message: "Hubo un error" });
  }
};

// Crear una tarea
exports.create = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.json({
      status: 1,
      message: "Tarea añadida",
      data: task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 0, message: "Hubo un error" });
  }
};

// Obtener una tarea
exports.show = async (req, res) => {
  const task = await Task.findById(req.params.id);
  try {
    if (!task) {
      res.status(404).json({ status: 0, message: "Tarea no encontrada" });
      return next();
    }
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 0, message: "Hubo un error" });
  }
};

// Editar una tarea
exports.update = async (req, res) => {
  try {
    // Extraer
    const { done } = req.body;
    console.log(done)
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res
        .status(404)
        .json({ status: 0, message: "Tarea no encontrada" });
    }

    // Crear objeto con la nueva información
    const newTask = {};
    if (done) newTask.done = done;

    // Editar la tarea
    task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, {
      new: true,
    });

    res.json({ status: 1, message: "Tarea editada" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 0, message: "Hubo un error" });
  }
};

// Eliminar una tarea
exports.destroy = async (req, res, next) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id });
  try {
    if (!task) {
      res.status(404).json({ status: 0, message: "Tarea no encontrada" });
      return next();
    }
    res.json({ status: 1, message: "Tarea eliminada" });
  } catch (error) {
    console.log(error);
    es.status(500).json({ status: 0, message: "Hubo un error" });
  }
};
