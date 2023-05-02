import React from 'react'
import MyBadge from '../components/MyBadge'
import BookList from '../components/BookList'

const Home = ({books}) => {
  return (
    <>
    <MyBadge
      color="secondary"
      str="Epicode"
    />
    <BookList
    books={books}
    />
    </>
  )
}

export default Home