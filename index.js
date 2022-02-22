const express = require("express");
const conectDB = require("./config/database");
const cors = require("cors");
// crear el servidor
const app = express();

// conectar base de datos
conectDB();

//cors
app.use(cors());
// habilitar express.json
app.use(express.json({ extended: true }));

// Rutas de la app
app.use("/api", require("./routes/api"));

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
