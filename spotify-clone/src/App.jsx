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
        conteudo
      </Main.Root>

      <Player.Root>
        player
      </Player.Root>
    </>
  );
}

export default App;
