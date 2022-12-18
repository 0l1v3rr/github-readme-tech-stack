import { themes } from "../cards/themes";
import { Request, Response } from "express";

export const getThemes = (_: Request, res: Response) => {
  res.send([...themes.keys()].sort());
};
