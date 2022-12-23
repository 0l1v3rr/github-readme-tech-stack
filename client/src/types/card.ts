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
  borderRadius: string;
  fontWeight: string;
  fontSize: string;
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
    title: "My Tech Stack",
  };
};
