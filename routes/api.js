const express = require("express");
const router = express.Router();

// Controller
const TaskController = require("../app/Controllers/TaskController");

// Rutas
router.get("/task", TaskController.index);

module.exports = router;