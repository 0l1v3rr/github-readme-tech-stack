import { getCard } from "./controllers/cards-controller";
import express, { Application } from "express";
import path from "path";
import { getThemes } from "./controllers/themes-controller";
const app: Application = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/api/cards", getCard);
app.get("/api/themes", getThemes);

app.listen(PORT, () => console.log("The server is running!"));
