import styled from "styled-components";

const HeaderContent = styled.div`
    width: 100%;
    height: 100px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3%;
    overflow: auto;
    height: 100vh;

    .openModalBtn {
        bottom: 5%;
        border-radius: 8px;
        border: none;
        padding: 0;
        width: 20%;
        cursor: pointer;
        padding: 1% 4%;
        background-color: #84FF82;
        color: black;
        font-size: 16px;
        font-weight: bold;
        transition: 0.3s;
        &:hover{
            background-color: black;
            color: #84FF82;
            transition: 0.3s;
        }
    }
`

const ContentPrincipal = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: auto;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
`

const CardContainer = styled.div`
    margin-bottom: 40px;
    margin-left: 2%;

    @media (max-width: 768px) {
      flex-basis: 100%;
      margin-bottom: 20px;
    }
`

export { HeaderContent, ContentPrincipal, Content, CardContainer };
