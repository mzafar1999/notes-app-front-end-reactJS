import React, { useEffect } from "react";
import styled from "styled-components";
import { notes } from "./notes";
const Home = () => {
  useEffect(() => {
    
    
  }, [])
  
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-left: 15rem;
  position: relative;
  top: 100px;
`
const Note = styled.div`
  margin: 1rem;
  border: 1px solid black;
  padding: 10px;
  min-width: 250px;
  flex-wrap: wrap;
  
`

  return (
    <Container>
      {notes.map((note)=>{
        return <Note>{note.note}</Note>
      })}
    </Container>
  );
};

export default Home;
