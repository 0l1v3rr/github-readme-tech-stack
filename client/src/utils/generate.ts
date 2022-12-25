import { Card, newCard } from "../types/card";

class UrlBuilder {
  private url: string;
  private defaultCard: Card;

  public constructor() {
    this.url = "https://github-readme-tech-stack.vercel.app/api/cards?";
    this.defaultCard = newCard();
  }

  public title(title: string): UrlBuilder {
    if (title === this.defaultCard.title) {
      return this;
    }

    this.url += `title=${encodeURI(title)}&`;
    return this;
  }

  public theme(theme: string): UrlBuilder {
    if (theme === this.defaultCard.theme) {
      return this;
    }

    this.url += `theme=${theme}&`;
    return this;
  }

  public showBorder(showBorder: boolean): UrlBuilder {
    if (showBorder === this.defaultCard.showBorder) {
      return this;
    }

    this.url += `showBorder=${showBorder}&`;
    return this;
  }

  public align(align: string): UrlBuilder {
    if (align === this.defaultCard.align) {
      return this;
    }

    this.url += `align=${align}&`;
    return this;
  }

  public borderRadius(borderRadius: string): UrlBuilder {
    if (borderRadius === this.defaultCard.borderRadius) {
      return this;
    }

    this.url += `borderRadius=${borderRadius}&`;
    return this;
  }

  public fontSize(fontSize: string): UrlBuilder {
    if (fontSize === this.defaultCard.fontSize) {
      return this;
    }

    this.url += `fontSize=${fontSize}&`;
    return this;
  }

  public fontWeight(fontWeight: string): UrlBuilder {
    if (fontWeight === this.defaultCard.fontWeight) {
      return this;
    }

    this.url += `fontWeight=${fontWeight}&`;
    return this;
  }

  public fontFamily(fontFamily: string): UrlBuilder {
    if (fontFamily === this.defaultCard.fontFamily) {
      return this;
    }

    this.url += `fontFamily=${encodeURI(fontFamily)}&`;
    return this;
  }

  public build(): string {
    const lastChar = this.url.at(-1);
    if (lastChar === "?" || lastChar === "&") {
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
}: Card): string => {
  let res = new UrlBuilder()
    .title(title)
    .align(align)
    .borderRadius(borderRadius)
    .fontFamily(fontFamily)
    .fontSize(fontSize)
    .fontWeight(fontWeight)
    .showBorder(showBorder)
    .theme(theme)
    .build();

  for (const l of lines) {
    // if the line doesn't contain badges
    if (l.badges.length < 1) {
      continue;
    }

    let line = `&line${l.lineNumber}=`;
    for (const b of l.badges) {
      const color = b.color.replace("#", "");
      line += `${b.iconName},${b.label},${color};`;
    }

    res += line;
  }

  return res;
};
