import { Sidebar } from "./components/sidebar/Widget";

function App() {
  return (
    <>
      <Sidebar.Root>
        <Sidebar.Top />
        <Sidebar.Bottom />
      </Sidebar.Root>
    </>
  );
}

export default App;
