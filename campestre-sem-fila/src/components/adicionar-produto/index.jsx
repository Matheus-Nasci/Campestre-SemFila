import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  background-color: #f0f1f5;
`;

const Form = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: white;
  padding: 5%;
  box-shadow: 0px 10px 100px 53px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  h1 {
    text-align: center;
  }
  span {
    font-size: 20px;
  }
  input:not(:last-of-type) {
    font-size: 20px;
    width: 100%;
    text-indent: 5%;
    height: 50px;
    border: 1px none;
    border-radius: 10px;
    box-shadow: 0px 10px 100px 53px rgba(0, 0, 0, 0.1);
    margin-bottom: 2%;
  }
  button {
    margin-top: 10%;
    padding: 2% 20%;
    border: none;
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.2s all;
    :hover {
      border: 1px solid black;
      transition: 0.2s all;
      background-color: white;
      color: black;
    }
  }

  @media (max-width: 600px) {
    width: 95%;
    padding: 10%;
    input:not(:last-of-type) {
      font-size: 16px;
      height: 40px;
    }
  }
`;

export { Container, Form };
