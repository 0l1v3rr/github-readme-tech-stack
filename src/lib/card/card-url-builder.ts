import { HEX_COLOR_REGEX, INITIAL_CARD } from "@/const/card";
import { Card, Line } from "@/types";

class CardUrlBuilder {
  private params: URLSearchParams;

  public constructor() {
    this.params = new URLSearchParams();
  }

  public title(title: string) {
    if (title === INITIAL_CARD.title) {
      return this;
    }

    this.params.append("title", title);
    return this;
  }

  public theme(theme: string) {
    if (theme === INITIAL_CARD.theme) {
      return this;
    }

    this.params.append("theme", theme);
    return this;
  }

  public showBorder(showBorder: boolean) {
    if (showBorder === INITIAL_CARD.showBorder) {
      return this;
    }

    this.params.append("showBorder", showBorder ? "true" : "false");
    return this;
  }

  public hideBg(hideBg: boolean) {
    if (hideBg === INITIAL_CARD.hideBg) {
      return this;
    }

    this.params.append("hideBg", hideBg ? "true" : "false");
    return this;
  }

  public hideTitle(hideTitle: boolean) {
    if (hideTitle === INITIAL_CARD.hideTitle) {
      return this;
    }

    this.params.append("hideTitle", hideTitle ? "true" : "false");
    return this;
  }

  public align(align: string) {
    if (align === INITIAL_CARD.align) {
      return this;
    }

    this.params.append("align", align);
    return this;
  }

  public titleAlign(titleAlign: string) {
    if (titleAlign === INITIAL_CARD.titleAlign) {
      return this;
    }

    this.params.append("titleAlign", titleAlign);
    return this;
  }

  public borderRadius(borderRadius: number) {
    if (borderRadius === INITIAL_CARD.borderRadius) {
      return this;
    }

    this.params.append("borderRadius", borderRadius.toString());
    return this;
  }

  public gap(gap: number) {
    if (gap === INITIAL_CARD.gap) {
      return this;
    }

    this.params.append("gap", gap.toString());
    return this;
  }

  public lineHeight(lineHeight: number) {
    if (lineHeight === INITIAL_CARD.lineHeight) {
      return this;
    }

    this.params.append("lineHeight", lineHeight.toString());
    return this;
  }

  public fontSize(fontSize: number) {
    if (fontSize === INITIAL_CARD.fontSize) {
      return this;
    }

    this.params.append("fontSize", fontSize.toString());
    return this;
  }

  public fontWeight(fontWeight: string) {
    if (fontWeight === INITIAL_CARD.fontWeight) {
      return this;
    }

    this.params.append("fontWeight", fontWeight);
    return this;
  }

  public fontFamily(fontFamily: string) {
    if (fontFamily === INITIAL_CARD.fontFamily) {
      return this;
    }

    this.params.append("fontFamily", fontFamily);
    return this;
  }

  public lineCount(lc: number) {
    this.params.append("lineCount", lc.toString());
    return this;
  }

  public width(width: number) {
    if (width === INITIAL_CARD.width) {
      return this;
    }

    this.params.append("width", width.toString());
    return this;
  }

  public backgroundColor(backgroundColor: string | undefined = "") {
    if (HEX_COLOR_REGEX.test(backgroundColor)) {
      this.params.append("bg", backgroundColor);
    }

    return this;
  }

  public badgeColor(badgeColor: string | undefined = "") {
    if (HEX_COLOR_REGEX.test(badgeColor)) {
      this.params.append("badge", badgeColor);
    }

    return this;
  }

  public borderColor(borderColor: string | undefined = "") {
    if (HEX_COLOR_REGEX.test(borderColor)) {
      this.params.append("border", borderColor);
    }

    return this;
  }

  public titleColor(titleColor: string | undefined = "") {
    if (HEX_COLOR_REGEX.test(titleColor)) {
      this.params.append("titleColor", titleColor);
    }

    return this;
  }

  public lines(lines: Line[]) {
    for (const l of lines) {
      // if the line doesn't contain badges
      if (l.badges.length < 1) {
        continue;
      }

      let line = ``;
      for (const b of l.badges) {
        const color = b.color.replace("#", "");
        line += `${b.icon},${b.label},${color};`;
      }

      this.params.append(`line${l.lineNumber}`, line);
    }

    return this;
  }

  public build() {
    return `https://github-readme-tech-stack.vercel.app/api/cards?${this.params.toString()}`;
  }
}

export const generateLink = ({
  title,
  theme,
  align,
  lines,
  showBorder,
  borderRadius,
  fontWeight,
  fontSize,
  fontFamily,
  lineHeight,
  gap,
  hideBg,
  hideTitle,
  titleAlign,
  width,
  backgroundColor,
  badgeColor,
  borderColor,
  titleColor,
}: Card): string => {
  return new CardUrlBuilder()
    .title(title)
    .align(align)
    .titleAlign(titleAlign)
    .borderRadius(borderRadius)
    .fontFamily(fontFamily)
    .fontSize(fontSize)
    .fontWeight(fontWeight)
    .showBorder(showBorder)
    .lineHeight(lineHeight)
    .lineCount(lines.length)
    .theme(theme)
    .gap(gap)
    .width(width)
    .hideBg(hideBg)
    .hideTitle(hideTitle)
    .backgroundColor(backgroundColor)
    .badgeColor(badgeColor)
    .borderColor(borderColor)
    .titleColor(titleColor)
    .lines(lines)
    .build();
};
