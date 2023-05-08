import styled from "styled-components";

const Header = styled.div`
  width: 96%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Titulo = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 44px;
`;

const ContagemItens = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
`;

export { Header, Titulo, ContagemItens };
