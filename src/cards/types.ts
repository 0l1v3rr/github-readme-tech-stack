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

export const enum FontWeight {
  THIN = 200,
  NORMAL = 400,
  SEMIBOLD = 600,
  BOLD = 800,
}
