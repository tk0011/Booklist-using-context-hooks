import React , {useContext , useState} from 'react'
import { BooksContext } from '../context/BooksContext';

const NewbookForm = () => {
    const {dispatch} = useContext(BooksContext)
    const [ title ,setTitle] = useState('')
    const [ author , setAuthor ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch({type: 'ADD_BOOK' , 
          book : {title, author}
       })
        setTitle('')
        setAuthor('')
    }

    return (
       <form onSubmit = {handleSubmit}>
            <input type="text" placeholder = 'Title' value= {title} required 
            onChange = { (e) => setTitle(e.target.value)}/>

            <input type="text" placeholder = 'Author' value= {author} required 
            onChange = { (e) => setAuthor(e.target.value)}/>

            <input type="submit" value = 'Add Book'/>

       </form>
    )
}

export default NewbookForm
