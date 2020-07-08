import React , {useContext} from 'react'
import { BooksContext } from '../context/BooksContext';


const Navbar = () => {
   const { books} = useContext(BooksContext)
    return (
        <div className = 'navbar'>
            <h1>My Library</h1>
            <p>You currently have {books.length} books to go through...</p>
        </div>
    )
}

export default Navbar
