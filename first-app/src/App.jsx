import { useState } from "react";
import Card from "./components/Card";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [color, SetColor] = useState(0);
  const[first,setFirst] = useState(true);
  useEffect(() => {
    alert("count was changed")
    SetColor(color + 1)
  }, [count])
  
  return (
    <>
      <Navbar color={"Navy"+"Blue"+color} />

      <div className="cards">
        <Card title="card1" description ="card 1 desc"/>
        <Card title="card2" description ="card 2 desc"/>
        <Card title="card3" description ="card 3 desc"/>
        <Card title="card4" description ="card 4 desc"/>
      </div>
      <Footer />
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
  

    </>
  );
}

export default App;
