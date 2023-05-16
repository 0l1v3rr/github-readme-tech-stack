import { themes } from "@/const/themes";
import { NextResponse } from "next/server";

export const GET = (req: Request) => {
  const name = req.url.slice(req.url.lastIndexOf("/") + 1);

  const theme = themes.get(name);

  if (!theme) {
    return NextResponse.json(
      { message: "Theme with this name doesn't exist." },
      { status: 404 }
    );
  }

  return NextResponse.json(theme);
};
