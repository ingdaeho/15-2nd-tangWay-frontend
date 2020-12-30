import { css } from "styled-components";

const flexcenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexSB = css`
  display: flex;
  justify-content: space-between;
`;

const Color = {
  fontcolorwhite: "#ffffff",
  fontcolorblack: "#1b1b1b",
  fontcolorlightgray: "#f5f5f5",
  maincolorred: "#d22c26",
  backgroundgray: "#eaeaea",
};

const theme = {
  Color,
  flexcenter,
  flexSB,
};

export default theme;
