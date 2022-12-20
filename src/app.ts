import express, { Application, Response, NextFunction } from "express";
import path from "path";
import cors from "cors";
import { getCard } from "./controllers/cards-controller";
import { getThemes } from "./controllers/themes-controller";
const app: Application = express();

const PORT = process.env.PORT || 8080;

app.get("/api/cards", getCard);
app.get("/api/themes", cors(), getThemes);

app.use(
  "/",
  express.static(path.join(__dirname, "..", "client", "build")),
  (_, res: Response, next: NextFunction) => {
    res.setHeader("Cache-Control", "no-store, no-cache");
    next();
  }
);

app.listen(PORT, () => console.log("The server is running!"));
