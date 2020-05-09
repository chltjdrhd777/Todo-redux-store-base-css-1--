import React, { Fragment } from "react";
import styled from "styled-components";

function App() {
  return (
    <Fragment>
      <Head>What you have to do right now</Head>
      <ListContainer>
        <Todobars>
          <TodoText>hi</TodoText>
          <TodoEditTools>
            <BottonEdit>hi</BottonEdit>
            <BottonDelete>d</BottonDelete>
          </TodoEditTools>
        </Todobars>
      </ListContainer>
    </Fragment>
  );
}

//to pile contents in the column, display:flex + flex-direction:column
const Head = styled.header`
  color: white;
  font-size: 35px;
  font-weight: 700;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.section`
  background-color: white;
  width: 95%;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 310px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: auto;
`;

const Todobars = styled.div`
  font-size: 20px;
  background-color: white;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1);
  width: 80%;
  padding: 10px;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  box-sizing: border-box;
  border: 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TodoText = styled.div`
  margin-left: 10px;
`;
const TodoEditTools = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BottonEdit = styled.button``;
const BottonDelete = styled.button``;

export default App;
