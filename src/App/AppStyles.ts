import { CSSObject } from "@emotion/serialize";
import colors from "../style/colors";

export const __appWrapper = (): CSSObject => ({
  color: colors.darkGrey,
  backgroundColor: colors.dodgerBlueBackground,
  fontSize: "18px",
});
