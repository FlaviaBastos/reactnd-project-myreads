import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelvesUI extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    shelfContent: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  changeShelf = (e, book) => {
    this.props.onUpdateBook(book, e.target.value)
  }

  render () {
    const { shelfTitle, shelfContent } = this.props

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {shelfContent.map(book => (
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
                      {book.authors ? book.authors.join(', '): ''}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default ShelvesUI
