import TeamList from "./components/TeamList";
import "./App.css";

function App() {
  const teams = ["Man United", "Real Madrid", "Bayern Munich", "AC Milan"];

  return (
    <>
      <TeamList teams={teams} title="2024/25 Champions in Top leagues"/>
    </>
  );
}

export default App;
