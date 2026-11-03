import express from "express";
import { routerCurtidas } from "./routes/curtidas.route.js";

const app = express()
const port = 3000

app.use(express.json())
app.use("/curtidas", routerCurtidas)

app.listen(port, () => {
    console.log("API Rodando em http://localhost:3000");
})