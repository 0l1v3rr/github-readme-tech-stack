export interface Line {
  lineNumber: string;
  badges: Badge[];
}

export interface Badge {
  iconName: string;
  label: string;
  color: string;
}

// interface Property {
//   defaultValue: string;
//   value: string;
//   changed: boolean;
// }

export interface Card {
  title: string;
  theme: string;
  align: string;
  showBorder: boolean;
  hideBg: boolean;
  borderRadius: string;
  fontWeight: string;
  fontSize: string;
  fontFamily: string;
  gap: string;
  lineHeight: string;
  lines: Line[];
}

export const newCard = (): Card => {
  return {
    align: "left",
    borderRadius: "4.5",
    fontSize: "18",
    fontWeight: "semibold",
    lines: [{ badges: [], lineNumber: "1" }],
    showBorder: true,
    theme: "github",
    fontFamily: "Segoe UI",
    title: "My Tech Stack",
    lineHeight: "7",
    gap: "10",
    hideBg: false,
  };
};
