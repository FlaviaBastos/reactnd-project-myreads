import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery(query) {
    this.setState({ query: query.trim() })
    if (query.length > 0) {
      BooksAPI.search(query, 20).then((books) => {
        if (books.error) {
          this.setState({ showingBooks: [] })
        } else {
          this.setState({ showingBooks: books })
        }
      })
    } else {
      this.setState({ showingBooks: [] })
    }
  }

  render() {
    const { query, showingBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        {showingBooks && (
          <div className="search-books-results">
            <ol className="books-grid">
              {showingBooks.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                      <div className="book-shelf-changer">
                        <form>
                          <select value={book.shelf} onChange={(e) => this.changeShelf(e, book)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </form>
                      </div>
                    </div>
                    <div className="book-title">
                      {book.title}
                    </div>
                    {book.authors && (
                      <div className="book-authors">
                        {book.authors.map((author) => (
                          <span key={author}>{author}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    )

  }
}

export default SearchBooks
