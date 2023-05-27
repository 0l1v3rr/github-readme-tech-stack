import CardBuilder from "@/lib/card/card-builder";
import SvgGenerator from "@/lib/card/svg-generator";
import { parseWidth, validateLine } from "@/lib/utils/validator";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const params = new URL(req.url).searchParams;

  const title = params.get("title");
  const lineCount = params.get("lineCount");
  const align = params.get("align");
  const showBorder = params.get("showBorder");
  const borderRadius = params.get("borderRadius");
  const fontWeight = params.get("fontWeight");
  const fontSize = params.get("fontSize");
  const fontFamily = params.get("fontFamily");
  const theme = params.get("theme");
  const gap = params.get("gap");
  const lineHeight = params.get("lineHeight");
  const width = params.get("width");
  const bg = params.get("bg");
  const border = params.get("border");
  const badge = params.get("badge");
  const titleColor = params.get("titleColor");
  const hideBg = params.get("hideBg");
  const hideTitle = params.get("hideTitle");
  const titleAlign = params.get("titleAlign");

  const card = new CardBuilder()
    .title(title?.toString())
    .lineCount(lineCount?.toString())
    .align(align?.toString())
    .titleAlign(titleAlign?.toString())
    .border(showBorder?.toString())
    .hideTitle(hideTitle?.toString())
    .borderRadius(borderRadius?.toString())
    .fontWeight(fontWeight?.toString())
    .fontSize(fontSize?.toString())
    .family(fontFamily?.toString())
    .theme(theme?.toString())
    .gap(gap?.toString())
    .lineHeight(lineHeight?.toString())
    .lines((line, addBadge) => {
      const lineParam = params.get(`line${line}`);
      if (!lineParam) return;

      validateLine(lineParam).forEach((b) => addBadge(b));
    })
    .bgColor(bg?.toString())
    .borderColor(border?.toString())
    .badgeColor(badge?.toString())
    .titleColor(titleColor?.toString())
    .hideBackground(hideBg?.toString())
    .build();

  return new NextResponse(
    await new SvgGenerator(card, parseWidth(width ?? "495")).toString(),
    {
      headers: { "Content-Type": "image/svg+xml" },
    }
  );
};
