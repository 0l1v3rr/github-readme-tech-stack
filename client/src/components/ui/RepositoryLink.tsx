import { useState, useEffect } from "react";
import Button from "./Button";
import { BiGitRepoForked } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { GithubResponse } from "../../types";
import axios from "axios";

type Props = {
  user: string;
  repository: string;
  isPublic: boolean;
};

const RepositoryLink = ({ user, repository, isPublic }: Props) => {
  const [githubStats, setGithubStats] = useState<GithubResponse>({
    forks_count: 9,
    stargazers_count: 12,
    description: "This is a description",
  });

  useEffect(() => {
    axios
      .get<GithubResponse>(`https://api.github.com/repos/${user}/${repository}`)
      .then((res) => setGithubStats(res.data));
  }, []);

  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <div className="flex items-center gap-1 text-xl">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="mr-1 mt-0.5 fill-gh-text-secondary"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>

          <a
            href={`https://github.com/${user}`}
            target="_blank"
            rel="noreferrer"
            className="text-gh-blue hover:underline"
          >
            {user}
          </a>
          <span className="text-gh-text-secondary">/</span>
          <a
            href={`https://github.com/${user}/${repository}`}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gh-blue hover:underline"
          >
            {repository}
          </a>

          <div
            className="select-none rounded-full border border-gh-border 
              px-2 py-1 text-[.8rem] leading-none text-gh-border-active"
          >
            {isPublic ? "Public" : "Private"}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            label="Fork"
            badge={githubStats.forks_count}
            variant="secondary"
            size="small"
            icon={<BiGitRepoForked className="text-gh-text-secondary" />}
          />
          <Button
            label="Starred"
            badge={githubStats.stargazers_count}
            variant="secondary"
            size="small"
            icon={<FaStar className="text-gh-yellow" />}
          />
        </div>
      </div>

      <div className="mt-2 text-justify text-sm text-gh-text-secondary md:mt-0">
        {githubStats.description}
      </div>
    </div>
  );
};

export default RepositoryLink;
