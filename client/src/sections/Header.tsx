import ButtonLink from "../components/buttons/ButtonLink";
import Title from "../components/repo/Title";
import { AiOutlineStar, AiOutlineGithub } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center w-full mt-5">
      <Title repoName="github-readme-tech-stack" username="0l1v3rr" />

      <div className="flex gap-4 items-center justify-center mt-4">
        <ButtonLink
          link="https://github.com/0l1v3rr/github-readme-tech-stack"
          icon={AiOutlineGithub}
          num={undefined}
          text="Source Code"
        />

        <ButtonLink
          link="https://github.com/0l1v3rr/github-readme-tech-stack/network/members"
          icon={BiGitRepoForked}
          num={6}
          text="Fork"
        />

        <ButtonLink
          link="https://github.com/0l1v3rr/github-readme-tech-stack/stargazers"
          icon={AiOutlineStar}
          num={37}
          text="Star"
        />
      </div>
    </header>
  );
};

export default Header;
