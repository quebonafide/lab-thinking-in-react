import React, { Component } from 'react';
import SearchBar from './SeachBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    data: this.props.products,
    query: '',
  };

  handleSearchProducts = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    console.log(searchQuery);
    if (searchQuery !== '') {
      const filterdProducts = this.props.products.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery);
      });
      this.setState({
        data: filterdProducts,
        query: searchQuery,
      });
    } else {
      this.setState({
        data: this.props.products,
        query: '',
      });
    }
  };

  filterOnStock = (event) => {
    if (event.target.checked) {
      const filterdProducts = this.props.products.filter((product) => {
        return product.stocked === true;
      });
      this.setState({
        data: filterdProducts,
      });
    } else {
      this.setState({
        data: this.props.products,
      });
    }
  };

  render() {
    //console.log(this.state.data.products[0]);
    return (
      <div>
        <h1>IronStore</h1>
        <section>
          <SearchBar
            searchProducts={this.handleSearchProducts}
            onStock={this.filterOnStock}
            query={this.state.query}
          />
        </section>
        <section>
          <ProductTable products={this.state.data} />
        </section>
      </div>
    );
  }
}
