import express, { Application } from "express";
import cors from "cors";
import { getCard } from "./controllers/cards-controller";
import { getTheme, getThemes } from "./controllers/themes-controller";
import { redirect } from "./controllers/redirect";

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.get("/api/cards", getCard);
app.get("/api/themes", cors(), getThemes);
app.get("/api/themes/:name", cors(), getTheme);

app.get("*", redirect);

app.listen(PORT, () => console.log("The server is running!"));
