import styled from "@emotion/styled";
import React from "react";
import { __signUpCard, __signUpWrapper } from "./__styles";

const WrapperDiv = styled.div(__signUpWrapper);
const SignUpCardDiv = styled.div(__signUpCard);

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = () => {
  return (
    <WrapperDiv>
      <SignUpCardDiv>Please Register!</SignUpCardDiv>
    </WrapperDiv>
  );
};

export default SignUp;
