import styled from "styled-components";
import 'typeface-roboto'
import 'open-sans-fontface'

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 320px;
  background-color: #414E66;
`

const HeaderMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    color: white;
    align-items: center;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    height: 10%;
    img {
        width: 50px;
        height: 50px;
    }
`

const ContentMenu = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
`

const SectionMenu = styled.div`
  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    margin-left: 12px;
    color: white;
    font-size: 16px;
  }
`

export { HeaderMenu, MenuDiv, ContentMenu, SectionMenu };