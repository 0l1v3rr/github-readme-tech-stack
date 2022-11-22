"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("../cards/card"));
const themes_1 = require("../cards/themes");
const svg_generator_1 = __importDefault(require("../svg/svg-generator"));
const validator_1 = require("../utils/validator");
const cardController = (req, res) => {
    var _a, _b;
    // an empty card
    const card = new card_1.default();
    // if the user doesn't specify a title, we use the default one
    const title = req.query.title;
    card.setTitle((title === null || title === void 0 ? void 0 : title.toString()) || "My Tech Stack");
    // using the getThemeByName() function
    const theme = req.query.theme;
    card.setTheme((0, themes_1.getThemeByName)((theme === null || theme === void 0 ? void 0 : theme.toString()) || ""));
    // if the user doesn't specify a line, we use 1
    const lineCount = ((_a = req.query.lineCount) === null || _a === void 0 ? void 0 : _a.toString()) || "1";
    card.setLineCount((0, validator_1.validateLineCount)(lineCount));
    // run a loop card.getLineCount() times
    for (let i = 1; i <= card.getLineCount(); i++) {
        // get the dynamic query param (line + i)
        const lineValue = ((_b = req.query[`line${i}`]) === null || _b === void 0 ? void 0 : _b.toString()) || "";
        [...(0, validator_1.validateLine)(lineValue)].forEach((b) => card.addBadge(i, b));
    }
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(new svg_generator_1.default(card).toString());
};
exports.default = cardController;
