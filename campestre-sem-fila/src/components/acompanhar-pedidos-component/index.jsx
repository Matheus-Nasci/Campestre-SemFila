import styled from "styled-components";

const Body = styled.body`
  width: 100%;
  height: 100vh;
  background-color: #f0f1f5;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  h1 {
    font-size: 40px;
  }
`;

const Container = styled.div`
  overflow: auto;
  overflow-x: hidden;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 4%;
`;

export { Body, Container, Header };
