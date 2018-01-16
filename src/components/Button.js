import styled from "styled-components";
import theme from "../theme";

const Button = styled.button`
  font: inherit;
  color: ${theme.light};
  padding: 7px 12px;
  border: 1px solid #026138;
  background: ${theme.primary};
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;

  &:hover,
  &:active,
  &:focus {
    background: ${theme.dark};
  }
`;

export const DarkButton = Button.extend`
  background: ${theme.dark};
  color: ${theme.light};
  & > a {
    color: ${theme.light};
  }
`;

export default Button;
