import { badgeWidth, fetchBadge } from "@/lib/card/badge";
import Card from "@/lib/card/card";
import { formatHexColor } from "@/lib/utils/format";
import { Badge, TextAnchor } from "@/types";

export default class SvgGenerator {
  private width: number;
  private height: number;
  private card: Card;
  private lineHeight: number;

  public constructor(card: Card, width = 495) {
    this.card = card;
    this.width = width;

    // the height of a badge is 28
    this.lineHeight = this.card.getLineHeight() + 28;

    // the base (line == 1) height is 82 + fontSize
    // each additional line increases the height by this.lineHeight
    this.height =
      82 +
      this.card.getFontSize() +
      (card.getLineCount() - 1) * this.lineHeight;

    this.height -= this.card.getHideTitle() ? 25 : 0;
  }

  /**
   * Generates the SVG card from the Card
   * variable passed in the constructor.
   */
  public toString = async (): Promise<string> => {
    // default values: left title align
    let textTranslateX = 25;
    let textXPercent = 0;
    let textAnchor: TextAnchor = "start";

    switch (this.card.getTitleAlign()) {
      case "center":
        textTranslateX = 0;
        textXPercent = 50;
        textAnchor = "middle";
        break;
      case "right":
        textTranslateX = -25;
        textXPercent = 100;
        textAnchor = "end";
        break;
    }

    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="${this.card.getTitle()}"
      >
        <title>${this.card.getTitle()}</title>

        <rect
          x="${this.card.getShowBorder() ? 0.5 : 0}"
          y="${this.card.getShowBorder() ? 0.5 : 0}"
          rx="${this.card.getBorderRadius()}"
          height="${this.height - (this.card.getShowBorder() ? 1 : 0)}"
          stroke="${this.card.getTheme().borderColor}"
          width="${this.width - (this.card.getShowBorder() ? 1 : 0)}"
          fill="${this.card.getTheme().backgroundColor}"
          stroke-opacity="${this.card.getShowBorder() ? 1 : 0}"
        />

        ${
          !this.card.getHideTitle() &&
          `<g transform="translate(${textTranslateX}, ${
            17 + this.card.getFontSize()
          })">
            <text x="${textXPercent}%" y="0" text-anchor="${textAnchor}" class="header">
              ${this.card.getTitle()}
            </text>
          </g>`
        }

        ${await this.generateLines()}

        <style>
          .header {
            font: ${this.card
              .getFontWeight()
              .valueOf()} ${this.card.getFontSize()}px '${this.card.getFontFamily()}', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            fill: ${this.card.getTheme().titleColor};
          }
        </style>
      </svg>`;
  };

  private generateLines = async (): Promise<string> => {
    const promises: Promise<string>[] = [];

    for (const [lineNumber, badge] of this.card.getLinesMap()) {
      promises.push(this.createLine(badge, lineNumber));
    }

    const resolved = await Promise.all(promises);

    return resolved.reduce((res, line) => {
      return (res += line);
    }, "");
  };

  private createLine = async (
    badges: Badge[],
    lineNumber: number
  ): Promise<string> => {
    // the first line is this.lineHeight
    // each additional line increases this by this.lineHeight
    let translateY =
      17 + this.card.getFontSize() + (lineNumber - 1) * this.lineHeight;

    translateY -= this.card.getHideTitle() ? 25 : 0;

    let icons = "";
    let leftPadding = 0;

    for (const badge of badges) {
      const b = await this.createBadge(badge, leftPadding);
      icons += b;
      leftPadding += this.card.getGap() + badgeWidth(b);
    }

    // align: left   ==> x = 25
    // align: center ==> x = width/2 - leftPadding/2 + gap/2
    // align: right  ==> x = width - 25 - leftPadding + gap
    let x = 25;

    switch (this.card.getBadgeAlign()) {
      case "left":
        x = 25;
        break;
      case "center":
        x = this.width / 2 - leftPadding / 2 + this.card.getGap() / 2;
        break;
      case "right":
        x = this.width - 25 - leftPadding + this.card.getGap();
        break;
    }

    return `
      <g transform="translate(${x}, ${translateY})">
        ${icons}
      </g>
    `;
  };

  private createBadge = async (
    badge: Badge,
    leftPadding: number
  ): Promise<string> => {
    const badgeColor: string = formatHexColor(this.card.getTheme().badgeColor);

    const url = `https://img.shields.io/badge/${
      badge.label
    }-${badgeColor}.svg?style=for-the-badge&logo=${
      badge.icon
    }&logoColor=${formatHexColor(badge.color)}&logoWidth=16`;

    const svg = await fetchBadge(url);

    return `
      <g transform="translate(${leftPadding}, 15)">
        ${svg}
      </g>
    `;
  };
}
