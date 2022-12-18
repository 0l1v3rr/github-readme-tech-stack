import { Request, Response } from "express";
import CardBuilder from "../cards/card-builder";
import SvgGenerator from "../svg/svg-generator";
import { validateLine } from "../utils/validator";

export const getCard = async (req: Request, res: Response) => {
  const {
    title,
    lineCount,
    align,
    showBorder,
    borderRadius,
    fontWeight,
    fontSize,
    theme,
  } = req.query;

  const card = new CardBuilder()
    .title(title?.toString())
    .lineCount(lineCount?.toString())
    .align(align?.toString())
    .border(showBorder?.toString())
    .borderRadius(borderRadius?.toString())
    .fontWeight(fontWeight?.toString())
    .fontSize(fontSize?.toString())
    .theme(theme?.toString())
    .lines((line, addBadge) => {
      // get the line query param based on the `line` argument (example: line1)
      // validate the line
      // iterate through it, then append every badge
      validateLine(req.query[`line${line}`]?.toString() || "").forEach((b) =>
        addBadge(b)
      );
    })
    .build();

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(await new SvgGenerator(card).toString());
};
