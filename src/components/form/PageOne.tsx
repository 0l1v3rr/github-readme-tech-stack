import FormWrapper from "../ui/FormWrapper";
import Link from "../ui/Link";
import P from "../ui/P";

const PageOne = () => {
  return (
    <FormWrapper
      title="Welcome to github-readme-tech-stack!"
      className="items-center"
    >
      <img
        width={420}
        height={127}
        src="https://github-readme-tech-stack.vercel.app/api/cards?title=Tech%20Stack&align=center&titleAlign=center&fontSize=20&lineCount=2&theme=0l1v3rr&line1=laravel,laravel,auto;go,golang,00add8;docker,docker,auto;&line2=react,react,2d79c7;tailwindcss,tailwind,38bdf8;typescript,typescript,2d79c7;&width=420"
        alt="Tech Stack"
      />

      <p className="text-center text-gh-text">
        This website allows you to easily customize and preview your README card
        in live. You can play around with the different settings so you don't
        have to write the query parameters manually.
      </p>

      <P>
        You can find an example card above. It is in my{" "}
        <Link href="https://github.com/0l1v3rr">profile README</Link>, feel free
        to check it out as well.
      </P>
    </FormWrapper>
  );
};

export default PageOne;
