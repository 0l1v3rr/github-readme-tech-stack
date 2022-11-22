"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const themes_1 = require("./themes");
class Card {
    constructor() {
        this.getLineCount = () => this.lineCount;
        this.setLineCount = (lineCount) => {
            this.lineCount = lineCount;
            for (let i = 1; i <= lineCount; i++) {
                if (!this.lines.has(i)) {
                    this.lines.set(i, []);
                }
            }
        };
        this.getTheme = () => this.theme;
        this.setTheme = (theme) => {
            this.theme = theme;
        };
        this.getTitle = () => this.title;
        this.setTitle = (title) => {
            this.title = title;
        };
        this.getLinesMap = () => this.lines;
        this.getLineBadges = (lineCount) => this.lines.get(lineCount) || [];
        this.addBadge = (lineCount, badge) => {
            const lineValue = this.lines.get(lineCount) || [];
            lineValue.push(badge);
            this.lines.set(lineCount, lineValue);
        };
        this.title = "My Tech Stack";
        this.theme = (0, themes_1.getThemeByName)("github");
        this.lineCount = 1;
        this.lines = new Map();
        this.lines.set(1, []);
    }
}
exports.default = Card;
