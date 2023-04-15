export interface SelectOption {
  value: string;
  label: string;
}

export interface GithubResponse {
  stargazers_count: number;
  forks_count: number;
  description: string;
}
