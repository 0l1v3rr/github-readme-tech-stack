import RepositoryLink from "@/components/ui/RepositoryLink";

const Header = () => {
  return (
    <header className="flex flex-col gap-3">
      <RepositoryLink user="0l1v3rr" repository="github-readme-tech-stack" />

      <article className="border-t border-gh-border pt-2">
        <h1 className="text-xl text-gh-text">Create your tech-stack card</h1>
        <p className="text-[.8rem] text-gh-text-secondary">
          Create your Tech Stack card in a{" "}
          <span className="font-semibold text-gh-lime">few easy steps</span>!
        </p>
      </article>
    </header>
  );
};

export default Header;
