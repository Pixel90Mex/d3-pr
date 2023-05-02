import React, { useState } from 'react'
import MyCard from './MyCard'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const BookList = ({ books }) => {//farà il ciclo map per passare tutti i dati degli oggetti alla componente MyCard

    const [searchTerm, setSearchTerm] = useState('');
    const [searchedBooks, setSearchBooks] = useState([]);
    console.log(searchedBooks)

    const filteredBooks = (e) => {
        e.preventDefault()//evita il refresh della pagina
        const filter = books && books.filter((book) =>
            book.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase))

        setSearchBooks(filter);
    }

    return (
        <>
            <div className='mt-3 mb-3'>
                <Form onSubmit={filteredBooks}>{
                /**creo form per effettuare ricerca
                 * al suo interno creo funzione che ascolta evento onChange 
                 * e.target identifica l'input
                 * .value il suo valore
                 */}
                    <Form.Control
                        type='search'
                        placeholder='cerca libri'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Cerca
                    </Button>
                </Form>
            </div>
            <div className='d-flex flex-wrap justify-content-center gap-3'>

                {(searchedBooks.length === 0) ? (
                    books && books.map((book) => {
                        return (
                            <MyCard
                                key={book.asin}
                                cover={book.img}
                                title={book.title}
                            />
                        )
                    })
                ) :

                    (
                        searchedBooks && searchedBooks.map((book) => {
                            return (
                                <MyCard
                                    key={book.asin}
                                    cover={book.img}
                                    title={book.title}
                                />
                            )
                        })
                    )

                }
            </div>
        </>
    )
}

export default BookList