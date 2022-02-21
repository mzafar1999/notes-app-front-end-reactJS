import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import parse from 'html-react-parser';
import { Button } from 'react-bootstrap';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-left: 15rem;
  position: relative;
  top: 100px;
  @media (max-width: 640px){
    margin-left: 3rem;

  }
`

const NotLoggedIn = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-left: 15rem;
  position: relative;
  top: 100px;
  @media (max-width: 640px){
    margin-left: 3rem;

  }
`

const Note = styled.div`
  margin: 1rem;
  border: 1px solid black;
  padding: 10px;
  min-width: 250px;
  flex-wrap: wrap;
`
const MyNotes = () => {
  const [userNotes, setUserNotes] = useState([])
  const user = useSelector(state=>state.user.currentUser)
  const newNote = useSelector(state=>state.note.note.note)
  useEffect(() => {
    user && setUserNotes(user.notes)    
  }, [newNote,userNotes])
  
  return (
    <Container>{
      user? userNotes.map((note,i)=>{
        return <Note key={i}>
          {parse(note.note)}
          <Button>Edit</Button>
          <Button variant='danger' className='mx-2'>Delete</Button>
        </Note>
      })  : <NotLoggedIn>
        Please Log in in order to see your notes!
      </NotLoggedIn>
     
    }</Container>
  )
}

export default MyNotes