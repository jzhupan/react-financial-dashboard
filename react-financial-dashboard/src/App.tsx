import { useState } from "react";

import ListGroup from "./components/ListGroup";
import "./App.css";

const App = () => {
  let items = ["New York", "San Francisco", "Paris", "Tokyo", "London"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={() => console.log(items)}
      ></ListGroup>
    </div>
  );
};

export default App;
