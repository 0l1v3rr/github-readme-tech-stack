import { describe, expect, it } from "vitest";
import { themes, getThemeByName } from "../src/cards/themes";

describe("Themes", () => {
  it("should return the darcula theme", () => {
    expect(getThemeByName("darcula")).toEqual(themes.get("darcula"));
  });

  it("should return the github_dark theme", () => {
    expect(getThemeByName("github_dark")).toEqual(themes.get("github_dark"));
  });

  it("should return the material theme", () => {
    expect(getThemeByName("material")).toEqual(themes.get("material"));
  });

  it("should return the github theme (since it's the default)", () => {
    expect(getThemeByName("themeWithThisNameDoesNotExist")).toEqual(
      themes.get("github")
    );
  });
});
