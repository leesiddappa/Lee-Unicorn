import { CSSObject } from "@emotion/react";
import colors from "../style/colors";

export const __appWrapper = (): CSSObject => ({
  color: colors.darkGrey,
  backgroundColor: colors.lightGrey,
  fontSize: "18px",
  margin: 0,
});
