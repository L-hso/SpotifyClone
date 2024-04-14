import { Main } from "./components/main/Widget";
import { Footer } from "./components/footer/Widget";
import { Sidebar } from "./components/sidebar/Widget";
import { FakeCollection } from "./components/main/mainFakeData";
import { LayoutSizeController } from "./components/layoutSizeController/layoutSizeController";
import { createContext, useState } from "react";

export const layoutSizeContext = createContext();

function App() {
  const [layoutSize, setLayoutSize] = useState(350);

  return (
    <layoutSizeContext.Provider value={{ layoutSize, setLayoutSize }}>
      <Sidebar.Root>
        <Sidebar.Top />
        <Sidebar.Bottom />
      </Sidebar.Root>

      <LayoutSizeController />

      <Main.Root>
        <Main.Header />
        <Main.Recent />
        <Main.CollectionsWrapper>
        {Object.entries(FakeCollection).map(([collectionTitle, fakeData]) => (
          <Main.Collection
            {...{ collectionTitle, fakeData }}
            key={collectionTitle}
          />
        ))}
        </Main.CollectionsWrapper>
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
