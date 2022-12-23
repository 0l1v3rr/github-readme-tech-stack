export const validateHex = (val: string): string => {
  if (val === "auto") {
    return "";
  }

  // starts with #, 3 or 6 characters long, contains only hexadecimal values
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (!hexColorRegex.test(val)) {
    return "The color should be a valid hexadecimal color or the value auto.";
  }

  return "";
};

export const validateIconAndLabel = (
  val: string,
  iorl: "icon" | "label"
): string => {
  if (val.length < 3 || val.length > 32) {
    return `The ${iorl} should be between 2 and 32 characters.`;
  }

  return "";
};

export const validateBorderRadius = (val: string): string => {
  const num = parseInt(val);

  if (val.trim() === "") {
    return "Please provide a border radius!";
  }

  if (!val.split("").every((x) => "0123456789.".includes(x))) {
    return "Please provide a valid number!";
  }

  if (num > 50 || num < 0) {
    return "Please provide a value between 0 and 50";
  }

  return "";
};
