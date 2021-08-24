import "./styles/app.css"

import Header from "./components/Header";
import Chatbox from "./components/Chatbox";
import Playerbar from "components/Playerbar";
import SongsLibrary from "components/SongsLibrary";

function App() {
  return (
    <div className="App">
      <Header />
      <Chatbox />
      <Playerbar />
      <SongsLibrary />
    </div>
  );
}

export default App;
