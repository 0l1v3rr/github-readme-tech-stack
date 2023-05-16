import { getThemeByName } from "@/const/themes";
import { Badge, Align, FontWeight, Theme } from "@/types";

export default class Card {
  private title: string;
  private lineCount: number;
  private theme: Theme;
  private badgeAlign: Align;
  private titleAlign: Align;
  private showBorder: boolean;
  private borderRadius: number;
  private fontWeight: FontWeight;
  private fontSize: number;
  private fontFamily: string;
  private gap: number;
  private lineHeight: number;
  private hideTitle: boolean;

  private lines: Map<number, Badge[]>;

  public constructor() {
    this.title = "My Tech Stack";
    this.theme = getThemeByName("github_dark");
    this.badgeAlign = "left";
    this.titleAlign = "left";
    this.showBorder = true;
    this.borderRadius = 4.5;
    this.fontWeight = FontWeight.SEMIBOLD;
    this.fontSize = 18;
    this.fontFamily = "Segoe UI";
    this.gap = 10;
    this.lineHeight = 7;
    this.hideTitle = false;

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

  public getBadgeAlign = (): Align => this.badgeAlign;

  public setBadgeAlign = (badgeAlign: Align): void => {
    this.badgeAlign = badgeAlign;
  };

  public getTitleAlign = (): Align => this.titleAlign;

  public setTitleAlign = (titleAlign: Align): void => {
    this.titleAlign = titleAlign;
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

  public getFontSize = (): number => this.fontSize;

  public setFontSize = (fontSize: number): void => {
    this.fontSize = fontSize;
  };

  public getFontFamily = (): string => this.fontFamily;

  public setFontFamily = (fontFamily: string): void => {
    this.fontFamily = fontFamily;
  };

  public getGap = (): number => this.gap;

  public setGap = (gap: number): void => {
    this.gap = gap;
  };

  public getLineHeight = (): number => this.lineHeight;

  public setLineHeight = (lineHeight: number): void => {
    this.lineHeight = lineHeight;
  };

  public getHideTitle = (): boolean => this.hideTitle;

  public setHideTitle = (hideTitle: boolean): void => {
    this.hideTitle = hideTitle;
  };
}
