"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const themes_1 = require("./themes");
class Card {
    constructor() {
        this.changeTheme = (theme) => {
            this.theme = theme;
        };
        this.setTitle = (title) => {
            this.title = title;
        };
        this.addBadge = (badge) => {
            this.badges.push(badge);
        };
        this.title = "My Tech Stack";
        this.theme = themes_1.themes.github;
        this.badges = [];
    }
}
exports.default = Card;
