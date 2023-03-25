import styled from "styled-components";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -3%;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 580px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;

  div:not(:last-child):not(:first-child) {
    display: flex;
    flex-direction: column;
  }
  
  form {
    margin-top: 10px;
  }
  margin-left: -25%;
`;

const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  margin-right: 2%;
  margin-top: 2%;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid lightgray;
  font-size: 40px;
  margin: 0;
  paddin-bottom: 10px;
  padding-bottom: 4%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const InputLabel = styled.label`
  margin: 10px 0;
  font-size: 1.2rem;
`;

const InputField = styled.input`
  width: 100%;
  max-width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 5px;
`;

const FileInputLabel = styled.label`
  margin: 10px 0;
  font-size: 1.2rem;
  display: block;
`;

const FileInputField = styled.input`
  margin-top: 5px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border: 1px solid Cornflowerblue;
    background-color: white;
    color: cornflowerblue;
    transition: 0.3s;
  }
`;

const CancelButton = styled(Button)`
  background-color: crimson;
  &:hover {
    background-color: white;
    color: crimson;
    border: 1px solid crimson;
  }
`;

export {
    CancelButton,
    Button,
    Footer,
    Body,
    Title,
    CloseButton,
    TitleCloseBtn,
    ModalBackground,
    ModalContainer,
    InputLabel,
    InputField,
    FileInputLabel,
    FileInputField,
};
