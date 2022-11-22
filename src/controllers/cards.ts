import { Request, Response } from "express";
import Card from "../cards/card";
import { getThemeByName } from "../cards/themes";
import SvgGenerator from "../svg/svg-generator";
import { validateLine, validateLineCount } from "../utils/validator";

const cardController = (req: Request, res: Response) => {
  // an empty card
  const card = new Card();

  // if the user doesn't specify a title, we use the default one
  const title = req.query.title;
  card.setTitle(title?.toString() || "My Tech Stack");

  // using the getThemeByName() function
  const theme = req.query.theme;
  card.setTheme(getThemeByName(theme?.toString() || ""));

  // if the user doesn't specify a line, we use 1
  const lineCount = req.query.lineCount?.toString() || "1";
  card.setLineCount(validateLineCount(lineCount));

  // run a loop card.getLineCount() times
  for (let i = 1; i <= card.getLineCount(); i++) {
    // get the dynamic query param (line + i)
    const lineValue = req.query[`line${i}`]?.toString() || "";

    [...validateLine(lineValue)].forEach((b) => card.addBadge(i, b));
  }

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(new SvgGenerator(card).toString());
};

export default cardController;
