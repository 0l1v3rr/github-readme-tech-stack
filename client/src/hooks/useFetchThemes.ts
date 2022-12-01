import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchThemes = (): string[] => {
  const [themes, setThemes] = useState<string[]>(["github", "github_dark"]);

  useEffect(() => {
    axios
      .get("https://github-readme-tech-stack.vercel.app/api/themes")
      .then((res) => setThemes(res.data));
  }, []);

  return themes;
};
