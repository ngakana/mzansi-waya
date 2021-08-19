import "./styles/app.css"

import Header from "./components/Header";
import Chatbox from "./components/Chatbox";
import Playerbar from "components/Playerbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Chatbox />
      <Playerbar />
    </div>
  );
}

export default App;
