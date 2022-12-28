import { describe, expect, it } from "vitest";
import { parseWidth, isHexColor } from "../src/utils/validator";

describe("Width parser", () => {
  it("should return 495 because the number is not valid", () => {
    expect(parseWidth("hi")).toEqual(495);
  });

  it("should return 495", () => {
    expect(parseWidth("495")).toEqual(495);
  });

  it("should return 495", () => {
    expect(parseWidth()).toEqual(495);
  });

  it("should return 123", () => {
    expect(parseWidth("123")).toEqual(123);
  });

  it("should return 643", () => {
    expect(parseWidth("643")).toEqual(643);
  });
});

describe("Hex color validator", () => {
  it("should return true", () => {
    expect(isHexColor("#fff")).toEqual(true);
  });

  it("should return true", () => {
    expect(isHexColor("#fffaaa")).toEqual(true);
  });

  it("should return true", () => {
    expect(isHexColor("#000fff")).toEqual(true);
  });

  it("should return false", () => {
    expect(isHexColor("#ffff")).toEqual(false);
  });

  it("should return false", () => {
    expect(isHexColor("#fffff")).toEqual(false);
  });

  it("should return false", () => {
    expect(isHexColor("ffffff")).toEqual(false);
  });
});
