/* eslint-disable no-unused-vars */
import { useState } from 'react';
import  Header  from './components/header';
import './App.css';
// import AgentList from "./components/agentlist";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/*<AgentList />*/}

  <Header />

    </>
  );
}
export default App;
