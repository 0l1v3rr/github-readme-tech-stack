import { Request, Response } from "express";
import CardBuilder from "../cards/card-builder";
import SvgGenerator from "../svg/svg-generator";
import { parseWidth, validateLine } from "../utils/validator";

export const getCard = async (req: Request, res: Response) => {
  const {
    title,
    lineCount,
    align,
    showBorder,
    borderRadius,
    fontWeight,
    fontSize,
    fontFamily,
    theme,
    gap,
    lineHeight,
    width,
    bg,
    border,
    badge,
    titleColor,
    hideBg,
    hideTitle,
  } = req.query;

  const card = new CardBuilder()
    .title(title?.toString())
    .lineCount(lineCount?.toString())
    .align(align?.toString())
    .border(showBorder?.toString())
    .hideTitle(hideTitle?.toString())
    .borderRadius(borderRadius?.toString())
    .fontWeight(fontWeight?.toString())
    .fontSize(fontSize?.toString())
    .family(fontFamily?.toString())
    .theme(theme?.toString())
    .gap(gap?.toString())
    .lineHeight(lineHeight?.toString())
    .lines((line, addBadge) => {
      // get the line query param based on the `line` argument (example: line1)
      // validate the line
      // iterate through it, then append every badge
      validateLine(req.query[`line${line}`]?.toString() || "").forEach((b) =>
        addBadge(b)
      );
    })
    .bgColor(bg?.toString())
    .borderColor(border?.toString())
    .badgeColor(badge?.toString())
    .titleColor(titleColor?.toString())
    .hideBackground(hideBg?.toString())
    .build();

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(
    await new SvgGenerator(card, parseWidth(width?.toString())).toString()
  );
};
