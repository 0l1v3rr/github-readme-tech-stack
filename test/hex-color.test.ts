import { describe, expect, it } from "vitest";
import { formatHexColor } from "../src/utils/hex-color";

describe("Hexadecimal Colors", () => {
  it("should replace the # with %23", () => {
    expect(formatHexColor("#fff")).toEqual("%23fff");
  });

  it("should be the same", () => {
    expect(formatHexColor("%23fff")).toEqual("%23fff");
  });

  it("should add %23 to the start", () => {
    expect(formatHexColor("fff")).toEqual("%23fff");
  });
});
