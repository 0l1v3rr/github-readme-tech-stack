import { themes } from "../cards/themes";
import { Request, Response } from "express";

export const getThemes = (_: Request, res: Response) => {
  res.send([...themes.keys()].sort());
};

export const getTheme = (req: Request, res: Response) => {
  const themeName = req.params.name;

  const theme = themes.get(themeName);

  if (!theme) {
    res.status(404).send({ message: "Theme with this name doesn't exist." });
    return;
  }

  res.send(theme);
};
