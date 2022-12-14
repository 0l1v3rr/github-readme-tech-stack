import { Request, Response } from "express";
import Card from "../cards/card";
import { getThemeByName } from "../cards/themes";
import SvgGenerator from "../svg/svg-generator";
import {
  validateAlign,
  validateLine,
  validateLineCount,
} from "../utils/validator";

export const getCard = async (req: Request, res: Response) => {
  const card = new Card();

  const title = req.query.title?.toString() || "My Tech Stack";
  const theme = req.query.theme?.toString() || "";
  const lineCount = req.query.lineCount?.toString() || "1";
  const align = req.query.align?.toString() || "left";
  const showBorder = req.query.showBorder?.toString() || "true";

  card.setTitle(title);
  card.setTheme(getThemeByName(theme));
  card.setLineCount(validateLineCount(lineCount));
  card.setBadgeAlign(validateAlign(align));
  card.setShowBorder(showBorder !== "false");

  // run a loop card.getLineCount() times
  for (let i = 1; i <= card.getLineCount(); i++) {
    // get the dynamic query param (line + i)
    const lineValue = req.query[`line${i}`]?.toString() || "";

    [...validateLine(lineValue)].forEach((b) => card.addBadge(i, b));
  }

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(await new SvgGenerator(card).toString());
};
