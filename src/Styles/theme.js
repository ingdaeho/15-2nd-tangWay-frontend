import { css } from "styled-components";

const selected = css`
  border: 2px solid black;
  border-radius: 10px;
`;

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SB = css`
  display: flex;
  justify-content: space-between;
`;

const flex = {
  SB,
  center,
};

const color = {
  black: "#1b1b1b",
  lightGray: "#f5f5f5",
  mainRed: "#d22c26",
  backGroundGray: "#eaeaea",
  white: "#ffffff",
  selected,
};

const theme = {
  color,
  flex,
  selected,
};

export default theme;
