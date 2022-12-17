import Card from "../cards/card";
import { Badge } from "../cards/types";
import { badgeWidth } from "../utils/badge-width";
import { fetchBadge } from "../utils/fetch-badge";
import { formatHexColor } from "../utils/hex-color";

export default class SvgGenerator {
  private width: number;
  private height: number;
  private card: Card;

  public constructor(card: Card) {
    this.card = card;
    this.width = 495;

    // the base (line == 1) height is 100
    // each additional line increases the height by 35
    this.height = 100 + (card.getLineCount() - 1) * 35;
  }

  /**
   * Generates the SVG card from the Card
   * variable passed in the constructor.
   *
   * @returns {string} The generated raw SVG.
   */
  public toString = async (): Promise<string> => {
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

        <g transform="translate(25, 35)">
          <text x="0" y="0" class="header">${this.card.getTitle()}</text>
        </g>

        ${await this.generateLines()}

        <style>
          .header {
            font: ${this.card
              .getFontWeight()
              .valueOf()} ${this.card.getFontSize()}px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            fill: ${this.card.getTheme().titleColor};
          }
        </style>
      </svg>`;
  };

  private generateLines = async (): Promise<string> => {
    let res = "";

    for (const line of this.card.getLinesMap()) {
      res += await this.createLine(line[1], line[0]);
    }

    return res;
  };

  private createLine = async (
    badges: Badge[],
    lineNumber: number
  ): Promise<string> => {
    // the first line is 35
    // each additional line increases this by 35
    const translateY = 35 + (lineNumber - 1) * 35;

    let icons = "";
    let leftPadding = 0;

    for (const badge of badges) {
      icons += await this.createBadge(badge, leftPadding);
      leftPadding += 10 + badgeWidth(badge.label);
    }

    // align: left   ==> x = 25
    // align: center ==> x = 495/2 - leftPadding/2
    // align: right ==> x = 495 - 25 - leftPadding
    let x = 25;

    switch (this.card.getBadgeAlign()) {
      case "left":
        x = 25;
        break;
      case "center":
        x = 495 / 2 - leftPadding / 2;
        break;
      case "right":
        x = 495 - 25 - leftPadding;
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
      badge.logoName
    }&logoColor=${formatHexColor(badge.logoColor)}&logoWidth=16`;

    const svg = await fetchBadge(url);

    // return `
    //   <image
    //     x="0"
    //     y="15"
    //     transform="translate(${leftPadding}, 0)"
    //     href="${url.replace(/[&]/g, "&amp;")}"
    //   />
    // `;

    return `
      <g transform="translate(${leftPadding}, 15)">
        ${svg}
      </g>
    `;
  };
}
