import React, {useReducer , createContext, useEffect} from 'react'
import { bookReducer } from '../reducer/bookReducer';

const BooksContext = createContext()

const BooksContextProvider = (props) => {
   const [books, dispatch] = useReducer(bookReducer , [] , () => {
      const saved = localStorage.getItem('books')
      return saved ? JSON.parse(saved) : []
   })

   useEffect( () => {
      localStorage.setItem('books', JSON.stringify(books))
   }, [books])

    return (
       <BooksContext.Provider value = {{books, dispatch}}>
          {props.children}
       </BooksContext.Provider>
    )
}

export {BooksContextProvider , BooksContext}
