import React from "react";
import styled from "@emotion/styled";
import { __appWrapper } from "./AppStyles";
import SignUp from "../components/signUp/signUp";
// import firebase from "firebase/app";

const AppWrapper = styled.div(__appWrapper);

function App() {
  return (
    <AppWrapper>
      <SignUp />
    </AppWrapper>
  );
}

export default App;
