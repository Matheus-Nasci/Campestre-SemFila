import styled from "styled-components";

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    .logo {
        width: 15%;
        margin: 1vw
    }
    .container_botoes {
        padding: 30px
    }
`;

const Botoes = styled.div`
    button {
        font-size: 1.5vw;
        margin: 10px;
        width: 30%;
        height: 40px;
        color: white;
        font-weight: bold;
        border: none;
        background-color: #6225E6;
        cursor: pointer;
        box-shadow: 3px 3px 0 black;
        transition: 0.2s;
    }
    button:hover {
        box-shadow: 8px 8px 0 black;
        transition: 0.2s;
    }
`;

export { ContainerHome, Botoes };
