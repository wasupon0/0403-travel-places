import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cardList = data.map((i) => (
    <div className="card--list">
      <Card key={i.id} {...i} />
    </div>
  ));

  return (
    <>
      <Navbar />
      {cardList}
    </>
  );
}

export default App;
