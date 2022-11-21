/**
 * Validates the line.
 * If the line is not valid, it returns 1.
 * The line is invalid when it's not a number or less than one.
 *
 * @param {number} lineCount The number of lines.
 * @returns {number} A valid lineCount.
 */
export const validateLineCount = (lineCount: string): number => {
  const lineNum = parseInt(lineCount);

  // it's not a number
  if (isNaN(lineNum)) {
    return 1;
  }

  // it's less than one
  return lineNum < 1 ? 1 : lineNum;
};
