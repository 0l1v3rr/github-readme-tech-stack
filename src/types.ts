export type Theme = {
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  badgeColor: string;
};

export type Badge = {
  position: number;
  icon: string;
  label: string;
  color: string;
};

export type Align = "left" | "center" | "right";
export type TextAnchor = "start" | "middle" | "end";

export const enum FontWeight {
  THIN = 200,
  NORMAL = 400,
  SEMIBOLD = 600,
  BOLD = 800,
}

export type SelectOption = {
  value: string;
  label: string;
};

export type GithubResponse = {
  stargazers_count: number;
  forks_count: number;
  description: string;
};

export type Card = {
  title: string;
  theme: string;
  align: string;
  titleAlign: string;
  showBorder: boolean;
  hideBg: boolean;
  borderRadius: number;
  fontWeight: string;
  fontSize: number;
  fontFamily: string;
  gap: number;
  lineHeight: number;
  hideTitle: boolean;
  lines: Line[];
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  badgeColor?: string;
  width: number;
};

export type Line = {
  lineNumber: number;
  badges: Badge[];
};

export type BadgeDataTransfer = {
  badgeWidth: number;
  badge: Badge;
  lineNumber: number;
};
