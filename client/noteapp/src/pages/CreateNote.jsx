import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import styled from "styled-components";

const CreateNote = () => {
const [text,setText] = useState('')
const Wrapper = styled.div`
    margin-left: 10rem;
    margin-top: 5rem;
`
const Title = styled.h2`
    position: relative;
    top: 70px;
    margin-left: 10rem;
`
  return (
    <Container>
      <form>
        <Title>Create Note</Title>
        <Wrapper>
        <Editor
          init={{
            height: 500,
            menubar: false,
            width: 700
          }}
          apiKey='wgd3bmh5mszgm0bu5bq4ygm6ylnr13r6p9weu09891edyhnd'
          onEditorChange={(e)=>setText(e.target.value)}
        />
        </Wrapper>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
};

export default CreateNote;
