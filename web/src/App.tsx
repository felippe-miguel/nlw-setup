import './styles/global.css';

import { Habit } from "./components/Habit";

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={17}/>
      <Habit completed={23}/>
    </div>
  );
}

export default App;
