import { Main } from "./components/main/Widget";
import { Footer } from "./components/footer/Widget";
import { Sidebar } from "./components/sidebar/Widget";
import { LayoutSizeController } from "./components/layoutSizeController/layoutSizeController";
import { createContext, useState } from "react";

export const layoutSizeContext = createContext();
function App() {

  const [layoutSize, setLayoutSize] = useState(350);


  return (
    <layoutSizeContext.Provider value={{layoutSize, setLayoutSize}}>
      <Sidebar.Root>
        <Sidebar.Top />
        <Sidebar.Bottom />
      </Sidebar.Root>

      <LayoutSizeController />

      <Main.Root>
        <Main.Header/>
      </Main.Root>

      <Footer.Root>
        <Footer.Control>
          <Footer.Progress />
        </Footer.Control>
      </Footer.Root>
    </layoutSizeContext.Provider>
  );
}

export default App;
