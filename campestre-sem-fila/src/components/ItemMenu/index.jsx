import styled, { css } from "styled-components";
import 'open-sans-fontface';

const paginaAtual = css`
    font-weight: bold;
    font-size: 25px;
    img {
        transform: scale(1.2);
        transition: transform 0.2s linear;
    }
`
const paginaNaoAtual = css`
    display: flex;
    transition: font-size 0.2s linear;
    img {
        transition: 0.2s linear;
    }
    &:hover {
        font-weight: bold;
        transition: all 0.2s linear;
        font-size: 25px;
        img {
            transform: scale(1.2);
            transition: transform 0.2s linear;
        }
    }
`

const Item = styled.div`
  width: 320px;
    a {
        cursor: pointer;
        display: flex;
        box-shadow: 
        justify-content: left;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        width: 100%;
        margin-left: 21px;
        font-weight: regular;
        color: white;
        ${props => props.selecionado ? paginaAtual : paginaNaoAtual}
    }
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 8%;
`

export default Item;