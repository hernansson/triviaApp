import "./App.css";
import TriviaGame from "./Componentes/TriviaGame";
import { TriviaContextProvider } from "./context/triviaContext";

function App() {
  return (
    <div className="App">
      <TriviaContextProvider>
        <TriviaGame />
      </TriviaContextProvider>
    </div>
  );
}

export default App;
