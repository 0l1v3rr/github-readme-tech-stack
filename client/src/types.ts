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
  borderRadius: string;
  fontWeight: string;
  fontSize: number;
  fontFamily: string;
  gap: string;
  lineHeight: string;
  hideTitle: boolean;
  lines: Line[];
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  badgeColor?: string;
}

export interface Line {
  lineNumber: string;
  badges: Badge[];
}

export interface Badge {
  iconName: string;
  label: string;
  color: string;
}
