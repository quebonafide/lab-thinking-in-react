import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {

  render() {
    const renderRow = this.props.products.map((ele) => {
      return ProductRow(ele);
    });
    return (
      <div className="flexbox">
        <p>Name Price</p>
        <section>{renderRow}</section>
      </div>
    );
  }
}
