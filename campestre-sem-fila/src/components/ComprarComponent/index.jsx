import styled from "styled-components";
import 'open-sans-fontface';

const Container = styled.div`
    width: 100%;
    height: 100vh
    background-color: #F0F1F5;
`

const ContainerContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const Title = styled.h1`
    text-indent: 51px;
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-weight: 500;
`

const ContentLeft = styled.div`
    width: 55%;
    height: 100%;
`

const ContentRight = styled.div`
    width: 45%;
    height: 100%;
`

const FormInput = styled.div`
    display: flex:
    flex-direction: column;
    width: 100%;
    height: 20%;
`

const Input = styled.input`
    margin-bottom: 21px;
    margin-left: 51px;
    border-radius: 30px;
    border: none;
    background-color: #FFFFFE;
    width: 479px;
    height: 59px;
    text-indent: 4%;
    font-size: 18px;
    ::placeholder {
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 300;   
        color: #000000;
        text-indent: 4%;
    }
    $:focus {
        border: none;
    }
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Itens = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin-left: 51px;
`

export { 
    Container,
    ContainerContent,
    ContentLeft,
    ContentRight, 
    FormInput,
    Input,
    Itens,
    Title
};