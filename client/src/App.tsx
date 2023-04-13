import Button from "./components/ui/Button";
import { BiGitRepoForked } from "react-icons/bi";
import Input from "./components/ui/Input";
import Select from "./components/ui/Select";

const App = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-2 bg-gh-bg p-4">
      <Button icon={<BiGitRepoForked />} label="Previous" variant="success" />

      <Button
        icon={<BiGitRepoForked className="text-gh-text-secondary" />}
        label="GitHub"
        variant="secondary"
        badge="42"
      />

      <Button label="Reset" variant="danger" />

      <Input variant="primary" placeholder="Hello, I am a placeholder!" />
      <Input variant="secondary" />
      <Input variant="danger" />

      <Select
        selected={{
          label: "github",
          value: "github",
        }}
        options={[
          {
            label: "github",
            value: "github",
          },
          {
            label: "github_dark",
            value: "github_dark",
          },
          {
            label: "tokyonight",
            value: "tokyonight",
          },
        ]}
        select={(opt) => {
          console.log(opt);
        }}
        label="Theme"
        filter={true}
      />
    </div>
  );
};

export default App;
