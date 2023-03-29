import styled from "styled-components";
import 'open-sans-fontface';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    font-family: 'Open Sans';
    margin-top: -3%;
`

const Content = styled.div`
    background-color: #FFFFFE;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 90%;
    height: 75%;
`

const HeaderContent = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
    }
    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`

export {
    Container,
    Content,
    HeaderContent
};