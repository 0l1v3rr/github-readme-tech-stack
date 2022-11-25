import { getCard } from "./controllers/cards-controller";
import express, { Application } from "express";
const app: Application = express();

const PORT = process.env.PORT || 8080;

app.get("/api/cards", getCard);

app.listen(PORT, () => console.log("The server is running!"));
