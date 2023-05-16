import { Card, Line } from "@/types";
import { INITIAL_CARD, HEX_COLOR_REGEX } from "@/const/card";

class CardBuilder {
  private url: string;

  public constructor() {
    this.url = "https://github-readme-tech-stack.vercel.app/api/cards?";
  }

  public title(title: string) {
    if (title === INITIAL_CARD.title) {
      return this;
    }

    this.url += `title=${encodeURI(title)}&`;
    return this;
  }

  public theme(theme: string) {
    if (theme === INITIAL_CARD.theme) {
      return this;
    }

    this.url += `theme=${theme}&`;
    return this;
  }

  public showBorder(showBorder: boolean) {
    if (showBorder === INITIAL_CARD.showBorder) {
      return this;
    }

    this.url += `showBorder=${showBorder}&`;
    return this;
  }

  public hideBg(hideBg: boolean) {
    if (hideBg === INITIAL_CARD.hideBg) {
      return this;
    }

    this.url += `hideBg=${hideBg}&`;
    return this;
  }

  public hideTitle(hideTitle: boolean) {
    if (hideTitle === INITIAL_CARD.hideTitle) {
      return this;
    }

    this.url += `hideTitle=${hideTitle}&`;
    return this;
  }

  public align(align: string) {
    if (align === INITIAL_CARD.align) {
      return this;
    }

    this.url += `align=${align}&`;
    return this;
  }

  public titleAlign(titleAlign: string) {
    if (titleAlign === INITIAL_CARD.titleAlign) {
      return this;
    }

    this.url += `titleAlign=${titleAlign}&`;
    return this;
  }

  public borderRadius(borderRadius: number) {
    if (borderRadius === INITIAL_CARD.borderRadius) {
      return this;
    }

    this.url += `borderRadius=${borderRadius}&`;
    return this;
  }

  public gap(gap: number) {
    if (gap === INITIAL_CARD.gap) {
      return this;
    }

    this.url += `gap=${gap}&`;
    return this;
  }

  public lineHeight(lineHeight: number) {
    if (lineHeight === INITIAL_CARD.lineHeight) {
      return this;
    }

    this.url += `lineHeight=${lineHeight}&`;
    return this;
  }

  public fontSize(fontSize: number) {
    if (fontSize === INITIAL_CARD.fontSize) {
      return this;
    }

    this.url += `fontSize=${fontSize}&`;
    return this;
  }

  public fontWeight(fontWeight: string) {
    if (fontWeight === INITIAL_CARD.fontWeight) {
      return this;
    }

    this.url += `fontWeight=${fontWeight}&`;
    return this;
  }

  public fontFamily(fontFamily: string) {
    if (fontFamily === INITIAL_CARD.fontFamily) {
      return this;
    }

    this.url += `fontFamily=${encodeURI(fontFamily)}&`;
    return this;
  }

  public lineCount(lc: number) {
    this.url += `lineCount=${lc}&`;
    return this;
  }

  public width(width: number) {
    if (width === INITIAL_CARD.width) {
      return this;
    }

    this.url += `width=${width}&`;
    return this;
  }

  public backgroundColor(backgroundColor: string | undefined = "") {
    if (HEX_COLOR_REGEX.test(backgroundColor)) {
      backgroundColor = backgroundColor.replace("#", "%23");
      this.url += `bg=${backgroundColor}&`;
    }

    return this;
  }

  public badgeColor(badgeColor: string | undefined = "") {
    if (HEX_COLOR_REGEX.test(badgeColor)) {
      badgeColor = badgeColor.replace("#", "%23");
      this.url += `badge=${badgeColor}&`;
    }

    return this;
  }

  public borderColor(borderColor: string | undefined = "") {
    if (HEX_COLOR_REGEX.test(borderColor)) {
      borderColor = borderColor.replace("#", "%23");
      this.url += `border=${borderColor}&`;
    }

    return this;
  }

  public titleColor(titleColor: string | undefined = "") {
    if (HEX_COLOR_REGEX.test(titleColor)) {
      titleColor = titleColor.replace("#", "%23");
      this.url += `titleColor=${titleColor}&`;
    }

    return this;
  }

  public lines(lines: Line[]) {
    for (const l of lines) {
      // if the line doesn't contain badges
      if (l.badges.length < 1) {
        continue;
      }

      let line = `line${l.lineNumber}=`;
      for (const b of l.badges) {
        const color = b.color.replace("#", "");
        line += `${encodeURI(b.icon)},${encodeURI(b.label)},${color};`;
      }

      this.url += `${line}&`;
    }

    return this;
  }

  public build() {
    const lastChar = this.url.at(-1);
    if (["?", "&"].includes(lastChar ?? "")) {
      this.url = this.url.slice(0, -1);
    }

    return this.url;
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
  return new CardBuilder()
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
