import React, {useContext} from 'react'
import { BooksContext } from '../context/BooksContext';

const Bookdetails = ({book}) => {
    const { dispatch}  = useContext(BooksContext)

    return (
        <li onClick = { () => dispatch({type: 'REMOVE_BOOK' , id : book.id})}>
           <p className = 'title'>{book.title}</p> 
           <p className = 'author'>by {book.author}</p> 
        </li>
    )
}

export default Bookdetails
