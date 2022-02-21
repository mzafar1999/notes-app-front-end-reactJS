import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import './createnote.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { publicRequest } from "./Login";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { noteCreatingStart,noteCreatingSuccess,noteCreatingFailure } from "../redux/noteReducer";
import { addNote, noteCreate, noteError } from "../redux/userReducers";
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


const createNote = async(dispatch, note) => {
  dispatch(noteCreate())
  try {
      const res = await publicRequest.post('/users/note', note)
      dispatch(addNote(res.data))
  } catch (error) {
      dispatch(noteError())
  }
}


const CreateNote = () => {
  
  const user = useSelector(state=>state.user.currentUser)
  
  const [state, setState] = useState({ value: null });
  const dispatch = useDispatch()
  const handleCreateNote = async(e)=>{
    e.preventDefault()
    createNote(dispatch,{note:state.value,user:user.id})
  }
  const handleChange = value => {
    setState({ value });
  };
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
    </Container>
  );
};

export default CreateNote;
