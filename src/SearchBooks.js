import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { query } = this.state

    let showingBooks
    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        console.log('Search results: ')
        showingBooks = books
        showingBooks.map((book) => console.log('title: ', book.title))
      })
    } else {
      showingBooks = ''
    }



    return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">

          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />

        </div>
      </div>
      <div className="search-books-results">
        <p>Search results here ###</p>
        <span>{showingBooks.length}</span>
        <ol className="books-grid">
          {showingBooks.map((book) => (
            <li key={book.id}>
                <p>{book.title}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default SearchBooks
