import styled, {css} from "styled-components";

const TitlePreparando = css`
    font-size: 6rem;
`

const TitlePronto = css`
    color: green;
    font-size: 6rem;
`

const TitleLast = css`
    font-size: 10rem;
`

const Title = styled.h1`
    ${props => props.status === "PREPARANDO" ? TitlePreparando : TitlePronto};
    ${props => props.tamanho === "GRANDE" ? TitleLast : TitlePreparando};
    margin: 0;
    margin-left: 1rem;
`

export default Title;