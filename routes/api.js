const express = require("express");
const router = express.Router();

// Controller
const TaskController = require("../app/Controllers/TaskController");

// Rutas
router.get("/tasks", TaskController.index);
router.get("/tasks/done", TaskController.done);
router.post("/tasks", TaskController.create);
router.get("/tasks/:id", TaskController.show);
router.put("/tasks/:id", TaskController.update);
router.delete("/tasks/:id", TaskController.destroy);

module.exports = router;
