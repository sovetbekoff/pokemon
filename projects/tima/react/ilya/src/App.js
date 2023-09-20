import "./App.css";
import Button from "./component/ui/Button/Button";

function App() {
  function test() {
    console.log("ik");
  }
  return (
    <div className="App">
      <Button onClick={test} color="red" type="dc" />
    </div>
  );
}

export default App;
