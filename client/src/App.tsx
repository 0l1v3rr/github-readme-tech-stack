import Header from "./sections/Header";
import Options from "./sections/Options";

const App = () => {
  return (
    <div className="bg-gh-bg w-screen min-h-screen overflow-x-hidden">
      <Header />

      <div className="flex mx-48 mt-6">
        <Options />
      </div>
    </div>
  );
};

export default App;
