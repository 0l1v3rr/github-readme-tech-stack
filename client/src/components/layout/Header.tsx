import RepositoryLink from "../ui/RepositoryLink";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <RepositoryLink
        user="0l1v3rr"
        repository="github-readme-tech-stack"
        isPublic={true}
      />

      <div className="border-t border-gh-border pt-2">
        <h1 className="text-xl text-gh-text">Create your tech-stack card</h1>
        <p className="text-[.8rem] text-gh-text-secondary">
          Create your Tech Stack card in a few easy steps using our{" "}
          <span className="font-semibold text-gh-lime">options wizard</span>!
        </p>
      </div>
    </div>
  );
};

export default Header;
