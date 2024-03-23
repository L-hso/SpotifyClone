import { Main } from "./components/main/Widget";
import { Player } from "./components/playerControl/Widget";
import { Sidebar } from "./components/sidebar/Widget";

function App() {
  return (
    <>
      <Sidebar.Root>
        <Sidebar.Top />
        <Sidebar.Bottom />
      </Sidebar.Root>

      <Main.Root>

      </Main.Root>

      <Player.Root>

      </Player.Root>
    </>
  );
}

export default App;
