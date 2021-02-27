import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    query: this.props.query,
  };

  render() {
    return (
      <div>
        <span>Search</span>
        <br />
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={(event) => this.props.searchProducts(event)}
        />
        <br />
        <input
          type="checkbox"
          id="onStock"
          name="onStock"
          value="onStock"
          onChange={(event) => this.props.onStock(event)}
        />
        <label>Only show products on stock</label>
      </div>
    );
  }
}
