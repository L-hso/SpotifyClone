import { Main } from "./components/main/Widget";
import { Footer } from "./components/footer/Widget";
import { Sidebar } from "./components/sidebar/Widget";
import { LayoutSizeController } from "./components/layoutSizeController/layoutSizeController";

function App() {
  return (
    <>
      <Sidebar.Root>
        {/* <Sidebar.Top /> */}
        <Sidebar.Bottom />
      </Sidebar.Root>
      <LayoutSizeController/>
      <Main.Root></Main.Root>

      <Footer.Root>
        <Footer.Control>
          <Footer.Progress />
        </Footer.Control>
      </Footer.Root>
    </>
  );
}

export default App;
