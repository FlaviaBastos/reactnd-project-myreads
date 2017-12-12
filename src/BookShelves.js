import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShelvesUI from './ShelvesUI'
import PropTypes from 'prop-types'

class BookShelves extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {
    const shelves = this.props.books
    let reading = shelves.filter(book => book.shelf === "currentlyReading")
    let toRead = shelves.filter(book => book.shelf === "wantToRead")
    let read = shelves.filter(book => book.shelf === "read")

    const content = {
      "Currentlyreading": reading,
      "Want to Read": toRead,
      "Read": read
    }

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {Object.entries(content).map((data) => (
                <ShelvesUI key={data[0]}
                  shelfTitle={data[0]}
                  shelfContent={data[1]}
                  books={this.props.books}
                  onUpdateBook={(book, newShelf) =>
                    this.props.onUpdateBook(book, newShelf)
                  }
                />
              ))}
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
