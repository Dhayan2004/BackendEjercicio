import express from "express";
import cors from "cors"; 
import rateLimit from "express-rate-limit"; 
import entryRoutes from "../routes/routes";

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 30, 
  message: { error: "Demasiadas peticiones. No intentes saturar la base de datos." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors()); 
app.use(express.json());
app.use(limiter); 

app.use("/entries", entryRoutes);

app.get("/", (req, res) => {
  res.send("API de Dhayan funcionando y protegida");
});

const PORT = 3001; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});