import Card from "../cards/card";

export default class SvgGenerator {
  private card: Card;

  public constructor(card: Card) {
    this.card = card;
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
        width="495"
        height="195"
        viewBox="0 0 495 195"
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
          height="99%"
          stroke="${this.card.getTheme().borderColor}"
          width="494"
          fill="${this.card.getTheme().backgroundColor}"
          stroke-opacity="1"
        />

        <g transform="translate(25, 35)">
          <text x="0" y="0" class="header">${this.card.getTitle()}</text>
        </g>

        <style>
          .header {
            font: 600 20px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: ${this.card.getTheme().titleColor};
          }
        </style>
      </svg>`;
  };
}
