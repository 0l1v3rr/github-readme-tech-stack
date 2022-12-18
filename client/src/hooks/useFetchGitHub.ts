import { useEffect, useState } from "react";
import axios from "axios";
import { RepositoryData } from "../types/github";

export const useFetchGitHub = (): RepositoryData => {
  const [data, setData] = useState<RepositoryData>({
    forks: "0",
    stargazers: "0",
  });

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/0l1v3rr/github-readme-tech-stack")
      .then((res) => {
        const rd: any = res.data;
        setData({
          stargazers: rd.stargazers_count,
          forks: rd.forks_count,
        });
      });
  }, []);

  return data;
};
