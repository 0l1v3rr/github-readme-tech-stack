import { getThemeByName, themes } from "./themes";
import { Badge, Theme } from "./types";

export default class Card {
  private title: string;
  private lineCount: number;
  private theme: Theme;

  private lines: Map<number, Badge[]>;

  public constructor() {
    this.title = "My Tech Stack";
    this.theme = getThemeByName("github");

    this.lineCount = 1;
    this.lines = new Map<number, Badge[]>();
    this.lines.set(1, []);
  }

  public getLineCount = (): number => this.lineCount;

  public setLineCount = (lineCount: number): void => {
    this.lineCount = lineCount;

    for (let i = 1; i <= lineCount; i++) {
      if (!this.lines.has(i)) {
        this.lines.set(i, []);
      }
    }
  };

  public getTheme = (): Theme => this.theme;

  public setTheme = (theme: Theme): void => {
    this.theme = theme;
  };

  public getTitle = (): string => this.title;

  public setTitle = (title: string): void => {
    this.title = title;
  };

  public getLinesMap = (): Map<number, Badge[]> => this.lines;

  public getLineBadges = (lineCount: number): Badge[] =>
    this.lines.get(lineCount) || [];

  public addBadge = (lineCount: number, badge: Badge): void => {
    const lineValue = this.lines.get(lineCount) || [];
    lineValue.push(badge);

    this.lines.set(lineCount, lineValue);
  };
}
