import { z } from "zod";
import { isHexColor } from "../utils/validator";
import Card from "./card";
import { getThemeByName } from "./themes";
import { Badge } from "./types";

const title = z.string();
const lineCount = z.number().min(1).catch(1);
const align = z.enum(["left", "center", "right"]).catch("left");
const showBorder = z.boolean().catch(true);
const borderRadius = z.number().min(0).max(50).catch(4.5);
const fontWeight = z
  .enum(["thin", "normal", "semibold", "bold"])
  .catch("semibold");
const fontSize = z.number().min(15).max(30).catch(18);
const fontFamily = z.string().min(3).max(16).catch("Segoe UI");
const gap = z.number().min(0).max(30).catch(10);
const lineHeight = z.number().min(0).max(30).catch(7);

// const numberThatAcceptsString = z.preprocess((input) => {
//   const processed = z
//     .string()
//     .regex(/^\d+$/)
//     .transform(Number)
//     .safeParse(input);
//   return processed.success ? processed.data : input;
// }, z.number().min(15).max(30).catch(18));

export default class CardBuilder {
  private card: Card;

  public constructor() {
    this.card = new Card();
  }

  private reset(): void {
    this.card = new Card();
  }

  public build(): Card {
    const result = this.card;
    this.reset();
    return result;
  }

  public title(_title = "My Tech Stack"): CardBuilder {
    this.card.setTitle(title.parse(_title));
    return this;
  }

  public lineCount(_lineCount = "1"): CardBuilder {
    this.card.setLineCount(lineCount.parse(Number(_lineCount)));
    return this;
  }

  public align(_align = "left"): CardBuilder {
    this.card.setBadgeAlign(align.parse(_align));
    return this;
  }

  public border(_showBorder = "true"): CardBuilder {
    this.card.setShowBorder(
      showBorder.parse(_showBorder === "false" ? false : true)
    );
    return this;
  }

  public hideTitle(_hideTitle = "false"): CardBuilder {
    this.card.setHideTitle(_hideTitle === "true");
    return this;
  }

  public borderRadius(_borderRadius = "4.5"): CardBuilder {
    this.card.setBorderRadius(borderRadius.parse(Number(_borderRadius)));
    return this;
  }

  public fontWeight(_fontWeight = "semibold"): CardBuilder {
    this.card.setFontWeight(fontWeight.parse(_fontWeight));
    return this;
  }

  public fontSize(_fontSize = "18"): CardBuilder {
    this.card.setFontSize(fontSize.parse(Number(_fontSize)));
    return this;
  }

  public theme(_theme = "github"): CardBuilder {
    this.card.setTheme(getThemeByName(_theme));
    return this;
  }

  public family(_fontFamily = "Segoe UI"): CardBuilder {
    this.card.setFontFamily(fontFamily.parse(_fontFamily));
    return this;
  }

  public gap(_gap = "10"): CardBuilder {
    this.card.setGap(gap.parse(Number(_gap)));
    return this;
  }

  public lineHeight(_lh = "7"): CardBuilder {
    this.card.setLineHeight(lineHeight.parse(Number(_lh)));
    return this;
  }

  public bgColor(bgColor = ""): CardBuilder {
    if (isHexColor(bgColor)) {
      this.card.setTheme({
        ...this.card.getTheme(),
        backgroundColor: bgColor,
      });
    }

    return this;
  }

  public borderColor(border = ""): CardBuilder {
    if (isHexColor(border)) {
      this.card.setTheme({
        ...this.card.getTheme(),
        borderColor: border,
      });
    }

    return this;
  }

  public badgeColor(badge = ""): CardBuilder {
    if (isHexColor(badge)) {
      this.card.setTheme({
        ...this.card.getTheme(),
        badgeColor: badge,
      });
    }

    return this;
  }

  public titleColor(title = ""): CardBuilder {
    if (isHexColor(title)) {
      this.card.setTheme({
        ...this.card.getTheme(),
        titleColor: title,
      });
    }

    return this;
  }

  public hideBackground(hb = "false"): CardBuilder {
    if (hb.toString() === "true") {
      this.card.setTheme({
        ...this.card.getTheme(),
        backgroundColor: "#00000000",
      });
    }

    return this;
  }

  public lines(
    cb: (line: number, addBadge: (b: Badge) => void) => void
  ): CardBuilder {
    // for loop from 1 to the line count
    // each iteration calls the callback function
    for (let i = 1; i <= this.card.getLineCount(); i++) {
      cb(i, (b) => this.card.addBadge(i, b));
    }

    return this;
  }
}
