import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 10%;
  background-color: #000080;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 98%;
  height: 100%;
`;

export { Header, Container };
