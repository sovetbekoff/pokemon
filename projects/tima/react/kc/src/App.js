import MainRoutes from "./MainRoutes";
import "./App.css";
import TopicContextProvider from "./context/TopicContext";

function App() {
  return (
    <div className="App">
      <TopicContextProvider>
        <MainRoutes />
      </TopicContextProvider>
    </div>
  );
}

export default App;
