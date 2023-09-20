import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./route/MainRoutes";

function App() {
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <MainRoutes />
    </div>
  );
}

export default App;
