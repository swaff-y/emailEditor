//https://stackoverflow.com/questions/70276271/react-draft-wysiwyg-dropdown-options-not-working

import './App.css';
import styled from 'styled-components';
import Email from './classes/email';
import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from './functions';
import WYSIWYGEditor from './Editor'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Title = styled.h1`

`

const HeaderWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 400px;
`

const HeadWrap = styled.div`
  display:flex;
  justify-content: flex-start;
  padding: 5px;
`

const Label = styled.span`
  font-weight: 700;
  width: 80px;
`
const Content = styled.span`
  font-weight: 500;
`
const MessageWrapper = styled.div`
  border: 1px solid black;
`

function App() {
  const [ email, setEmail ] = useState(new Email({
    from: "kyle@swaff.co.za",
    to: "kyle@swaff.id.au",
    subject: "Immigration",
    message: "<html><body><h1>Testing</h1><p>This is a test message</p></body></html>"
  }));

  useEffect(()=>{
    email.setFrom("kyle@swaff.co.za");
    email.setTo("kyle@swaff.id.au");
    email.setSubject("Immigration");
    email.setMessage("<html><body><h1>Testing</h1><p>This is a test message</p></body></html>");
    setEmail(email);
  },[email])

  const createMarkup = () => {
    return { __html: email.message }
  }

  const onChange = (msg) => {
    console.log(`The Message %c${msg}`, "color:red;");
  }

  return (
    <Container>
      <Title>Email Editor</Title>
      <HeaderWrapper>
      {
        Object.keys(email).map((item,index)=>(
          item !== "message"
          &&
          <HeadWrap key={index}>
            <Label>{ capitalizeFirstLetter(item) }: </Label>
            <Content>{ email[item] }</Content>
          </HeadWrap>
        ))
      }
      </HeaderWrapper>
      <WYSIWYGEditor callback={onChange} default={email.message} />
    </Container>
  );
}

  export default App;
