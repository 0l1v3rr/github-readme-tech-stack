import { themes } from "@/const/themes";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json([...themes.keys()].sort());
};
