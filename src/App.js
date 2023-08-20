import React from "react";
import { List } from "react-virtualized";
import "./styles.css";

const list = new Array(1000).fill().map((_, index) => index);

const rowRenderer = ({
  index, // Index of row
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  key, // Unique key within array of rendered rows
  parent, // Reference to the parent List (instance)
  style // Style object to be applied to row (to position it);
}) => (
  <div key={key} style={style}>
    <div className="element">{list[index]}</div>
  </div>
);

const App = () => (
  <List
    width={300}
    height={300}
    rowCount={list.length}
    rowHeight={25}
    rowRenderer={rowRenderer}
    className="list"
  />
);

export default App;
