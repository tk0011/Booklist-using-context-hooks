import React from 'react';
import { BooksContextProvider } from './context/BooksContext';
import Navbar from './component/navbar'
import Booklist from './component/booklist';
import NewbookForm from './component/newbookform'

function App() {
  return (
    <div className="app">
        <BooksContextProvider>
            <Navbar />
            <Booklist />
            <NewbookForm />
        </BooksContextProvider>
    </div>
  );
}

export default App;
