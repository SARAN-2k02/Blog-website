import "./App.css";

import Navbar from "./Navbar";
import Content from "./content";

function App() {
  const data2 = [
    {
      title: "blog post 1",
      author: "Mack",
    },
    {
      title: "blog post 2",
      author: "Michael",
    },
    {
      title: "blog post 3",
      author: "Bedi singh",
    },

    {
      title: "blog post 4",
      author: "bheem",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Content data={data2} age="20" />
      </header>
    </div>
  );
}

export default App;
