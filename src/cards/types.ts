export interface Theme {
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  badgeColor: string;
}

export interface Badge {
  logoName: string;
  label: string;
  logoColor: string;
}

export type BadgeAlign = "left" | "center" | "right";
