import React from "react";
import Accordion from "./componnents/Accordion";
import Search from "./componnents/Search";

const items = [
  {
    title: "1. What is React?",
    content: "React is front end javascript framework",
  },
  {
    title: "2. Why use React?",
    content: "React is favorite JS library among enginners",
  },
  {
    title: "2. How do you use React?",
    content: "You use React by creating componnnent",
  },
];
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Accordion items={items} /> */}
        <Search />
      </div>
    );
  }
}

export default App;
