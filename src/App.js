import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook(book, newShelf) {
    let toUpdate = this.state.books.filter((each) => each.id === book.id)
    BooksAPI.update(toUpdate[0], newShelf).then((books) => {
      toUpdate[0].shelf = newShelf
      this.setState(state => ({
        books: state.books
      }))
    })
  }

  render() {
    return (
      <div>
        <BookShelves
          books={this.state.books}
          onUpdateBook={(book, newShelf) =>
            this.updateBook(book, newShelf)
          }
        />
      </div>
    )
  }
}

export default BooksApp
