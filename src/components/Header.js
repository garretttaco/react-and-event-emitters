import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import theme from "../theme";
import { Link } from "react-router-dom";
import { DarkButton } from "./Button";

const Header = styled.header`
  background: ${theme.primary};
  box-shadow: inset 0 -1px 0 #026138;
  padding: 10px;
  color: ${theme.light};
  font-weight: 100;
  & > h1 {
    display: inline-block;
    width: 50%;
    & > a {
      color: ${theme.light};
    }
  }
  .links {
    display: inline-block;
    text-align: right;
    width: 50%;
  }
`;

const Pathname = styled.span`
  color: ${theme.light};
  font-weight: bold;
  padding-right: 10px;
  font-size: 20px;
`;

export default withRouter(props => {
  const { pathname } = props.location;
  const appType = pathname
    .split("/")
    .find(value => /emitter|redux/.test(value.toLowerCase()));
  return (
    <Header>
      <h1>
        <Link to="/">React and Event Emitters</Link>
      </h1>
      {appType && (
        <div className="links">
          <Pathname>/{appType}</Pathname>
          <DarkButton>
            <Link to={`/${appType}/modal`}>Modal example</Link>
          </DarkButton>
          <DarkButton>
            <Link to={`/${appType}/1`}>Redirect example</Link>
          </DarkButton>
        </div>
      )}
    </Header>
  );
});
