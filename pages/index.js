import React from "react";

const List = ({ items }) => {
  const [filteredItems, setfilteredItems] = React.useState(items);
  const filterItems = (e) => {
    const searchVal = e.target.value;
    const fullList = [...items];
    const commonItems = fullList.filter((item) => item.startsWith(searchVal));
    setfilteredItems(commonItems);
  };
  return (
    <>
      <input onChange={filterItems} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

// export default List;

const ListContainer = () => (
  <List
    items={[
      "mooncake",
      "pancake",
      "cookie",
      "sunshine",
      "moonshine",
      "bilu",
      "pumpkin",
      "papaya",
    ]}
  />
);

export default ListContainer;
