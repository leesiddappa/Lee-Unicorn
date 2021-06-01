const gutterWidthMd = "24px";
const gutterWidthSm = "16px";
const halfGutterWidthSm = "8px";

export const mqMobile = "@media only screen and (max-width: 768px)";

const __afterBefore = () => ({
  "&:after": {
    display: "table",
    content: "' '",
    clear: "both",
  },
  "&:before": {
    display: "table",
    content: "' '",
  },
});
export const __container = () => ({
  marginRight: "auto",
  marginLeft: "auto",
  paddingLeft: gutterWidthSm,
  paddingRight: gutterWidthSm,
  "@media (min-width:768px)": {
    width: "720px",
    paddingLeft: gutterWidthMd,
    paddingRight: gutterWidthMd,
  },
  "@media (min-width:992px)": {
    width: "944px",
  },
  // "@media (min-width:1300px)": {
  //   width: "1252px",
  // },
  ...__afterBefore,
});

export const __containerFulid = () => ({
  margiRight: "auto",
  marginLeft: "auto",
  paddingLeft: gutterWidthSm,
  paddinRight: gutterWidthSm,
  width: "80%",
  "@media (min-width: 768px)": {
    paddingLeft: gutterWidthMd,
    paddinRight: gutterWidthMd,
    width: "inherit",
  },
  ...__afterBefore,
});

export const __row = () => ({
  marginLeft: -halfGutterWidthSm,
  margiRight: -halfGutterWidthSm,
  "@media (min-width: 768px)": {
    marginLeft: -halfGutterWidthSm,
    margiRight: -halfGutterWidthSm,
  },
  ...__afterBefore,
});
