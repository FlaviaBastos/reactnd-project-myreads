import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
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
      console.log('BOOKS FROM UPDATE: ', books)
      console.log('toUpdate[0].shelf: ', toUpdate[0].shelf)
      toUpdate[0].shelf = newShelf
      console.log('2 toUpdate[0].shelf: ', toUpdate[0].shelf)
      this.setState(state => ({
        books: state.books
      }))
    })
  }

  addToShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((books) => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.concat([book])
      }))
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookShelves
            books={this.state.books}
            onUpdateBook={(book, newShelf) =>
              this.updateBook(book, newShelf)
            }
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            onUpdateBook={(book, newShelf) =>
              this.addToShelf(book, newShelf)
            }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
