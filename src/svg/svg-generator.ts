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
  public toString = (): string => {
    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="My Tech Stack"
      >
        <title>${this.card.getTitle()}</title>

        <rect
          x="0.5"
          y="0.5"
          rx="4.5"
          height="${this.height - 1}"
          stroke="${this.card.getTheme().borderColor}"
          width="${this.width - 1}"
          fill="${this.card.getTheme().backgroundColor}"
          stroke-opacity="1"
        />

        <g transform="translate(25, 35)">
          <text x="0" y="0" class="header">${this.card.getTitle()}</text>
        </g>

        ${this.generateLines()}

        <style>
          .header {
            font: 600 18px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            fill: ${this.card.getTheme().titleColor};
          }
        </style>
      </svg>`;
  };

  private generateLines = (): string => {
    let res: string = "";

    for (const line of this.card.getLinesMap()) {
      res += this.createLine(line[1], line[0]);
    }

    return res;
  };

  private createLine = (badges: Badge[], lineNumber: number): string => {
    // the first line is 35
    // each additional line increases this by 35
    const translateY = 35 + (lineNumber - 1) * 35;
    let line: string = `<g transform="translate(25, ${translateY})">`;

    let leftPadding = 0;

    for (const badge of badges) {
      line += this.createBadge(badge, leftPadding);
      leftPadding += 10 + badgeWidth(badge.label);
    }

    line += "</g>";
    return line;
  };

  private createBadge = (badge: Badge, leftPadding: number): string => {
    const badgeColor: string = formatHexColor(this.card.getTheme().badgeColor);

    const url = `https://img.shields.io/badge/${
      badge.label
    }-${badgeColor}.svg?style=for-the-badge&logo=${
      badge.logoName
    }&logoColor=${formatHexColor(badge.logoColor)}&logoWidth=16`;

    let r: string = "";
    fetchBadge(url).then((res) => console.log(res));
    console.log(r);

    return `
      <image
        x="0"
        y="15"
        transform="translate(${leftPadding}, 0)"
        href="${url.replace(/[&]/g, "&amp;")}"
      />
    `;
  };
}
