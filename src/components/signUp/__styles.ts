import { CSSObject } from "@emotion/react";
import colors from "../../style/colors";

export const __signUpWrapper = (): CSSObject => ({
  alignItems: "flex-start",
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
});

export const __signUpCard = (): CSSObject => ({
  marginTop: "15%",
  minHeight: "400px",
  minWidth: "400px",
  boxShadow: `3px 5px 20px ${colors.lightBlue}`,
  borderRadius: "6px",
});
