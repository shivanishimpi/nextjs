import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredItems: this.props.items,
    };
    this.filterItems = this.filterItems.bind(this);
  }
  filterItems(e) {
    const searchVal = e.target.value;
    const fullList = [...this.props.items];
    const commonItems = fullList.filter((item) => item.startsWith(searchVal));
    this.setState({
      filteredItems: commonItems,
    });
  }
  render() {
    return (
      <>
        <input onChange={this.filterItems} />
        <ul>
          {this.state.filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

// export default List;

const ListContainer = () => <List items={["Mooncake", "Strawberry"]} />;

export default ListContainer;
