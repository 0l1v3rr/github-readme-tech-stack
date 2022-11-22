import { Request, Response } from "express";
import Card from "../cards/card";
import { getThemeByName } from "../cards/themes";
import SvgGenerator from "../svg/svg-generator";
import { validateLineCount } from "../utils/validator";

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

  // card.addBadge(1, {
  //   label: "React",
  //   logoColor: "#61DAFB",
  //   logoName: "react",
  // });

  // card.addBadge(1, {
  //   label: "Tailwind",
  //   logoColor: "#61DAFB",
  //   logoName: "tailwindcss",
  // });

  // card.addBadge(2, {
  //   label: "Spring",
  //   logoColor: "#61DAFB",
  //   logoName: "spring",
  // });

  // card.addBadge(2, {
  //   label: "Express",
  //   logoColor: "#61DAFB",
  //   logoName: "express",
  // });

  // card.addBadge(3, {
  //   label: "Go",
  //   logoColor: "#61DAFB",
  //   logoName: "go",
  // });

  // card.addBadge(3, {
  //   label: "TypeScript",
  //   logoColor: "#61DAFB",
  //   logoName: "typescript",
  // });

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(new SvgGenerator(card).toString());
};

export default cardController;
