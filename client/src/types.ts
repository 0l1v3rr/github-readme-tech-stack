export interface SelectOption {
  value: string;
  label: string;
}

export interface GithubResponse {
  stargazers_count: number;
  forks_count: number;
  description: string;
}

export interface Card {
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
}

export interface Line {
  lineNumber: number;
  badges: Badge[];
}

export interface Badge {
  position: number;
  icon: string;
  label: string;
  color: string;
}
