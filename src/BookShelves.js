import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class BookShelves extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  changeShelf = (e, book) => {
    this.props.onUpdateBook(book, e.target.value)
  }

  render() {
    const shelves = this.props.books

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {shelves.filter(book => book.shelf === "currentlyReading").map(book => (
                      <li key={book.title}>
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
                          <div className="book-authors">
                            {book.authors.map((author) => (
                              <span key={author}>{author}</span>
                            ))}
                          </div>

                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {shelves.filter(book => book.shelf === "wantToRead").map(book => (
                      <li key={book.title}>
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
                          <div className="book-authors">
                            {book.authors.map((author) => (
                              <span key={author}>{author}</span>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {shelves.filter(book => book.shelf === "read").map(book => (
                      <li key={book.title}>
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
                          <div className="book-authors">
                            {book.authors.map((author) => (
                              <span key={author}>{author}</span>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link
              to='/search'
            >Add a book</Link>
          </div>
        </div>
      </div>
    ) // return
  } // render()
} // class

export default BookShelves
