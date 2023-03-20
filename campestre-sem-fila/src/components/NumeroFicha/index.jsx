import styled, {css} from "styled-components";

const TitlePreparando = css`
    font-size: 4rem;
    margin-top: 0.5rem;
    color: red;
`

const TitlePronto = css`
    font-size: 4rem;
    color: green;
`

const Title = styled.h1`
    ${props => props.status === "PREPARANDO" ? TitlePreparando : TitlePronto};
    margin: 0;
    margin-left: 1rem;
`

export default Title;