import { describe, expect, it } from "vitest";
import { badgeWidth } from "../src/utils/badge-width";

describe("Badge Width", () => {
  it("should equal to 88", () => {
    expect(badgeWidth("react")).toEqual(88);
  });

  it("should equal to 138.4", () => {
    expect(badgeWidth("tailwindcss")).toEqual(138.4);
  });

  it("should equal to 71.2", () => {
    expect(badgeWidth("zod")).toEqual(71.2);
  });
});
