import { Request, Response } from "express";

const cardController = (req: Request, res: Response) => {
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg width="400" height="180">
      <g>
        <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
          style="fill:red;stroke: black;stroke-width:5;opacity:0.5"></rect>
      </g>
    </svg>`);
};

export default cardController;
