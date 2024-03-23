import { Main } from "./components/main/Widget";
import { Sidebar } from "./components/sidebar/Widget";

function App() {
  return (
    <>
      <Sidebar.Root>
        <Sidebar.Top />
        <Sidebar.Bottom />
      </Sidebar.Root>

      <Main.Root>
        teste
      </Main.Root>
    </>
  );
}

export default App;
