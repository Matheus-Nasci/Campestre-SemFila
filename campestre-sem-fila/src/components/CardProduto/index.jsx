import styled from "styled-components";
import 'open-sans-fontface';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 453px;
    height: 200px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    flex-wrap: 30%;
    margin-left: 1%;
`

const Foto = styled.div`
    width: 35%;
    height: 100%;
    background: url(${props => props.imagem});
    border-radius: 8px 0px 0px 8px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const Content = styled.div`
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-left: 16px;
    
    h1 {
        font-weight: 700;
        font-size: 32px;
        margin-top: 50%;
    }
    h2 {
        margin-top: 12px;
        font-weight: 700;
        font-size: 24px;
    }
    h3 {
        font-weight: 400;
        margin-top: -18%;
        font-size: 18px;
    }
`

export { Container, Foto, Content };