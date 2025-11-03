import express from "express";
import dotenv from "dotenv";
import funkoRoutes from "./src/routes/funkoRoutes.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("servidor funcionando...")
});

app.use('/funko', funkoRoutes)

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort}`);
});