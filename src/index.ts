import express from "express";
import cors from "cors"; 
import entryRoutes from "./routes/routes";

const app = express();


app.use(cors()); // Esto permite que tu Front (React) se conecte sin errores [cite: 431, 433]
app.use(express.json());

app.use("/entries", entryRoutes);

app.get("/", (req, res) => {
  res.send("API de Dhayan funcionando 🚀");
});

const PORT = 3001; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});