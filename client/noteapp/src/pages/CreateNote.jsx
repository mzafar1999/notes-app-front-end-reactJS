import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import './createnote.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import parse from 'html-react-parser';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const Wrapper = styled.div`
  margin-left: 10rem;
  margin-top: 5rem;
  @media (max-width: 640px) {
    margin-left: 4rem;
  }
`;
const Title = styled.h2`
  position: relative;
  top: 70px;
  margin-left: 10rem;
  @media (max-width: 640px) {
    margin-left: 4rem;
  }
`;



const CreateNote = () => {
  
  
  const [state, setState] = useState({ value: null });
  const [note,setNote] = useState('')

  const handleCreateNote = e=>{
    e.preventDefault()
    setNote(state.value)
}
  const handleChange = value => {
    setState({ value });
  };
  const Editor = styled(ReactQuill)`
      
  `
  return (
    <Container>
      <form>
        <Title>Create Note</Title>
        <Wrapper>
        
      <ReactQuill
        theme='snow'
        value={state.value}
        onChange={handleChange}
        />
          <Button className="mt-3" onClick={handleCreateNote}>Create Note</Button>
        </Wrapper>
        <br />
      </form>
      {/* <div style={{marginLeft:'10em'}}>
          <h1>Notes</h1>
        {parse(note)}
      </div> */}
    </Container>
  );
};

export default CreateNote;
