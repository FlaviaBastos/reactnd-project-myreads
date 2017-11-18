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
      toUpdate[0].shelf = newShelf
      this.setState(state => ({
        books: state.books
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
        <Route path='/search' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
