import { themes } from "./themes";
import { Badge, Theme } from "./types";

export default class Card {
  private title: string;
  private theme: Theme;
  private badges: Badge[];

  public constructor() {
    this.title = "My Tech Stack";
    this.theme = themes.github;
    this.badges = [];
  }

  public getTheme = (): Theme => this.theme;

  public setTheme = (theme: Theme): void => {
    this.theme = theme;
  };

  public getTitle = (): string => this.title;

  public setTitle = (title: string): void => {
    this.title = title;
  };

  public addBadge = (badge: Badge): void => {
    this.badges.push(badge);
  };
}
