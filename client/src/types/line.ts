export interface Line {
  lineNumber: string;
  badges: Badge[];
}

export interface Badge {
  iconName: string;
  label: string;
  color: string;
}
