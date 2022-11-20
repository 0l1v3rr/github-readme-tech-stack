import { Request, Response } from "express";
import Card from "../cards/card";
import SvgGenerator from "../svg/svg-generator";

const cardController = (req: Request, res: Response) => {
  res.setHeader("Content-Type", "image/svg+xml");

  const card = new Card();
  res.send(new SvgGenerator(card).toString());
};

export default cardController;
