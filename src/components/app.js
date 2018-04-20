import React, { Component } from 'react';

import BookList from '../containers/book-list';
import ActiveBook from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
  <div>
		<BookList/>
		<ActiveBook/>
	</div>
    );
  }
}
