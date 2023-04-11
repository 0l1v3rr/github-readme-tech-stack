import Button from "./components/ui/Button";
import { BiGitRepoForked } from "react-icons/bi";
import Input from "./components/ui/Input";

const App = () => {
  return (
    <div className="p-4 flex flex-col gap-2 bg-gh-bg w-full min-h-screen">
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
    </div>
  );
};

export default App;
