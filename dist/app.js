"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cards_1 = __importDefault(require("./controllers/cards"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.get("/api/cards", cards_1.default);
app.listen(PORT, () => console.log("The server is running!"));
