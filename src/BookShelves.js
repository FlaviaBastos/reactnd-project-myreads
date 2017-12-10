import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShelvesUI from './ShelvesUI'
import PropTypes from 'prop-types'

class BookShelves extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  // changeShelf = (e, book) => {
  //   this.props.onUpdateBook(book, e.target.value)
  // }

  render() {
    const shelves = this.props.books
    let reading = shelves.filter(book => book.shelf === "currentlyReading")
    let toRead = shelves.filter(book => book.shelf === "wantToRead")
    let read = shelves.filter(book => book.shelf === "read")

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <ShelvesUI
                shelfTitle='Currently Reading'
                shelfContent={reading}
                books={this.props.books}
                onUpdateBook={(book, newShelf) =>
                  this.updateBook(book, newShelf)
                }
              />
              <ShelvesUI
                shelfTitle='Want to Read'
                shelfContent={toRead}
                books={this.props.books}
                onUpdateBook={(book, newShelf) =>
                  this.updateBook(book, newShelf)
                }
              />
              <ShelvesUI
                shelfTitle='Read'
                shelfContent={read}
                books={this.props.books}
                onUpdateBook={(book, newShelf) =>
                  this.updateBook(book, newShelf)
                }
              />
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
