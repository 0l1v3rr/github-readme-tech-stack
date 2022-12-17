import { getThemeByName } from "./themes";
import { Badge, BadgeAlign, FontWeight, Theme } from "./types";

export default class Card {
  private title: string;
  private lineCount: number;
  private theme: Theme;
  private badgeAlign: BadgeAlign;
  private showBorder: boolean;
  private borderRadius: number;
  private fontWeight: FontWeight;

  private lines: Map<number, Badge[]>;

  public constructor() {
    this.title = "My Tech Stack";
    this.theme = getThemeByName("github");
    this.badgeAlign = "left";
    this.showBorder = true;
    this.borderRadius = 4.5;
    this.fontWeight = FontWeight.SEMIBOLD;

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

  public getBadgeAlign = (): BadgeAlign => this.badgeAlign;

  public setBadgeAlign = (badgeAlign: BadgeAlign): void => {
    this.badgeAlign = badgeAlign;
  };

  public getShowBorder = (): boolean => this.showBorder;

  public setShowBorder = (showBorder: boolean): void => {
    this.showBorder = showBorder;
  };

  public getBorderRadius = (): number => this.borderRadius;

  public setBorderRadius = (borderRadius: number): void => {
    this.borderRadius = borderRadius;
  };

  public getFontWeight = (): FontWeight => this.fontWeight;

  public setFontWeight = (weight: string): void => {
    switch (weight.toLowerCase().trim()) {
      case "thin":
        this.fontWeight = FontWeight.THIN;
        break;
      case "bold":
        this.fontWeight = FontWeight.BOLD;
        break;
      case "normal":
        this.fontWeight = FontWeight.NORMAL;
        break;
    }
  };
}
